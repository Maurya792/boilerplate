import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateNestedOneWithoutLogsInput } from "../inputs/TraceCreateNestedOneWithoutLogsInput";

@TypeGraphQL.InputType("LogCreateInput", {})
export class LogCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  start_time!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  end_time!: Date;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  is_active!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  status!: string;

  @TypeGraphQL.Field((_type) => TraceCreateNestedOneWithoutLogsInput, {
    nullable: false,
  })
  trace!: TraceCreateNestedOneWithoutLogsInput;
}
