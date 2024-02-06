import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AssetScalarWhereInput", {})
export class AssetScalarWhereInput {
  @TypeGraphQL.Field((_type) => [AssetScalarWhereInput], {
    nullable: true,
  })
  AND?: AssetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarWhereInput], {
    nullable: true,
  })
  OR?: AssetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarWhereInput], {
    nullable: true,
  })
  NOT?: AssetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  trace_id?: IntFilter | undefined;
}
