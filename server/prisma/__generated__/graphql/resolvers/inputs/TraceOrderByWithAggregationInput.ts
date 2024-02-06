import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceAvgOrderByAggregateInput } from "../inputs/TraceAvgOrderByAggregateInput";
import { TraceCountOrderByAggregateInput } from "../inputs/TraceCountOrderByAggregateInput";
import { TraceMaxOrderByAggregateInput } from "../inputs/TraceMaxOrderByAggregateInput";
import { TraceMinOrderByAggregateInput } from "../inputs/TraceMinOrderByAggregateInput";
import { TraceSumOrderByAggregateInput } from "../inputs/TraceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TraceOrderByWithAggregationInput", {})
export class TraceOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  active_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  in_active_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  all_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  organization_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_organization_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => TraceCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TraceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => TraceAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: TraceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => TraceMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: TraceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => TraceMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: TraceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => TraceSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: TraceSumOrderByAggregateInput | undefined;
}
