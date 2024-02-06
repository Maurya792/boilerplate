import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceUpdateManyMutationInput } from "../../../inputs/TraceUpdateManyMutationInput";
import { TraceWhereInput } from "../../../inputs/TraceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTraceArgs {
  @TypeGraphQL.Field((_type) => TraceUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TraceUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;
}
