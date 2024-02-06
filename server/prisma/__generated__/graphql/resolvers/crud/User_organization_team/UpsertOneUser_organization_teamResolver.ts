import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUser_organization_teamArgs } from "./args/UpsertOneUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class UpsertOneUser_organization_teamResolver {
  @TypeGraphQL.Mutation((_returns) => User_organization_team, {
    nullable: false,
  })
  async upsertOneUser_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneUser_organization_teamArgs,
  ): Promise<User_organization_team> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
