import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogAvgAggregate } from "../outputs/LogAvgAggregate";
import { LogCountAggregate } from "../outputs/LogCountAggregate";
import { LogMaxAggregate } from "../outputs/LogMaxAggregate";
import { LogMinAggregate } from "../outputs/LogMinAggregate";
import { LogSumAggregate } from "../outputs/LogSumAggregate";

@TypeGraphQL.ObjectType("LogGroupBy", {
  simpleResolvers: true,
})
export class LogGroupBy {
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

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  start_time!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  end_time!: Date;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  is_active!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  status!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  trace_id!: number;

  @TypeGraphQL.Field((_type) => LogCountAggregate, {
    nullable: true,
  })
  _count!: LogCountAggregate | null;

  @TypeGraphQL.Field((_type) => LogAvgAggregate, {
    nullable: true,
  })
  _avg!: LogAvgAggregate | null;

  @TypeGraphQL.Field((_type) => LogSumAggregate, {
    nullable: true,
  })
  _sum!: LogSumAggregate | null;

  @TypeGraphQL.Field((_type) => LogMinAggregate, {
    nullable: true,
  })
  _min!: LogMinAggregate | null;

  @TypeGraphQL.Field((_type) => LogMaxAggregate, {
    nullable: true,
  })
  _max!: LogMaxAggregate | null;
}
