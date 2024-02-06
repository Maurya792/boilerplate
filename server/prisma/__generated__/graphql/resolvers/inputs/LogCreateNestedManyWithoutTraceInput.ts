import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogCreateManyTraceInputEnvelope } from "../inputs/LogCreateManyTraceInputEnvelope";
import { LogCreateOrConnectWithoutTraceInput } from "../inputs/LogCreateOrConnectWithoutTraceInput";
import { LogCreateWithoutTraceInput } from "../inputs/LogCreateWithoutTraceInput";
import { LogWhereUniqueInput } from "../inputs/LogWhereUniqueInput";

@TypeGraphQL.InputType("LogCreateNestedManyWithoutTraceInput", {})
export class LogCreateNestedManyWithoutTraceInput {
  @TypeGraphQL.Field((_type) => [LogCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: LogCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: LogCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => LogCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: LogCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereUniqueInput], {
    nullable: true,
  })
  connect?: LogWhereUniqueInput[] | undefined;
}
