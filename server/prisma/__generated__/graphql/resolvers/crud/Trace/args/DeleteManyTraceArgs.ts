import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceWhereInput } from "../../../inputs/TraceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTraceArgs {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;
}
