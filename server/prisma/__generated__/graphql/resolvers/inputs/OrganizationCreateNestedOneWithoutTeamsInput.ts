import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutTeamsInput } from "../inputs/OrganizationCreateOrConnectWithoutTeamsInput";
import { OrganizationCreateWithoutTeamsInput } from "../inputs/OrganizationCreateWithoutTeamsInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType("OrganizationCreateNestedOneWithoutTeamsInput", {})
export class OrganizationCreateNestedOneWithoutTeamsInput {
  @TypeGraphQL.Field((_type) => OrganizationCreateWithoutTeamsInput, {
    nullable: true,
  })
  create?: OrganizationCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationCreateOrConnectWithoutTeamsInput, {
    nullable: true,
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: OrganizationWhereUniqueInput | undefined;
}
