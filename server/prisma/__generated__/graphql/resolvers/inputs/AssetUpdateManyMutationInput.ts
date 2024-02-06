import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AssetUpdateManyMutationInput", {})
export class AssetUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  date?: Date | undefined;
}
