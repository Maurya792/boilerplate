import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceAvgAggregate } from "../outputs/TraceAvgAggregate";
import { TraceCountAggregate } from "../outputs/TraceCountAggregate";
import { TraceMaxAggregate } from "../outputs/TraceMaxAggregate";
import { TraceMinAggregate } from "../outputs/TraceMinAggregate";
import { TraceSumAggregate } from "../outputs/TraceSumAggregate";

@TypeGraphQL.ObjectType("TraceGroupBy", {
  simpleResolvers: true,
})
export class TraceGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  created_at!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updated_at!: Date;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  in_active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  all_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  date!: Date;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_organization_id!: number;

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
