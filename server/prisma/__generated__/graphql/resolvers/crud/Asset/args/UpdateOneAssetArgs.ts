import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetUpdateInput } from "../../../inputs/AssetUpdateInput";
import { AssetWhereUniqueInput } from "../../../inputs/AssetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAssetArgs {
  @TypeGraphQL.Field((_type) => AssetUpdateInput, {
    nullable: false,
  })
  data!: AssetUpdateInput;

  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;
}
