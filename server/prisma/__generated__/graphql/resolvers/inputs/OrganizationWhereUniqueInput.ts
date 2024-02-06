import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TeamListRelationFilter } from "../inputs/TeamListRelationFilter";
import { User_organizationListRelationFilter } from "../inputs/User_organizationListRelationFilter";
import { organizationIdSlugCompoundUniqueInput } from "../inputs/organizationIdSlugCompoundUniqueInput";

@TypeGraphQL.InputType("OrganizationWhereUniqueInput", {})
export class OrganizationWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;

  @TypeGraphQL.Field((_type) => organizationIdSlugCompoundUniqueInput, {
    nullable: true,
  })
  id_slug?: organizationIdSlugCompoundUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationWhereInput], {
    nullable: true,
  })
  AND?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationWhereInput], {
    nullable: true,
  })
  OR?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationWhereInput], {
    nullable: true,
  })
  NOT?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => User_organizationListRelationFilter, {
    nullable: true,
  })
  user_organizations?: User_organizationListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => TeamListRelationFilter, {
    nullable: true,
  })
  teams?: TeamListRelationFilter | undefined;
}
