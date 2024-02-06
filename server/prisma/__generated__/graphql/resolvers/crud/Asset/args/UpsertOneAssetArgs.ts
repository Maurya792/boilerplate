import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetCreateInput } from "../../../inputs/AssetCreateInput";
import { AssetUpdateInput } from "../../../inputs/AssetUpdateInput";
import { AssetWhereUniqueInput } from "../../../inputs/AssetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAssetArgs {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AssetCreateInput, {
    nullable: false,
  })
  create!: AssetCreateInput;

  @TypeGraphQL.Field((_type) => AssetUpdateInput, {
    nullable: false,
  })
  update!: AssetUpdateInput;
}
