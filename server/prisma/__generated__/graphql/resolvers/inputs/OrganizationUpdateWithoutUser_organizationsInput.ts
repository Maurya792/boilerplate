import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateManyWithoutOrganizationNestedInput } from "../inputs/TeamUpdateManyWithoutOrganizationNestedInput";

@TypeGraphQL.InputType("OrganizationUpdateWithoutUser_organizationsInput", {})
export class OrganizationUpdateWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => TeamUpdateManyWithoutOrganizationNestedInput, {
    nullable: true,
  })
  teams?: TeamUpdateManyWithoutOrganizationNestedInput | undefined;
}
