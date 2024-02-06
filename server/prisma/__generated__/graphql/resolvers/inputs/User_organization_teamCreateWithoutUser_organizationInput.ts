import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedOneWithoutUser_organization_teamsInput } from "../inputs/TeamCreateNestedOneWithoutUser_organization_teamsInput";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType(
  "User_organization_teamCreateWithoutUser_organizationInput",
  {},
)
export class User_organization_teamCreateWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;

  @TypeGraphQL.Field(
    (_type) => TeamCreateNestedOneWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  team?: TeamCreateNestedOneWithoutUser_organization_teamsInput | undefined;
}
