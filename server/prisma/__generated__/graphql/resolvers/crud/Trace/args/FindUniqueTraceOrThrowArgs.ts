import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceWhereUniqueInput } from "../../../inputs/TraceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTraceOrThrowArgs {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;
}
