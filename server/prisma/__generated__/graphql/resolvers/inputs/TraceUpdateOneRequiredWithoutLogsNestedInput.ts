import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutLogsInput } from "../inputs/TraceCreateOrConnectWithoutLogsInput";
import { TraceCreateWithoutLogsInput } from "../inputs/TraceCreateWithoutLogsInput";
import { TraceUpdateToOneWithWhereWithoutLogsInput } from "../inputs/TraceUpdateToOneWithWhereWithoutLogsInput";
import { TraceUpsertWithoutLogsInput } from "../inputs/TraceUpsertWithoutLogsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceUpdateOneRequiredWithoutLogsNestedInput", {})
export class TraceUpdateOneRequiredWithoutLogsNestedInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutLogsInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutLogsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutLogsInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutLogsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpsertWithoutLogsInput, {
    nullable: true,
  })
  upsert?: TraceUpsertWithoutLogsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateToOneWithWhereWithoutLogsInput, {
    nullable: true,
  })
  update?: TraceUpdateToOneWithWhereWithoutLogsInput | undefined;
}
