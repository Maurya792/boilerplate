import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceCreateInput } from "../../../inputs/TraceCreateInput";
import { TraceUpdateInput } from "../../../inputs/TraceUpdateInput";
import { TraceWhereUniqueInput } from "../../../inputs/TraceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTraceArgs {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceCreateInput, {
    nullable: false,
  })
  create!: TraceCreateInput;

  @TypeGraphQL.Field((_type) => TraceUpdateInput, {
    nullable: false,
  })
  update!: TraceUpdateInput;
}
