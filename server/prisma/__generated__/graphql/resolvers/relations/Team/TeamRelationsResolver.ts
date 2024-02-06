import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Organization } from "../../../models/Organization";
import { Team } from "../../../models/Team";
import { User_organization_team } from "../../../models/User_organization_team";
import { TeamOrganizationArgs } from "./args/TeamOrganizationArgs";
import { TeamUser_organization_teamsArgs } from "./args/TeamUser_organization_teamsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Team)
export class TeamRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Organization, {
    nullable: true,
  })
  async organization(
    @TypeGraphQL.Root() team: Team,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TeamOrganizationArgs,
  ): Promise<Organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .team.findUniqueOrThrow({
        where: {
          id: team.id,
        },
      })
      .organization({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [User_organization_team], {
    nullable: false,
  })
  async user_organization_teams(
    @TypeGraphQL.Root() team: Team,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TeamUser_organization_teamsArgs,
  ): Promise<User_organization_team[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .team.findUniqueOrThrow({
        where: {
          id: team.id,
        },
      })
      .user_organization_teams({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
