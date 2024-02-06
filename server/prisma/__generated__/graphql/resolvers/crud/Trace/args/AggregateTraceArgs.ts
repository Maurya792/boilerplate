import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceOrderByWithRelationInput } from "../../../inputs/TraceOrderByWithRelationInput";
import { TraceWhereInput } from "../../../inputs/TraceWhereInput";
import { TraceWhereUniqueInput } from "../../../inputs/TraceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTraceArgs {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [TraceOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: TraceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TraceWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
