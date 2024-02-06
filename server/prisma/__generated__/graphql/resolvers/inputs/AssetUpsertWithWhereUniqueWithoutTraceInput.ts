import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateWithoutTraceInput } from "../inputs/AssetCreateWithoutTraceInput";
import { AssetUpdateWithoutTraceInput } from "../inputs/AssetUpdateWithoutTraceInput";
import { AssetWhereUniqueInput } from "../inputs/AssetWhereUniqueInput";

@TypeGraphQL.InputType("AssetUpsertWithWhereUniqueWithoutTraceInput", {})
export class AssetUpsertWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AssetUpdateWithoutTraceInput, {
    nullable: false,
  })
  update!: AssetUpdateWithoutTraceInput;

  @TypeGraphQL.Field((_type) => AssetCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: AssetCreateWithoutTraceInput;
}
