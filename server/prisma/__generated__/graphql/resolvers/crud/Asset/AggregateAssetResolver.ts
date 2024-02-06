import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAssetArgs } from "./args/AggregateAssetArgs";
import { Asset } from "../../../models/Asset";
import { AggregateAsset } from "../../outputs/AggregateAsset";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Asset)
export class AggregateAssetResolver {
  @TypeGraphQL.Query((_returns) => AggregateAsset, {
    nullable: false,
  })
  async aggregateAsset(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAssetArgs,
  ): Promise<AggregateAsset> {
    return getPrismaFromContext(ctx).asset.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
