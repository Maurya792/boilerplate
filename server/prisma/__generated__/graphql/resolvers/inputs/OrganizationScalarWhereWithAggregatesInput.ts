import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OrganizationScalarWhereWithAggregatesInput", {})
export class OrganizationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}