import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutLogsInput } from "../inputs/TraceCreateWithoutLogsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateOrConnectWithoutLogsInput", {})
export class TraceCreateOrConnectWithoutLogsInput {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutLogsInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutLogsInput;
}
