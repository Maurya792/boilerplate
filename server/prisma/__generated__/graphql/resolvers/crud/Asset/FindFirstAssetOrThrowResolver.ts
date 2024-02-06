import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAssetOrThrowArgs } from "./args/FindFirstAssetOrThrowArgs";
import { Asset } from "../../../models/Asset";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Asset)
export class FindFirstAssetOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Asset, {
    nullable: true,
  })
  async findFirstAssetOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAssetOrThrowArgs,
  ): Promise<Asset | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).asset.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
