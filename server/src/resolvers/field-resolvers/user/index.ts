import { Arg, Args, Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import {
  FindManyOrganizationArgs,
  FindUniqueOrganizationArgs,
  FindUniqueUser_organizationArgs,
  Organization,
  User,
  User_organization,
  User_organization_team,
} from "../../../../prisma/__generated__/graphql";
import { MyContext } from "../../../types";
import { prismaClient } from "../../../../prisma/__generated__/client";
import { team_role, user_role } from "prisma/prisma-client";

@Resolver((of) => User)
export class ExUserResolver {
  @FieldResolver((type) => [Organization!], { nullable: true })
  async organizations(
    @Root() rootUser: User,
    @Ctx() { prisma, user }: MyContext,
    @Args() args: FindManyOrganizationArgs
  ): Promise<Organization[] | undefined> {
    return prisma.organization.findMany({
      ...(args as any),
      where: {
        user_organizations: {
          some: {
            user_id: rootUser?.id,
            OR: [
              { role: { in: [user_role.admin, user_role.owner] } },
              {
                user_organization_teams: { some: { role: team_role.manager } },
              },
            ],
            organization: {
              user_organizations: { some: { user_id: user?.userId } },
            },
          },
        },
      },
    });
  }
  @FieldResolver((type) => User_organization, { nullable: true })
  async user_organization(
    @Root() rootUser: User,
    @Ctx() { prisma, user }: MyContext,
    @Arg("orgId", { nullable: true }) orgId?: number
  ): Promise<User_organization | null | undefined> {
    if (!orgId) {
      return null;
    }
    return prisma.user_organization.findUnique({
      where: {
        user_id_organization_id: {
          user_id: rootUser.id,
          organization_id: orgId,
        },
      },
    });
  }
  // @FieldResolver((type) => User_organization_team, { nullable: true })
  // async user_organization_team(
  //   @Root() rootUser: User,
  //   @Ctx() { prisma, user }: MyContext,
  //   @Arg("teamId", { nullable: true }) teamId?: number
  // ): Promise<User_organization_team | null | undefined> {
  //   if (!teamId) {
  //     return null;
  //   }
  //   return prisma.user_organization_team.findUnique({
  //     where: {
  //       team_id_user_id: {
  //         team_id: teamId,
  //         user_id: rootUser.id,
  //       },
  //     },
  //   });
  // }
}
