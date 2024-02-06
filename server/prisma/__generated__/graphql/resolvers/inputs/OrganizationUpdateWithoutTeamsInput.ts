import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateManyWithoutOrganizationNestedInput } from "../inputs/User_organizationUpdateManyWithoutOrganizationNestedInput";

@TypeGraphQL.InputType("OrganizationUpdateWithoutTeamsInput", {})
export class OrganizationUpdateWithoutTeamsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateManyWithoutOrganizationNestedInput,
    {
      nullable: true,
    },
  )
  user_organizations?:
    | User_organizationUpdateManyWithoutOrganizationNestedInput
    | undefined;
}
