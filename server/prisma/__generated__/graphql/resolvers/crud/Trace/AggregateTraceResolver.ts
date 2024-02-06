import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTraceArgs } from "./args/AggregateTraceArgs";
import { Trace } from "../../../models/Trace";
import { AggregateTrace } from "../../outputs/AggregateTrace";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Trace)
export class AggregateTraceResolver {
  @TypeGraphQL.Query((_returns) => AggregateTrace, {
    nullable: false,
  })
  async aggregateTrace(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTraceArgs,
  ): Promise<AggregateTrace> {
    return getPrismaFromContext(ctx).trace.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
