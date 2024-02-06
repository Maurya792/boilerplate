import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateNestedOneWithoutUser_organizationsInput } from "../inputs/OrganizationCreateNestedOneWithoutUser_organizationsInput";
import { TraceCreateNestedManyWithoutUser_organizationInput } from "../inputs/TraceCreateNestedManyWithoutUser_organizationInput";
import { User_organization_teamCreateNestedManyWithoutUser_organizationInput } from "../inputs/User_organization_teamCreateNestedManyWithoutUser_organizationInput";
import { user_invitation_status } from "../../enums/user_invitation_status";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("User_organizationCreateWithoutUserInput", {})
export class User_organizationCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => user_role, {
    nullable: true,
  })
  role?: "admin" | "user" | "owner" | undefined;

  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  invitation_status?: "notConnected" | "invited" | "connected" | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  last_invited?: Date | undefined;

  @TypeGraphQL.Field(
    (_type) => TraceCreateNestedManyWithoutUser_organizationInput,
    {
      nullable: true,
    },
  )
  traces?: TraceCreateNestedManyWithoutUser_organizationInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationCreateNestedOneWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  organization?:
    | OrganizationCreateNestedOneWithoutUser_organizationsInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organization_teamCreateNestedManyWithoutUser_organizationInput,
    {
      nullable: true,
    },
  )
  user_organization_teams?:
    | User_organization_teamCreateNestedManyWithoutUser_organizationInput
    | undefined;
}
