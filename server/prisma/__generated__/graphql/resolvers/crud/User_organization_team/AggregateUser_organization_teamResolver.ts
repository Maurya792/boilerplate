import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUser_organization_teamArgs } from "./args/AggregateUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import { AggregateUser_organization_team } from "../../outputs/AggregateUser_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class AggregateUser_organization_teamResolver {
  @TypeGraphQL.Query((_returns) => AggregateUser_organization_team, {
    nullable: false,
  })
  async aggregateUser_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUser_organization_teamArgs,
  ): Promise<AggregateUser_organization_team> {
    return getPrismaFromContext(ctx).user_organization_team.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
