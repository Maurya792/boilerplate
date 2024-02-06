import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartCreateWithoutTraceInput } from "../inputs/PartCreateWithoutTraceInput";
import { PartUpdateWithoutTraceInput } from "../inputs/PartUpdateWithoutTraceInput";
import { PartWhereUniqueInput } from "../inputs/PartWhereUniqueInput";

@TypeGraphQL.InputType("PartUpsertWithWhereUniqueWithoutTraceInput", {})
export class PartUpsertWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => PartWhereUniqueInput, {
    nullable: false,
  })
  where!: PartWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PartUpdateWithoutTraceInput, {
    nullable: false,
  })
  update!: PartUpdateWithoutTraceInput;

  @TypeGraphQL.Field((_type) => PartCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: PartCreateWithoutTraceInput;
}
