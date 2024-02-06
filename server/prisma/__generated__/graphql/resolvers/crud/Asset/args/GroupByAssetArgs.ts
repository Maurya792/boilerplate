import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetOrderByWithAggregationInput } from "../../../inputs/AssetOrderByWithAggregationInput";
import { AssetScalarWhereWithAggregatesInput } from "../../../inputs/AssetScalarWhereWithAggregatesInput";
import { AssetWhereInput } from "../../../inputs/AssetWhereInput";
import { AssetScalarFieldEnum } from "../../../../enums/AssetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssetArgs {
  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  where?: AssetWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AssetOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: AssetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "url" | "date" | "trace_id">;

  @TypeGraphQL.Field((_type) => AssetScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: AssetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
