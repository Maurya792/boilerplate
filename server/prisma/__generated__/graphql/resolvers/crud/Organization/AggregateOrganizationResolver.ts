import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOrganizationArgs } from "./args/AggregateOrganizationArgs";
import { Organization } from "../../../models/Organization";
import { AggregateOrganization } from "../../outputs/AggregateOrganization";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Organization)
export class AggregateOrganizationResolver {
  @TypeGraphQL.Query((_returns) => AggregateOrganization, {
    nullable: false,
  })
  async aggregateOrganization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateOrganizationArgs,
  ): Promise<AggregateOrganization> {
    return getPrismaFromContext(ctx).organization.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
