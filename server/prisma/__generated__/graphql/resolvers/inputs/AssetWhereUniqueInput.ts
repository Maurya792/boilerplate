import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetWhereInput } from "../inputs/AssetWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TraceRelationFilter } from "../inputs/TraceRelationFilter";

@TypeGraphQL.InputType("AssetWhereUniqueInput", {})
export class AssetWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereInput], {
    nullable: true,
  })
  AND?: AssetWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereInput], {
    nullable: true,
  })
  OR?: AssetWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereInput], {
    nullable: true,
  })
  NOT?: AssetWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => TraceRelationFilter, {
    nullable: true,
  })
  trace?: TraceRelationFilter | undefined;
}
