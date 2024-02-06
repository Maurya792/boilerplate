import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceAvgAggregate } from "../outputs/TraceAvgAggregate";
import { TraceCountAggregate } from "../outputs/TraceCountAggregate";
import { TraceMaxAggregate } from "../outputs/TraceMaxAggregate";
import { TraceMinAggregate } from "../outputs/TraceMinAggregate";
import { TraceSumAggregate } from "../outputs/TraceSumAggregate";

@TypeGraphQL.ObjectType("AggregateTrace", {
  simpleResolvers: true,
})
export class AggregateTrace {
  @TypeGraphQL.Field((_type) => TraceCountAggregate, {
    nullable: true,
  })
  _count!: TraceCountAggregate | null;

  @TypeGraphQL.Field((_type) => TraceAvgAggregate, {
    nullable: true,
  })
  _avg!: TraceAvgAggregate | null;

  @TypeGraphQL.Field((_type) => TraceSumAggregate, {
    nullable: true,
  })
  _sum!: TraceSumAggregate | null;

  @TypeGraphQL.Field((_type) => TraceMinAggregate, {
    nullable: true,
  })
  _min!: TraceMinAggregate | null;

  @TypeGraphQL.Field((_type) => TraceMaxAggregate, {
    nullable: true,
  })
  _max!: TraceMaxAggregate | null;
}
