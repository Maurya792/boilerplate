import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Part } from "../../../models/Part";
import { Trace } from "../../../models/Trace";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Part)
export class PartRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Trace, {
    nullable: false,
  })
  async trace(
    @TypeGraphQL.Root() part: Part,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Trace> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .part.findUniqueOrThrow({
        where: {
          id: part.id,
        },
      })
      .trace({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
