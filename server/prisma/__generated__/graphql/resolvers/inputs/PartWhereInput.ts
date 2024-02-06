import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TraceRelationFilter } from "../inputs/TraceRelationFilter";

@TypeGraphQL.InputType("PartWhereInput", {})
export class PartWhereInput {
  @TypeGraphQL.Field((_type) => [PartWhereInput], {
    nullable: true,
  })
  AND?: PartWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereInput], {
    nullable: true,
  })
  OR?: PartWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereInput], {
    nullable: true,
  })
  NOT?: PartWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalFilter, {
    nullable: true,
  })
  active_time?: DecimalFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalFilter, {
    nullable: true,
  })
  in_active_time?: DecimalFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  trace_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => TraceRelationFilter, {
    nullable: true,
  })
  trace?: TraceRelationFilter | undefined;
}
