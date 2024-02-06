import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutPartsInput } from "../inputs/TraceCreateWithoutPartsInput";
import { TraceUpdateWithoutPartsInput } from "../inputs/TraceUpdateWithoutPartsInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpsertWithoutPartsInput", {})
export class TraceUpsertWithoutPartsInput {
  @TypeGraphQL.Field((_type) => TraceUpdateWithoutPartsInput, {
    nullable: false,
  })
  update!: TraceUpdateWithoutPartsInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutPartsInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutPartsInput;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;
}
