import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrganizationArgs } from "./args/UpdateOneOrganizationArgs";
import { Organization } from "../../../models/Organization";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Organization)
export class UpdateOneOrganizationResolver {
  @TypeGraphQL.Mutation((_returns) => Organization, {
    nullable: true,
  })
  async updateOneOrganization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneOrganizationArgs,
  ): Promise<Organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organization.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
