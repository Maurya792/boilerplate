import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Enumuser_invitation_statusNullableFilter } from "../inputs/Enumuser_invitation_statusNullableFilter";
import { Enumuser_roleFilter } from "../inputs/Enumuser_roleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrganizationNullableRelationFilter } from "../inputs/OrganizationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TraceListRelationFilter } from "../inputs/TraceListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
import { User_organization_teamListRelationFilter } from "../inputs/User_organization_teamListRelationFilter";

@TypeGraphQL.InputType("User_organizationWhereInput", {})
export class User_organizationWhereInput {
  @TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
    nullable: true,
  })
  AND?: User_organizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
    nullable: true,
  })
  OR?: User_organizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
    nullable: true,
  })
  NOT?: User_organizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumuser_roleFilter, {
    nullable: true,
  })
  role?: Enumuser_roleFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  organization_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumuser_invitation_statusNullableFilter, {
    nullable: true,
  })
  invitation_status?: Enumuser_invitation_statusNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  last_invited?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => UserNullableRelationFilter, {
    nullable: true,
  })
  user?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => TraceListRelationFilter, {
    nullable: true,
  })
  traces?: TraceListRelationFilter | undefined;

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
