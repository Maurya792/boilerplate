import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateNestedOneWithoutTeamsInput } from "../inputs/OrganizationCreateNestedOneWithoutTeamsInput";

@TypeGraphQL.InputType("TeamCreateWithoutUser_organization_teamsInput", {})
export class TeamCreateWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => OrganizationCreateNestedOneWithoutTeamsInput, {
    nullable: true,
  })
  organization?: OrganizationCreateNestedOneWithoutTeamsInput | undefined;
}
