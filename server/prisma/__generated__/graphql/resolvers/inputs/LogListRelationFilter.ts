import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogWhereInput } from "../inputs/LogWhereInput";

@TypeGraphQL.InputType("LogListRelationFilter", {})
export class LogListRelationFilter {
  @TypeGraphQL.Field((_type) => LogWhereInput, {
    nullable: true,
  })
  every?: LogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => LogWhereInput, {
    nullable: true,
  })
  some?: LogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => LogWhereInput, {
    nullable: true,
  })
  none?: LogWhereInput | undefined;
}
