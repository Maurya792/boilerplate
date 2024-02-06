import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutTeamsInput } from "../inputs/OrganizationCreateWithoutTeamsInput";
import { OrganizationUpdateWithoutTeamsInput } from "../inputs/OrganizationUpdateWithoutTeamsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType("OrganizationUpsertWithoutTeamsInput", {})
export class OrganizationUpsertWithoutTeamsInput {
  @TypeGraphQL.Field((_type) => OrganizationUpdateWithoutTeamsInput, {
    nullable: false,
  })
  update!: OrganizationUpdateWithoutTeamsInput;

  @TypeGraphQL.Field((_type) => OrganizationCreateWithoutTeamsInput, {
    nullable: false,
  })
  create!: OrganizationCreateWithoutTeamsInput;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;
}
