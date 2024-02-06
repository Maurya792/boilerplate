import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUser_organizationArgs } from "./args/GroupByUser_organizationArgs";
import { User_organization } from "../../../models/User_organization";
import { User_organizationGroupBy } from "../../outputs/User_organizationGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization)
export class GroupByUser_organizationResolver {
  @TypeGraphQL.Query((_returns) => [User_organizationGroupBy], {
    nullable: false,
  })
  async groupByUser_organization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUser_organizationArgs,
  ): Promise<User_organizationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
