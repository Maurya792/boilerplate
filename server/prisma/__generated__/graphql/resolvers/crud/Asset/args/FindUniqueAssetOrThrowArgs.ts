import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetWhereUniqueInput } from "../../../inputs/AssetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAssetOrThrowArgs {
  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: false,
  })
  where!: AssetWhereUniqueInput;
}
