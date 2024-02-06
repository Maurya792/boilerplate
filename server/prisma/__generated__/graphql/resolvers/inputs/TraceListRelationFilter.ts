import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceListRelationFilter", {})
export class TraceListRelationFilter {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  every?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  some?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  none?: TraceWhereInput | undefined;
}
