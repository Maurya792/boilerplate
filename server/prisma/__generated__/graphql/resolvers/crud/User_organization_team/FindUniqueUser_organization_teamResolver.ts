import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUser_organization_teamArgs } from "./args/FindUniqueUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class FindUniqueUser_organization_teamResolver {
  @TypeGraphQL.Query((_returns) => User_organization_team, {
    nullable: true,
  })
  async user_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUser_organization_teamArgs,
  ): Promise<User_organization_team | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
