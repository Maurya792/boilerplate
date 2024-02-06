import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartScalarWhereInput } from "../inputs/PartScalarWhereInput";
import { PartUpdateManyMutationInput } from "../inputs/PartUpdateManyMutationInput";

@TypeGraphQL.InputType("PartUpdateManyWithWhereWithoutTraceInput", {})
export class PartUpdateManyWithWhereWithoutTraceInput {
  @TypeGraphQL.Field((_type) => PartScalarWhereInput, {
    nullable: false,
  })
  where!: PartScalarWhereInput;

  @TypeGraphQL.Field((_type) => PartUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PartUpdateManyMutationInput;
}
