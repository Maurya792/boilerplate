import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateOneWithoutUser_organization_teamsNestedInput } from "../inputs/TeamUpdateOneWithoutUser_organization_teamsNestedInput";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType(
  "User_organization_teamUpdateWithoutUser_organizationInput",
  {},
)
export class User_organization_teamUpdateWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;

  @TypeGraphQL.Field(
    (_type) => TeamUpdateOneWithoutUser_organization_teamsNestedInput,
    {
      nullable: true,
    },
  )
  team?: TeamUpdateOneWithoutUser_organization_teamsNestedInput | undefined;
}