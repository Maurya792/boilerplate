import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateOneWithoutTeamsNestedInput } from "../inputs/OrganizationUpdateOneWithoutTeamsNestedInput";
import { User_organization_teamUpdateManyWithoutTeamNestedInput } from "../inputs/User_organization_teamUpdateManyWithoutTeamNestedInput";

@TypeGraphQL.InputType("TeamUpdateInput", {})
export class TeamUpdateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => OrganizationUpdateOneWithoutTeamsNestedInput, {
    nullable: true,
  })
  organization?: OrganizationUpdateOneWithoutTeamsNestedInput | undefined;

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
