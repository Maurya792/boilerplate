import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateOrConnectWithoutUser_organization_teamsInput } from "../inputs/User_organizationCreateOrConnectWithoutUser_organization_teamsInput";
import { User_organizationCreateWithoutUser_organization_teamsInput } from "../inputs/User_organizationCreateWithoutUser_organization_teamsInput";
import { User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput } from "../inputs/User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput";
import { User_organizationUpsertWithoutUser_organization_teamsInput } from "../inputs/User_organizationUpsertWithoutUser_organization_teamsInput";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateOneWithoutUser_organization_teamsNestedInput",
  {},
)
export class User_organizationUpdateOneWithoutUser_organization_teamsNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => User_organizationUpsertWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  upsert?:
    | User_organizationUpsertWithoutUser_organization_teamsInput
    | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  disconnect?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  delete?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  update?:
    | User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput
    | undefined;
}
