import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetScalarWhereInput } from "../inputs/AssetScalarWhereInput";
import { AssetUpdateManyMutationInput } from "../inputs/AssetUpdateManyMutationInput";

@TypeGraphQL.InputType("AssetUpdateManyWithWhereWithoutTraceInput", {})
export class AssetUpdateManyWithWhereWithoutTraceInput {
  @TypeGraphQL.Field((_type) => AssetScalarWhereInput, {
    nullable: false,
  })
  where!: AssetScalarWhereInput;

  @TypeGraphQL.Field((_type) => AssetUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AssetUpdateManyMutationInput;
}
