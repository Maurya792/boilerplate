import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateNestedOneWithoutTeamsInput } from "../inputs/OrganizationCreateNestedOneWithoutTeamsInput";
import { User_organization_teamCreateNestedManyWithoutTeamInput } from "../inputs/User_organization_teamCreateNestedManyWithoutTeamInput";

@TypeGraphQL.InputType("TeamCreateInput", {})
export class TeamCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => OrganizationCreateNestedOneWithoutTeamsInput, {
    nullable: true,
  })
  organization?: OrganizationCreateNestedOneWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamCreateNestedManyWithoutTeamInput,
    {
      nullable: true,
    },
  )
  user_organization_teams?:
    | User_organization_teamCreateNestedManyWithoutTeamInput
    | undefined;
}
