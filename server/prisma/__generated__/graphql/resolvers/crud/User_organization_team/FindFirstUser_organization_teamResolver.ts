import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUser_organization_teamArgs } from "./args/FindFirstUser_organization_teamArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class FindFirstUser_organization_teamResolver {
  @TypeGraphQL.Query((_returns) => User_organization_team, {
    nullable: true,
  })
  async findFirstUser_organization_team(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUser_organization_teamArgs,
  ): Promise<User_organization_team | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
