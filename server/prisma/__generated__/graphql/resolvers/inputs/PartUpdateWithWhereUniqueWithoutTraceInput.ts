import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartUpdateWithoutTraceInput } from "../inputs/PartUpdateWithoutTraceInput";
import { PartWhereUniqueInput } from "../inputs/PartWhereUniqueInput";

@TypeGraphQL.InputType("PartUpdateWithWhereUniqueWithoutTraceInput", {})
export class PartUpdateWithWhereUniqueWithoutTraceInput {
  @TypeGraphQL.Field((_type) => PartWhereUniqueInput, {
    nullable: false,
  })
  where!: PartWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PartUpdateWithoutTraceInput, {
    nullable: false,
  })
  data!: PartUpdateWithoutTraceInput;
}
