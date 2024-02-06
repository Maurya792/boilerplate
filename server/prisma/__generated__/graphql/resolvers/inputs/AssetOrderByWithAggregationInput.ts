import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetAvgOrderByAggregateInput } from "../inputs/AssetAvgOrderByAggregateInput";
import { AssetCountOrderByAggregateInput } from "../inputs/AssetCountOrderByAggregateInput";
import { AssetMaxOrderByAggregateInput } from "../inputs/AssetMaxOrderByAggregateInput";
import { AssetMinOrderByAggregateInput } from "../inputs/AssetMinOrderByAggregateInput";
import { AssetSumOrderByAggregateInput } from "../inputs/AssetSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssetOrderByWithAggregationInput", {})
export class AssetOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  url?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  trace_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AssetCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AssetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AssetAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: AssetAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AssetMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AssetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AssetMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AssetMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AssetSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: AssetSumOrderByAggregateInput | undefined;
}
