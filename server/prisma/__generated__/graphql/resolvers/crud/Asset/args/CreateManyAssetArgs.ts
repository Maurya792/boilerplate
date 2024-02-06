import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetCreateManyInput } from "../../../inputs/AssetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssetArgs {
  @TypeGraphQL.Field((_type) => [AssetCreateManyInput], {
    nullable: false,
  })
  data!: AssetCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
