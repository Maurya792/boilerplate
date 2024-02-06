import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrganizationOrThrowArgs } from "./args/FindUniqueOrganizationOrThrowArgs";
import { Organization } from "../../../models/Organization";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Organization)
export class FindUniqueOrganizationOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Organization, {
    nullable: true,
  })
  async getOrganization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueOrganizationOrThrowArgs,
  ): Promise<Organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organization.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
