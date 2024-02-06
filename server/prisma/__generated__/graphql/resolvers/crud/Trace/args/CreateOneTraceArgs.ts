import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceCreateInput } from "../../../inputs/TraceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTraceArgs {
  @TypeGraphQL.Field((_type) => TraceCreateInput, {
    nullable: false,
  })
  data!: TraceCreateInput;
}
