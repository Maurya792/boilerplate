import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutPartsInput } from "../inputs/TraceCreateWithoutPartsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateOrConnectWithoutPartsInput", {})
export class TraceCreateOrConnectWithoutPartsInput {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutPartsInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutPartsInput;
}
