import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogScalarWhereInput } from "../inputs/LogScalarWhereInput";
import { LogUpdateManyMutationInput } from "../inputs/LogUpdateManyMutationInput";

@TypeGraphQL.InputType("LogUpdateManyWithWhereWithoutTraceInput", {})
export class LogUpdateManyWithWhereWithoutTraceInput {
  @TypeGraphQL.Field((_type) => LogScalarWhereInput, {
    nullable: false,
  })
  where!: LogScalarWhereInput;

  @TypeGraphQL.Field((_type) => LogUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LogUpdateManyMutationInput;
}
