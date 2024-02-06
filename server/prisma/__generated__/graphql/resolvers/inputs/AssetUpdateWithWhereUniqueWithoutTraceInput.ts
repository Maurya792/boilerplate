import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetUpdateWithoutTraceInput } from "../inputs/AssetUpdateWithoutTraceInput";
import { AssetWhereUniqueInput } from "../inputs/AssetWhereUniqueInput";

@TypeGraphQL.InputType("AssetUpdateWithWhereUniqueWithoutTraceInput", {})
export class AssetUpdateWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AssetUpdateWithoutTraceInput, {
    nullable: false,
  })
  data!: AssetUpdateWithoutTraceInput;
}
