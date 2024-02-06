import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateOrConnectWithoutUser_organization_teamsInput } from "../inputs/User_organizationCreateOrConnectWithoutUser_organization_teamsInput";
import { User_organizationCreateWithoutUser_organization_teamsInput } from "../inputs/User_organizationCreateWithoutUser_organization_teamsInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationCreateNestedOneWithoutUser_organization_teamsInput",
  {},
)
export class User_organizationCreateNestedOneWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field(
    (_type) => User_organizationCreateWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  create?:
    | User_organizationCreateWithoutUser_organization_teamsInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organizationCreateOrConnectWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organizationCreateOrConnectWithoutUser_organization_teamsInput
    | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput | undefined;
}
