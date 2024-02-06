import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetWhereInput } from "../../../inputs/AssetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssetArgs {
  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  where?: AssetWhereInput | undefined;
}
