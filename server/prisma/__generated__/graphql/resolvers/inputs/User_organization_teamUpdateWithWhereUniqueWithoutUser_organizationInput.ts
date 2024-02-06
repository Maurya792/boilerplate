import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamUpdateWithoutUser_organizationInput } from "../inputs/User_organization_teamUpdateWithoutUser_organizationInput";
import { User_organization_teamWhereUniqueInput } from "../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput",
  {},
)
export class User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organization_teamWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamUpdateWithoutUser_organizationInput,
    {
      nullable: false,
    },
  )
  data!: User_organization_teamUpdateWithoutUser_organizationInput;
}
