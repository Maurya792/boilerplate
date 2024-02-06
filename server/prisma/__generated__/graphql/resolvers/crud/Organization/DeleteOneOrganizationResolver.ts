import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneOrganizationArgs } from "./args/DeleteOneOrganizationArgs";
import { Organization } from "../../../models/Organization";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Organization)
export class DeleteOneOrganizationResolver {
  @TypeGraphQL.Mutation((_returns) => Organization, {
    nullable: true,
  })
  async deleteOneOrganization(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneOrganizationArgs,
  ): Promise<Organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organization.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
