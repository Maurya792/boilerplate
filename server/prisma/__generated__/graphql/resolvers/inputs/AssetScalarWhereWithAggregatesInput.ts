import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("AssetScalarWhereWithAggregatesInput", {})
export class AssetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [AssetScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: AssetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: AssetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: AssetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  url?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  trace_id?: IntWithAggregatesFilter | undefined;
}
