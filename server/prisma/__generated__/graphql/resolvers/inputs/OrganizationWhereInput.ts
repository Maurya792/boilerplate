import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TeamListRelationFilter } from "../inputs/TeamListRelationFilter";
import { User_organizationListRelationFilter } from "../inputs/User_organizationListRelationFilter";

@TypeGraphQL.InputType("OrganizationWhereInput", {})
export class OrganizationWhereInput {
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

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

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
