import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedManyWithoutOrganizationInput } from "../inputs/TeamCreateNestedManyWithoutOrganizationInput";

@TypeGraphQL.InputType("OrganizationCreateWithoutUser_organizationsInput", {})
export class OrganizationCreateWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => TeamCreateNestedManyWithoutOrganizationInput, {
    nullable: true,
  })
  teams?: TeamCreateNestedManyWithoutOrganizationInput | undefined;
}
