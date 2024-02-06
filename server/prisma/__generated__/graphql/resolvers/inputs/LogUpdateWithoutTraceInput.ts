import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("LogUpdateWithoutTraceInput", {})
export class LogUpdateWithoutTraceInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  start_time?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  end_time?: Date | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  is_active?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  status?: string | undefined;
}
