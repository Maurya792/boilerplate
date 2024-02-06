import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateWithoutPartsInput } from "../inputs/TraceUpdateWithoutPartsInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpdateToOneWithWhereWithoutPartsInput", {})
export class TraceUpdateToOneWithWhereWithoutPartsInput {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateWithoutPartsInput, {
    nullable: false,
  })
  data!: TraceUpdateWithoutPartsInput;
}
