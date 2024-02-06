import { MyContext } from "../../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { DEFAULT_AUTH_REDIRECT_URL } from "../../constants";

import { TokenService } from "../../services/token-service";
import { MailService } from "../../services/mail-service";
import { User } from "../../../prisma/__generated__/graphql";
import {
  Prisma,
  account_status,
  organization,
  user_invitation_status,
} from "prisma/prisma-client";
import { templates } from "../../templates";
import { ResponseError } from "../auth/types";
import moment from "moment-timezone";
@InputType()
class InviteUserInput {
  @Field()
  username: string;
  @Field()
  orgId: number;
  @Field()
  redirectUrl: string;
}
@ObjectType()
class InviteUserResponse extends ResponseError {
  @Field({ nullable: true })
  isSuccess?: boolean;
  @Field({ nullable: true })
  isNewUser?: boolean;
}

@InputType()
class JoinOrgInput {
  @Field()
  token: string;
}

@Resolver()
export class UserOrgActionsResolver {
  @Mutation(() => InviteUserResponse)
  async inviteUser(
    @Arg("data") data: InviteUserInput,
    @Ctx() { prisma }: MyContext
  ): Promise<InviteUserResponse> {
    const [user, org] = await Promise.all([
      prisma.user.findUnique({ where: { username: data.username } }),
      prisma.organization.findUnique({ where: { id: data.orgId } }),
    ]);
    if (!org) {
      return {
        errors: [
          {
            field: "orgId",
            message: "The organization doesn't exists on system.",
          },
        ],
      };
    }
    try {
      if (!user) {
        const invitationToken = TokenService.generateUserOrgInvitationToken({
          isNewUser: true,
          username: data.username,
          orgId: org.id,
          orgName: org.name || org.slug,
        });
        const mailService = new MailService();
        const targetUrl = new URL(
          data.redirectUrl ?? DEFAULT_AUTH_REDIRECT_URL
        );
        targetUrl.searchParams.append("token", invitationToken);
        const isSuccess = await mailService.send({
          to: data.username, // list of receivers
          subject: `Join Org ${org.name || org.slug}`, // Subject line
          html: templates.joinOrg(targetUrl, org.name || org.slug),
        });
        if (isSuccess) {
          return {
            isSuccess: true,
          };
        }
        return {
          errors: [
            {
              field: "userId",
              message:
                "Couldn't sent activation mail to provided email. Please try again later.",
            },
          ],
        };
      }
      const isUserConnected = await prisma.user_organization.findUnique({
        where: {
          user_id_organization_id: {
            user_id: user.id,
            organization_id: org.id,
          },
          invitation_status: user_invitation_status.connected,
        },
      });
      if (isUserConnected) {
        return {
          errors: [
            {
              field: "userId",
              message: "User is already connected to organization.",
            },
          ],
        };
      }
      const userOrg = await prisma.user_organization.upsert({
        create: {
          user_id: user.id,
          organization_id: org.id,
          slug: org.slug,
          invitation_status: user_invitation_status.invited,
          last_invited: moment().toDate(),
        },
        update: {
          invitation_status: user_invitation_status.invited,
          last_invited: moment().toDate(),
        },
        where: {
          user_id_organization_id: {
            user_id: user.id,
            organization_id: org.id,
          },
        },
      });
      const invitationToken = TokenService.generateUserOrgInvitationToken({
        userId: user.id,
        username: user.username,
        userOrgId: userOrg.id,
        orgName: org.name || org.slug,
      });
      const mailService = new MailService();
      const targetUrl = new URL(data.redirectUrl ?? DEFAULT_AUTH_REDIRECT_URL);
      targetUrl.searchParams.append("token", invitationToken);
      const isSuccess = await mailService.send({
        to: user.username, // list of receivers
        subject: `Join Org ${org.name || org.slug}`, // Subject line
        html: templates.joinOrg(targetUrl, org.name || org.slug),
      });
      if (isSuccess) {
        return {
          isSuccess: true,
        };
      }
      return {
        errors: [
          {
            field: "userId",
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
  @Mutation(() => InviteUserResponse)
  async joinOrg(
    @Arg("data") data: JoinOrgInput,
    @Ctx() { prisma }: MyContext
  ): Promise<InviteUserResponse> {
    const tokenData = await TokenService.verifyToken(
      data.token,
      "userOrgInvitationToken"
    );
    const user = await prisma.user.findUnique({
      where: { username: tokenData?.username },
    });
    if (tokenData?.isNewUser && !user) {
      return {
        isNewUser: true,
      };
    }
    try {
      const userOrg = tokenData?.userOrgId
        ? await prisma.user_organization.findUnique({
            where: { id: tokenData?.userOrgId },
          })
        : await prisma.user_organization.findUnique({
            where: {
              user_id_organization_id: {
                organization_id: tokenData?.orgId,
                user_id: user!.id,
              },
            },
          });
      if (userOrg) {
        const updatedUserOrg = await prisma.user_organization.update({
          data: { invitation_status: user_invitation_status.connected },
          where: { id: userOrg.id },
        });
        if (updatedUserOrg) {
          return {
            isSuccess: true,
          };
        }
      }
    } catch (err) {
      return {
        errors: [
          {
            field: "token",
            message: "The provided token is invalid!",
          },
        ],
      };
    }

    return {
      errors: [
        {
          field: "token",
          message: "The provided token is invalid!",
        },
      ],
    };
  }
}
