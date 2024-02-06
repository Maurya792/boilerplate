import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { OrganizationNullableRelationFilter } from "../inputs/OrganizationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { User_organization_teamListRelationFilter } from "../inputs/User_organization_teamListRelationFilter";

@TypeGraphQL.InputType("TeamWhereInput", {})
export class TeamWhereInput {
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

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

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
