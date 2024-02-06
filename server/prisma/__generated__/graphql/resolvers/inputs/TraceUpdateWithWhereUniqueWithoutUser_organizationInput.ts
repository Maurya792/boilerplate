import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateWithoutUser_organizationInput } from "../inputs/TraceUpdateWithoutUser_organizationInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType(
  "TraceUpdateWithWhereUniqueWithoutUser_organizationInput",
  {},
)
export class TraceUpdateWithWhereUniqueWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceUpdateWithoutUser_organizationInput, {
    nullable: false,
  })
  data!: TraceUpdateWithoutUser_organizationInput;
}
