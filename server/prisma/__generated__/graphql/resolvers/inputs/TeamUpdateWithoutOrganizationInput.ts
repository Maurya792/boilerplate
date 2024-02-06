import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamUpdateManyWithoutTeamNestedInput } from "../inputs/User_organization_teamUpdateManyWithoutTeamNestedInput";

@TypeGraphQL.InputType("TeamUpdateWithoutOrganizationInput", {})
export class TeamUpdateWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamUpdateManyWithoutTeamNestedInput,
    {
      nullable: true,
    },
  )
  user_organization_teams?:
    | User_organization_teamUpdateManyWithoutTeamNestedInput
    | undefined;
}
