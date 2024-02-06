import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PartScalarWhereWithAggregatesInput", {})
export class PartScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [PartScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PartScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PartScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PartScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalWithAggregatesFilter, {
    nullable: true,
  })
  active_time?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalWithAggregatesFilter, {
    nullable: true,
  })
  in_active_time?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  trace_id?: IntWithAggregatesFilter | undefined;
}
