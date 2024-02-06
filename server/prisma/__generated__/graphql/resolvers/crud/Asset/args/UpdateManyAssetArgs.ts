import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetUpdateManyMutationInput } from "../../../inputs/AssetUpdateManyMutationInput";
import { AssetWhereInput } from "../../../inputs/AssetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssetArgs {
  @TypeGraphQL.Field((_type) => AssetUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AssetUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  where?: AssetWhereInput | undefined;
}
