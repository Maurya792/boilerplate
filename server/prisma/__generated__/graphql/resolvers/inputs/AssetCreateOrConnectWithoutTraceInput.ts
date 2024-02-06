import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateWithoutTraceInput } from "../inputs/AssetCreateWithoutTraceInput";
import { AssetWhereUniqueInput } from "../inputs/AssetWhereUniqueInput";

@TypeGraphQL.InputType("AssetCreateOrConnectWithoutTraceInput", {})
export class AssetCreateOrConnectWithoutTraceInput {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AssetCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: AssetCreateWithoutTraceInput;
}
