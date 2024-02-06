import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUser_organization_teamArgs } from "./args/CreateOneUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class CreateOneUser_organization_teamResolver {
  @TypeGraphQL.Mutation((_returns) => User_organization_team, {
    nullable: false,
  })
  async createOneUser_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneUser_organization_teamArgs,
  ): Promise<User_organization_team> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
