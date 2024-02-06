import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Team } from "../../../models/Team";
import { User_organization } from "../../../models/User_organization";
import { User_organization_team } from "../../../models/User_organization_team";
import { User_organization_teamTeamArgs } from "./args/User_organization_teamTeamArgs";
import { User_organization_teamUser_organizationArgs } from "./args/User_organization_teamUser_organizationArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class User_organization_teamRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Team, {
    nullable: true,
  })
  async team(
    @TypeGraphQL.Root() user_organization_team: User_organization_team,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organization_teamTeamArgs,
  ): Promise<Team | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization_team.findUniqueOrThrow({
        where: {
          id: user_organization_team.id,
        },
      })
      .team({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User_organization, {
    nullable: true,
  })
  async user_organization(
    @TypeGraphQL.Root() user_organization_team: User_organization_team,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organization_teamUser_organizationArgs,
  ): Promise<User_organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization_team.findUniqueOrThrow({
        where: {
          id: user_organization_team.id,
        },
      })
      .user_organization({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
