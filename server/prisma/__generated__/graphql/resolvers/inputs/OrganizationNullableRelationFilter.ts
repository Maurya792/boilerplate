import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType("OrganizationNullableRelationFilter", {})
export class OrganizationNullableRelationFilter {
  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  is?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  isNot?: OrganizationWhereInput | undefined;
}
