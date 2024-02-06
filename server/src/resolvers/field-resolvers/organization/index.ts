import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  ObjectType,
  Resolver,
  Root,
  registerEnumType,
} from "type-graphql";
import { Organization, User } from "../../../../prisma/__generated__/graphql";
import { MyContext } from "../../../types";
import {
  team_role,
  user_invitation_status,
  user_role,
} from "prisma/prisma-client";
// @ObjectType("OrgUser")
// class OrgUser extends User {
//   @Field((_type) => user_invitation_status, {
//     nullable: true,
//   })
//   invitation_status?: "notConnected" | "invited" | "connected" | null;

//   @Field((_type) => Date, {
//     nullable: true,
//   })
//   last_invited?: Date | null;
// }
@Resolver((of) => Organization)
export class ExOrganizationResolver {
  @FieldResolver((type) => [User!], { nullable: true })
  async users(
    @Root() org: Organization,
    @Ctx() { prisma, user }: MyContext
  ): Promise<User[] | undefined> {
    const users = await prisma.user.findMany({
      where: {
        user_organizations: {
          some: {
            OR: [
              {
                organization: {
                  id: org.id,
                  user_organizations: {
                    some: {
                      user_id: user?.userId, // find relation between target org and authed user
                      role: {
                        in: [user_role.admin, user_role.owner], // return if authed user has admin or owner role in target org
                      },
                    },
                  },
                },
              },
              {
                user_organization_teams: {
                  some: {
                    team: {
                      organization_id: org.id,
                      user_organization_teams: {
                        some: {
                          role: team_role.manager,
                          user_organization: {
                            user_id: user?.userId,
                            organization_id: org.id,
                          },
                        },
                      },
                    },
                  },
                },
              }, // return if authed user joined at least one team as manager in target org
            ],
          },
        },
      },
      include: {
        user_organizations: {
          where: {
            organization_id: org.id,
          },
        },
      },
    });
    return users;
  }
}
