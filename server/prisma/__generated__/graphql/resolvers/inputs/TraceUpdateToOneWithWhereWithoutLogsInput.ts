import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateWithoutLogsInput } from "../inputs/TraceUpdateWithoutLogsInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpdateToOneWithWhereWithoutLogsInput", {})
export class TraceUpdateToOneWithWhereWithoutLogsInput {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateWithoutLogsInput, {
    nullable: false,
  })
  data!: TraceUpdateWithoutLogsInput;
}
