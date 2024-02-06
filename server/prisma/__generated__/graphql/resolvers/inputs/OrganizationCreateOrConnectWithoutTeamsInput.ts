import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutTeamsInput } from "../inputs/OrganizationCreateWithoutTeamsInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutTeamsInput", {})
export class OrganizationCreateOrConnectWithoutTeamsInput {
  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: false,
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => OrganizationCreateWithoutTeamsInput, {
    nullable: false,
  })
  create!: OrganizationCreateWithoutTeamsInput;
}
