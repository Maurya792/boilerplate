import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutUser_organizationInput } from "../inputs/TraceCreateWithoutUser_organizationInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateOrConnectWithoutUser_organizationInput", {})
export class TraceCreateOrConnectWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutUser_organizationInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutUser_organizationInput;
}
