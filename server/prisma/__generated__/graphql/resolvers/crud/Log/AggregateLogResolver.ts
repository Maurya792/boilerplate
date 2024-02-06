import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLogArgs } from "./args/AggregateLogArgs";
import { Log } from "../../../models/Log";
import { AggregateLog } from "../../outputs/AggregateLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Log)
export class AggregateLogResolver {
  @TypeGraphQL.Query((_returns) => AggregateLog, {
    nullable: false,
  })
  async aggregateLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLogArgs,
  ): Promise<AggregateLog> {
    return getPrismaFromContext(ctx).log.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
