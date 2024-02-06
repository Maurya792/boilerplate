import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogCreateManyTraceInputEnvelope } from "../inputs/LogCreateManyTraceInputEnvelope";
import { LogCreateOrConnectWithoutTraceInput } from "../inputs/LogCreateOrConnectWithoutTraceInput";
import { LogCreateWithoutTraceInput } from "../inputs/LogCreateWithoutTraceInput";
import { LogScalarWhereInput } from "../inputs/LogScalarWhereInput";
import { LogUpdateManyWithWhereWithoutTraceInput } from "../inputs/LogUpdateManyWithWhereWithoutTraceInput";
import { LogUpdateWithWhereUniqueWithoutTraceInput } from "../inputs/LogUpdateWithWhereUniqueWithoutTraceInput";
import { LogUpsertWithWhereUniqueWithoutTraceInput } from "../inputs/LogUpsertWithWhereUniqueWithoutTraceInput";
import { LogWhereUniqueInput } from "../inputs/LogWhereUniqueInput";

@TypeGraphQL.InputType("LogUpdateManyWithoutTraceNestedInput", {})
export class LogUpdateManyWithoutTraceNestedInput {
  @TypeGraphQL.Field((_type) => [LogCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: LogCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: LogCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogUpsertWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  upsert?: LogUpsertWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => LogCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: LogCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereUniqueInput], {
    nullable: true,
  })
  set?: LogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: LogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereUniqueInput], {
    nullable: true,
  })
  delete?: LogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogWhereUniqueInput], {
    nullable: true,
  })
  connect?: LogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogUpdateWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  update?: LogUpdateWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogUpdateManyWithWhereWithoutTraceInput], {
    nullable: true,
  })
  updateMany?: LogUpdateManyWithWhereWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LogScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: LogScalarWhereInput[] | undefined;
}
