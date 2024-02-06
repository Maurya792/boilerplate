import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUser_organization_teamOrThrowArgs } from "./args/FindFirstUser_organization_teamOrThrowArgs";
import { User_organization_team } from "../../../models/User_organization_team";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization_team)
export class FindFirstUser_organization_teamOrThrowResolver {
  @TypeGraphQL.Query((_returns) => User_organization_team, {
    nullable: true,
  })
  async findFirstUser_organization_teamOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUser_organization_teamOrThrowArgs,
  ): Promise<User_organization_team | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user_organization_team.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
