import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Asset } from "../../../models/Asset";
import { Trace } from "../../../models/Trace";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Asset)
export class AssetRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Trace, {
    nullable: false,
  })
  async trace(
    @TypeGraphQL.Root() asset: Asset,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Trace> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .asset.findUniqueOrThrow({
        where: {
          id: asset.id,
        },
      })
      .trace({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
