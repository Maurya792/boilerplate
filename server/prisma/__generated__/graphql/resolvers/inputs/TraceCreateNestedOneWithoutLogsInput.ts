import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutLogsInput } from "../inputs/TraceCreateOrConnectWithoutLogsInput";
import { TraceCreateWithoutLogsInput } from "../inputs/TraceCreateWithoutLogsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateNestedOneWithoutLogsInput", {})
export class TraceCreateNestedOneWithoutLogsInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutLogsInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutLogsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutLogsInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutLogsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;
}
