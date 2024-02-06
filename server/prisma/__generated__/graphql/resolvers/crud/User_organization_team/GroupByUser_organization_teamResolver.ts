import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUser_organization_teamArgs } from "./args/GroupByUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import { User_organization_teamGroupBy } from "../../outputs/User_organization_teamGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class GroupByUser_organization_teamResolver {
  @TypeGraphQL.Query((_returns) => [User_organization_teamGroupBy], {
    nullable: false,
  })
  async groupByUser_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUser_organization_teamArgs,
  ): Promise<User_organization_teamGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
