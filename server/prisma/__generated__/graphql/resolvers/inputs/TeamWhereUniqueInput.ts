import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { OrganizationNullableRelationFilter } from "../inputs/OrganizationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
import { User_organization_teamListRelationFilter } from "../inputs/User_organization_teamListRelationFilter";
import { teamNameOrganization_idCompoundUniqueInput } from "../inputs/teamNameOrganization_idCompoundUniqueInput";

@TypeGraphQL.InputType("TeamWhereUniqueInput", {})
export class TeamWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => teamNameOrganization_idCompoundUniqueInput, {
    nullable: true,
  })
  name_organization_id?: teamNameOrganization_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereInput], {
    nullable: true,
  })
  AND?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereInput], {
    nullable: true,
  })
  OR?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereInput], {
    nullable: true,
  })
  NOT?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  organization_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => OrganizationNullableRelationFilter, {
    nullable: true,
  })
  organization?: OrganizationNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => User_organization_teamListRelationFilter, {
    nullable: true,
  })
  user_organization_teams?:
    | User_organization_teamListRelationFilter
    | undefined;
}
