import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceScalarWhereInput } from "../inputs/TraceScalarWhereInput";
import { TraceUpdateManyMutationInput } from "../inputs/TraceUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "TraceUpdateManyWithWhereWithoutUser_organizationInput",
  {},
)
export class TraceUpdateManyWithWhereWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => TraceScalarWhereInput, {
    nullable: false,
  })
  where!: TraceScalarWhereInput;

  @TypeGraphQL.Field((_type) => TraceUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TraceUpdateManyMutationInput;
}
