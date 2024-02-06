import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogCreateManyTraceInput } from "../inputs/LogCreateManyTraceInput";

@TypeGraphQL.InputType("LogCreateManyTraceInputEnvelope", {})
export class LogCreateManyTraceInputEnvelope {
  @TypeGraphQL.Field((_type) => [LogCreateManyTraceInput], {
    nullable: false,
  })
  data!: LogCreateManyTraceInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
