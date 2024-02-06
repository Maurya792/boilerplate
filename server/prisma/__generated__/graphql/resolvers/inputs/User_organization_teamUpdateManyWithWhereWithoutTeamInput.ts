import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamScalarWhereInput } from "../inputs/User_organization_teamScalarWhereInput";
import { User_organization_teamUpdateManyMutationInput } from "../inputs/User_organization_teamUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "User_organization_teamUpdateManyWithWhereWithoutTeamInput",
  {},
)
export class User_organization_teamUpdateManyWithWhereWithoutTeamInput {
  @TypeGraphQL.Field((_type) => User_organization_teamScalarWhereInput, {
    nullable: false,
  })
  where!: User_organization_teamScalarWhereInput;

  @TypeGraphQL.Field((_type) => User_organization_teamUpdateManyMutationInput, {
    nullable: false,
  })
  data!: User_organization_teamUpdateManyMutationInput;
}
