import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogCreateWithoutTraceInput } from "../inputs/LogCreateWithoutTraceInput";
import { LogWhereUniqueInput } from "../inputs/LogWhereUniqueInput";

@TypeGraphQL.InputType("LogCreateOrConnectWithoutTraceInput", {})
export class LogCreateOrConnectWithoutTraceInput {
  @TypeGraphQL.Field((_type) => LogWhereUniqueInput, {
    nullable: false,
  })
  where!: LogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LogCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: LogCreateWithoutTraceInput;
}
