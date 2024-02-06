import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateOneWithoutTeamsNestedInput } from "../inputs/OrganizationUpdateOneWithoutTeamsNestedInput";

@TypeGraphQL.InputType("TeamUpdateWithoutUser_organization_teamsInput", {})
export class TeamUpdateWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => OrganizationUpdateOneWithoutTeamsNestedInput, {
    nullable: true,
  })
  organization?: OrganizationUpdateOneWithoutTeamsNestedInput | undefined;
}
