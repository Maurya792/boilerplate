import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceUpdateInput } from "../../../inputs/TraceUpdateInput";
import { TraceWhereUniqueInput } from "../../../inputs/TraceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTraceArgs {
  @TypeGraphQL.Field((_type) => TraceUpdateInput, {
    nullable: false,
  })
  data!: TraceUpdateInput;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;
}
