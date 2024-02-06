import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateOneWithoutUser_organization_teamsNestedInput } from "../inputs/User_organizationUpdateOneWithoutUser_organization_teamsNestedInput";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("User_organization_teamUpdateWithoutTeamInput", {})
export class User_organization_teamUpdateWithoutTeamInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organizationUpdateOneWithoutUser_organization_teamsNestedInput,
    {
      nullable: true,
    },
  )
  user_organization?:
    | User_organizationUpdateOneWithoutUser_organization_teamsNestedInput
    | undefined;
}
