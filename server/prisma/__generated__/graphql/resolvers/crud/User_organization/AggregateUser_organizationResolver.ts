import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUser_organizationArgs } from "./args/AggregateUser_organizationArgs";
import { User_organization } from "../../../models/User_organization";
import { AggregateUser_organization } from "../../outputs/AggregateUser_organization";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization)
export class AggregateUser_organizationResolver {
  @TypeGraphQL.Query((_returns) => AggregateUser_organization, {
    nullable: false,
  })
  async aggregateUser_organization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUser_organizationArgs,
  ): Promise<AggregateUser_organization> {
    return getPrismaFromContext(ctx).user_organization.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
