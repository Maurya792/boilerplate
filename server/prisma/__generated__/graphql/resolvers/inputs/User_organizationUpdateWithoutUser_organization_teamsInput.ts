import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateOneWithoutUser_organizationsNestedInput } from "../inputs/OrganizationUpdateOneWithoutUser_organizationsNestedInput";
import { TraceUpdateManyWithoutUser_organizationNestedInput } from "../inputs/TraceUpdateManyWithoutUser_organizationNestedInput";
import { UserUpdateOneWithoutUser_organizationsNestedInput } from "../inputs/UserUpdateOneWithoutUser_organizationsNestedInput";
import { user_invitation_status } from "../../enums/user_invitation_status";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType(
  "User_organizationUpdateWithoutUser_organization_teamsInput",
  {},
)
export class User_organizationUpdateWithoutUser_organization_teamsInput {
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
    (_type) => UserUpdateOneWithoutUser_organizationsNestedInput,
    {
      nullable: true,
    },
  )
  user?: UserUpdateOneWithoutUser_organizationsNestedInput | undefined;

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
}
