import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedManyWithoutOrganizationInput } from "../inputs/TeamCreateNestedManyWithoutOrganizationInput";
import { User_organizationCreateNestedManyWithoutOrganizationInput } from "../inputs/User_organizationCreateNestedManyWithoutOrganizationInput";

@TypeGraphQL.InputType("OrganizationCreateInput", {})
export class OrganizationCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateNestedManyWithoutOrganizationInput,
    {
      nullable: true,
    },
  )
  user_organizations?:
    | User_organizationCreateNestedManyWithoutOrganizationInput
    | undefined;

  @TypeGraphQL.Field((_type) => TeamCreateNestedManyWithoutOrganizationInput, {
    nullable: true,
  })
  teams?: TeamCreateNestedManyWithoutOrganizationInput | undefined;
}
