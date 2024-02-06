import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetCreateInput } from "../../../inputs/AssetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAssetArgs {
  @TypeGraphQL.Field((_type) => AssetCreateInput, {
    nullable: false,
  })
  data!: AssetCreateInput;
}
