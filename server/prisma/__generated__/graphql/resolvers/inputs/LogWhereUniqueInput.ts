import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LogWhereInput } from "../inputs/LogWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TraceRelationFilter } from "../inputs/TraceRelationFilter";

@TypeGraphQL.InputType("LogWhereUniqueInput", {})
export class LogWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereInput], {
    nullable: true,
  })
  AND?: LogWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereInput], {
    nullable: true,
  })
  OR?: LogWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereInput], {
    nullable: true,
  })
  NOT?: LogWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  start_time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  end_time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  is_active?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  trace_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => TraceRelationFilter, {
    nullable: true,
  })
  trace?: TraceRelationFilter | undefined;
}
