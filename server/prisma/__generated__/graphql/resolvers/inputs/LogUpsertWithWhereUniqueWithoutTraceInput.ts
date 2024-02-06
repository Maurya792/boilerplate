import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogCreateWithoutTraceInput } from "../inputs/LogCreateWithoutTraceInput";
import { LogUpdateWithoutTraceInput } from "../inputs/LogUpdateWithoutTraceInput";
import { LogWhereUniqueInput } from "../inputs/LogWhereUniqueInput";

@TypeGraphQL.InputType("LogUpsertWithWhereUniqueWithoutTraceInput", {})
export class LogUpsertWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => LogWhereUniqueInput, {
    nullable: false,
  })
  where!: LogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LogUpdateWithoutTraceInput, {
    nullable: false,
  })
  update!: LogUpdateWithoutTraceInput;

  @TypeGraphQL.Field((_type) => LogCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: LogCreateWithoutTraceInput;
}
