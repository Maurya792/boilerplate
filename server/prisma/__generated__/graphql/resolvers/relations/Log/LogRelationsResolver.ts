import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Log } from "../../../models/Log";
import { Trace } from "../../../models/Trace";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Log)
export class LogRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Trace, {
    nullable: false,
  })
  async trace(
    @TypeGraphQL.Root() log: Log,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Trace> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .log.findUniqueOrThrow({
        where: {
          id: log.id,
        },
      })
      .trace({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
