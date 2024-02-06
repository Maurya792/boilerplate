import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetWhereInput } from "../inputs/AssetWhereInput";

@TypeGraphQL.InputType("AssetListRelationFilter", {})
export class AssetListRelationFilter {
  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  every?: AssetWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  some?: AssetWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  none?: AssetWhereInput | undefined;
}
