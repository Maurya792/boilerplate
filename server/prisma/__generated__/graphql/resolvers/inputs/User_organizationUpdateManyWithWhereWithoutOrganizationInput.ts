import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationScalarWhereInput } from "../inputs/User_organizationScalarWhereInput";
import { User_organizationUpdateManyMutationInput } from "../inputs/User_organizationUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateManyWithWhereWithoutOrganizationInput",
  {},
)
export class User_organizationUpdateManyWithWhereWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => User_organizationScalarWhereInput, {
    nullable: false,
  })
  where!: User_organizationScalarWhereInput;

  @TypeGraphQL.Field((_type) => User_organizationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: User_organizationUpdateManyMutationInput;
}
