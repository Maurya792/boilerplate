import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartCreateWithoutTraceInput } from "../inputs/PartCreateWithoutTraceInput";
import { PartWhereUniqueInput } from "../inputs/PartWhereUniqueInput";

@TypeGraphQL.InputType("PartCreateOrConnectWithoutTraceInput", {})
export class PartCreateOrConnectWithoutTraceInput {
  @TypeGraphQL.Field((_type) => PartWhereUniqueInput, {
    nullable: false,
  })
  where!: PartWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PartCreateWithoutTraceInput, {
    nullable: false,
  })
  create!: PartCreateWithoutTraceInput;
}
