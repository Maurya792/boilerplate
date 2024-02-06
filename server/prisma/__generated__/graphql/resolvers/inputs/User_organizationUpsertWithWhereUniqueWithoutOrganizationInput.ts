import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateWithoutOrganizationInput } from "../inputs/User_organizationCreateWithoutOrganizationInput";
import { User_organizationUpdateWithoutOrganizationInput } from "../inputs/User_organizationUpdateWithoutOrganizationInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationUpsertWithWhereUniqueWithoutOrganizationInput",
  {},
)
export class User_organizationUpsertWithWhereUniqueWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateWithoutOrganizationInput,
    {
      nullable: false,
    },
  )
  update!: User_organizationUpdateWithoutOrganizationInput;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateWithoutOrganizationInput,
    {
      nullable: false,
    },
  )
  create!: User_organizationCreateWithoutOrganizationInput;
}
