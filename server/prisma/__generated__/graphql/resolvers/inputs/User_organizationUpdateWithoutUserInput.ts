import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateOneWithoutUser_organizationsNestedInput } from "../inputs/OrganizationUpdateOneWithoutUser_organizationsNestedInput";
import { TraceUpdateManyWithoutUser_organizationNestedInput } from "../inputs/TraceUpdateManyWithoutUser_organizationNestedInput";
import { User_organization_teamUpdateManyWithoutUser_organizationNestedInput } from "../inputs/User_organization_teamUpdateManyWithoutUser_organizationNestedInput";
import { user_invitation_status } from "../../enums/user_invitation_status";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("User_organizationUpdateWithoutUserInput", {})
export class User_organizationUpdateWithoutUserInput {
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
    (_type) => TraceUpdateManyWithoutUser_organizationNestedInput,
    {
      nullable: true,
    },
  )
  traces?: TraceUpdateManyWithoutUser_organizationNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationUpdateOneWithoutUser_organizationsNestedInput,
    {
      nullable: true,
    },
  )
  organization?:
    | OrganizationUpdateOneWithoutUser_organizationsNestedInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organization_teamUpdateManyWithoutUser_organizationNestedInput,
    {
      nullable: true,
    },
  )
  user_organization_teams?:
    | User_organization_teamUpdateManyWithoutUser_organizationNestedInput
    | undefined;
}
