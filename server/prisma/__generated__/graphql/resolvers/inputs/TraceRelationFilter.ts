import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceRelationFilter", {})
export class TraceRelationFilter {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  is?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  isNot?: TraceWhereInput | undefined;
}
