import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogOrderByWithAggregationInput } from "../../../inputs/LogOrderByWithAggregationInput";
import { LogScalarWhereWithAggregatesInput } from "../../../inputs/LogScalarWhereWithAggregatesInput";
import { LogWhereInput } from "../../../inputs/LogWhereInput";
import { LogScalarFieldEnum } from "../../../../enums/LogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLogArgs {
  @TypeGraphQL.Field((_type) => LogWhereInput, {
    nullable: true,
  })
  where?: LogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [LogOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: LogOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "created_at"
    | "updated_at"
    | "start_time"
    | "end_time"
    | "is_active"
    | "status"
    | "trace_id"
  >;

  @TypeGraphQL.Field((_type) => LogScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: LogScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
