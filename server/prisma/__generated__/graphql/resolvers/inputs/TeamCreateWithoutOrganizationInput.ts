import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateNestedManyWithoutTeamInput } from "../inputs/User_organization_teamCreateNestedManyWithoutTeamInput";

@TypeGraphQL.InputType("TeamCreateWithoutOrganizationInput", {})
export class TeamCreateWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

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
