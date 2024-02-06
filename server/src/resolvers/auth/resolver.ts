import { MyContext } from "../../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { DEFAULT_AUTH_REDIRECT_URL } from "../../constants";

import { DataMapping, TokenService } from "../../services/token-service";
import { MailService } from "../../services/mail-service";
import { User } from "../../../prisma/__generated__/graphql";
import {
  Prisma,
  account_status,
  organization,
  user_invitation_status,
} from "prisma/prisma-client";
import { templates } from "../../templates";
import { UsernamePassWordInput, ResponseError } from "./types";

@InputType()
class RegisterInput extends UsernamePassWordInput {
  @Field({ nullable: true })
  redirectUrl?: string;
  @Field({ nullable: true })
  name?: string;
  @Field(() => [Int], { nullable: true })
  preJoinedOrgs?: number[];
}

@InputType()
class LoginInput extends UsernamePassWordInput {}

@ObjectType()
class LoginRes extends ResponseError {
  @Field({ nullable: true })
  accessToken?: string;
}

@InputType()
class VerifyAccountInput {
  @Field()
  token: string;
}
@ObjectType()
class VerifyAccountRes extends ResponseError {
  @Field({ nullable: true })
  isSuccess?: boolean;
  @Field({ nullable: true })
  accessToken?: string;
}

@InputType()
class ForgotPasswordInput {
  @Field()
  username: string;

  @Field({ nullable: false })
  redirectUrl: string;
}
@ObjectType()
class ForgotPasswordRes extends ResponseError {
  @Field({ nullable: true })
  isSuccess?: boolean;
}

@InputType()
class ResetPasswordInput {
  @Field()
  token: string;

  @Field()
  password: string;
}
@ObjectType()
class ResetPasswordRes extends ResponseError {
  @Field({ nullable: true })
  accessToken?: string;
}

@ObjectType()
class RegisterResponse extends ResponseError {
  @Field(() => Boolean, { nullable: true })
  isSuccess?: boolean;
}

@Resolver()
export class AuthResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, user }: MyContext): Promise<User | null> {
    if (!user) {
      return null;
    }
    const userFound = await prisma.user.findUnique({
      where: { id: user.userId },
    });

    return userFound;
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Arg("data") data: RegisterInput,
    @Ctx() { prisma }: MyContext
  ): Promise<RegisterResponse> {
    if (data?.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "Userame must be atleast 3 characters long.",
          },
        ],
      };
    }
    if (!data.password || data.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "Password must be atleast 3 characters long.",
          },
        ],
      };
    }
    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });
    const preJoinedOrgs = await Promise.all(
      (data.preJoinedOrgs || [])
        .map(
          async (orgId) =>
            await prisma.organization.findUnique({
              where: { id: orgId },
              select: { id: true, name: true, slug: true },
            })
        )
        .filter((i) => !!i) as unknown as NonNullable<
        DataMapping["verifyAccountToken"]["preJoinedOrgs"]
      >
    );
    if (userFound && userFound.status === account_status.active) {
      return {
        errors: [{ field: "username", message: "User already exists." }],
      };
    } else {
      const hashedPassword = await bcrypt.hash(data.password, 5);
      const userCreateRequest: Prisma.userUpsertArgs["create"] = {
        username: data.username,
        password: hashedPassword,
        name: data.name,
        user_organizations: {
          createMany: {
            data: preJoinedOrgs.map((i) => ({
              organization_id: i.id,
              invitation_status: user_invitation_status.connected,
              slug: i.slug,
            })),
          },
        },
      };
      const userUpdateRequest: Prisma.userUpsertArgs["update"] = {
        username: data.username,
        password: hashedPassword,
        name: data.name,
        user_organizations: userFound
          ? {
              connectOrCreate: preJoinedOrgs.map((org) => ({
                create: {
                  organization_id: org.id,
                  invitation_status: user_invitation_status.connected,
                  slug: org.slug,
                },
                where: {
                  user_id_organization_id: {
                    user_id: userFound?.id,
                    organization_id: org.id,
                  },
                },
              })),
            }
          : {
              createMany: {
                data: preJoinedOrgs.map((org) => ({
                  organization_id: org.id,
                  invitation_status: user_invitation_status.connected,
                  slug: org.slug,
                })),
              },
            },
      };
      const user = await prisma.user.upsert({
        where: { username: data.username },
        create: userCreateRequest,
        update: userUpdateRequest,
      });

      const verifyToken = TokenService.generateVerifyAccountToken({
        userId: user.id,
        username: user.username,
        preJoinedOrgs,
      });
      const mailService = new MailService();
      const targetUrl = new URL(data.redirectUrl ?? DEFAULT_AUTH_REDIRECT_URL);
      targetUrl.searchParams.append("token", verifyToken);
      try {
        const isSuccess = await mailService.send({
          to: data.username, // list of receivers
          subject: "Activate Account", // Subject line
          html: templates.verifyAccount(targetUrl),
        });
        if (isSuccess) {
          return {
            isSuccess: true,
          };
        }
        return {
          errors: [
            {
              field: "username",
              message:
                "Couldn't sent activation mail to provided email. Please try again later.",
            },
          ],
        };
      } catch (err) {
        return {
          errors: [
            {
              field: "null",
              message:
                typeof err.message == "string" ? err.message : "Server error.",
            },
          ],
        };
      }
    }
  }

  @Mutation(() => VerifyAccountRes)
  async verifyAccount(
    @Arg("data") data: VerifyAccountInput,
    @Ctx() { prisma }: MyContext
  ): Promise<VerifyAccountRes> {
    if (data.token) {
      const tokenData = await TokenService.verifyToken(
        data.token,
        "verifyAccountToken"
      );
      const userFound = await prisma.user.findUnique({
        where: { id: Number(tokenData?.userId) },
        include: {
          user_organizations: {
            distinct: ["organization_id"],
            select: {
              organization: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      });

      if (data && userFound) {
        const userOrgs = userFound?.user_organizations.reduce((acc, curr) => {
          return acc.find((i) => i.id === curr.organization?.id)
            ? acc
            : [
                ...acc,
                {
                  id: curr.organization?.id!,
                  name: curr.organization?.name ?? curr.organization?.slug!,
                },
              ];
        }, [] as Pick<organization, "id" | "name">[]);
        const user = await prisma.user.update({
          where: { id: userFound.id },
          data: { status: account_status.active },
        });
        const accessToken = TokenService.generateAccessToken({
          userId: user.id,
          username: user.username,
          name: user.name,
          orgs: userOrgs,
        });
        return {
          isSuccess: true,
          accessToken,
        };
      }
    }
    return {
      errors: [{ field: "token", message: "Invalid token!" }],
    };
  }

  @Mutation(() => LoginRes)
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() { prisma }: MyContext
  ): Promise<LoginRes> {
    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
        status: account_status.active,
      },
      include: {
        user_organizations: {
          distinct: ["organization_id"],
          select: {
            organization: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
    if (userFound) {
      const valid = await bcrypt.compare(data.password, userFound.password);
      if (valid) {
        const userOrgs = userFound?.user_organizations.reduce((acc, curr) => {
          return acc.find((i) => i.id === curr.organization?.id)
            ? acc
            : [
                ...acc,
                {
                  id: curr.organization?.id!,
                  name: curr.organization?.name ?? curr.organization?.slug!,
                },
              ];
        }, [] as Pick<organization, "id" | "name">[]);
        const accessToken = TokenService.generateAccessToken({
          username: userFound.username,
          name: userFound.name,
          orgs: userOrgs,
          userId: userFound.id,
        });
        return {
          accessToken,
        };
      }
      return {
        errors: [{ field: "password", message: "Invalid password!" }],
      };
    }
    return {
      errors: [{ field: "username", message: "Couldn't find that user!" }],
    };
  }

  @Mutation(() => ForgotPasswordRes)
  async forgotPassword(
    @Arg("data") data: ForgotPasswordInput,
    @Ctx() { prisma }: MyContext
  ): Promise<ForgotPasswordRes> {
    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });
    if (userFound) {
      const resetPasswordToken = TokenService.generateResetPasswordToken({
        username: userFound.username,
        userId: userFound.id,
      });
      const targetUrl = new URL(data.redirectUrl);
      targetUrl.searchParams.append("token", resetPasswordToken);
      const mailService = new MailService();
      const isSuccess = await mailService.send({
        to: data.username, // list of receivers
        subject: "Reset Password", // Subject line
        html: templates.resetPassword(targetUrl),
      });
      if (isSuccess) {
        return {
          isSuccess: true,
        };
      }
      return {
        errors: [
          {
            field: "email",
            message:
              "Couldn't sent activation mail to provided email. Please try again later.",
          },
        ],
      };
    } else {
      return {
        errors: [
          {
            field: "email",
            message: "User not found for provided email.",
          },
        ],
      };
    }
  }

  @Mutation(() => ResetPasswordRes)
  async resetPassword(
    @Arg("data") data: ResetPasswordInput,
    @Ctx() { prisma }: MyContext
  ): Promise<ResetPasswordRes> {
    const user = await TokenService.verifyToken(
      data.token,
      "resetPasswordToken"
    );
    if (user) {
      const userFound = await prisma.user.findUnique({
        where: {
          username: user.username,
        },
      });
      if (userFound) {
        const passwordHash = await bcrypt.hash(data.password, 5);
        const updatedUser = await prisma.user.update({
          data: { password: passwordHash, status: account_status.active },
          where: { id: userFound.id },
          include: {
            user_organizations: {
              distinct: ["organization_id"],
              select: {
                organization: {
                  select: {
                    id: true,
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
        });
        const userOrgs = updatedUser?.user_organizations.reduce((acc, curr) => {
          return acc.find((i) => i.id === curr.organization?.id)
            ? acc
            : [
                ...acc,
                {
                  id: curr.organization?.id!,
                  name: curr.organization?.name ?? curr.organization?.slug!,
                },
              ];
        }, [] as Pick<organization, "id" | "name">[]);
        const accessToken = TokenService.generateAccessToken({
          userId: userFound.id,
          username: userFound.username,
          name: userFound.name,
          orgs: userOrgs,
        });
        return {
          accessToken,
        };
      }
    }
    return {
      errors: [
        {
          field: "token",
          message: "Invalid token.",
        },
      ],
    };
  }
}
