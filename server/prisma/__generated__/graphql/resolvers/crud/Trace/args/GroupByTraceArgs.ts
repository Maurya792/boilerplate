import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceOrderByWithAggregationInput } from "../../../inputs/TraceOrderByWithAggregationInput";
import { TraceScalarWhereWithAggregatesInput } from "../../../inputs/TraceScalarWhereWithAggregatesInput";
import { TraceWhereInput } from "../../../inputs/TraceWhereInput";
import { TraceScalarFieldEnum } from "../../../../enums/TraceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTraceArgs {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [TraceOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: TraceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "created_at"
    | "updated_at"
    | "active_time"
    | "in_active_time"
    | "all_time"
    | "date"
    | "user_id"
    | "organization_id"
    | "user_organization_id"
  >;

  @TypeGraphQL.Field((_type) => TraceScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: TraceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
