import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutLogsInput } from "../inputs/TraceCreateWithoutLogsInput";
import { TraceUpdateWithoutLogsInput } from "../inputs/TraceUpdateWithoutLogsInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpsertWithoutLogsInput", {})
export class TraceUpsertWithoutLogsInput {
  @TypeGraphQL.Field((_type) => TraceUpdateWithoutLogsInput, {
    nullable: false,
  })
  update!: TraceUpdateWithoutLogsInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutLogsInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutLogsInput;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;
}
