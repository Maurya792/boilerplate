import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogUpdateWithoutTraceInput } from "../inputs/LogUpdateWithoutTraceInput";
import { LogWhereUniqueInput } from "../inputs/LogWhereUniqueInput";

@TypeGraphQL.InputType("LogUpdateWithWhereUniqueWithoutTraceInput", {})
export class LogUpdateWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => LogWhereUniqueInput, {
    nullable: false,
  })
  where!: LogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LogUpdateWithoutTraceInput, {
    nullable: false,
  })
  data!: LogUpdateWithoutTraceInput;
}
