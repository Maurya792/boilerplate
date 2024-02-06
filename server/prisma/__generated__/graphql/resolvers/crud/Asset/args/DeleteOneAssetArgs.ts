import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetWhereUniqueInput } from "../../../inputs/AssetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAssetArgs {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;
}
