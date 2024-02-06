import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateNestedOneWithoutUser_organization_teamsInput } from "../inputs/User_organizationCreateNestedOneWithoutUser_organization_teamsInput";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("User_organization_teamCreateWithoutTeamInput", {})
export class User_organization_teamCreateWithoutTeamInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      User_organizationCreateNestedOneWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  user_organization?:
    | User_organizationCreateNestedOneWithoutUser_organization_teamsInput
    | undefined;
}
