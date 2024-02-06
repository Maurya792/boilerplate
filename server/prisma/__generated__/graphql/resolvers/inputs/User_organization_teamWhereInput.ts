import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumteam_roleFilter } from "../inputs/Enumteam_roleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { TeamNullableRelationFilter } from "../inputs/TeamNullableRelationFilter";
import { User_organizationNullableRelationFilter } from "../inputs/User_organizationNullableRelationFilter";

@TypeGraphQL.InputType("User_organization_teamWhereInput", {})
export class User_organization_teamWhereInput {
  @TypeGraphQL.Field((_type) => [User_organization_teamWhereInput], {
    nullable: true,
  })
  AND?: User_organization_teamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereInput], {
    nullable: true,
  })
  OR?: User_organization_teamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereInput], {
    nullable: true,
  })
  NOT?: User_organization_teamWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  team_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  user_organization_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumteam_roleFilter, {
    nullable: true,
  })
  role?: Enumteam_roleFilter | undefined;

  @TypeGraphQL.Field((_type) => TeamNullableRelationFilter, {
    nullable: true,
  })
  team?: TeamNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => User_organizationNullableRelationFilter, {
    nullable: true,
  })
  user_organization?: User_organizationNullableRelationFilter | undefined;
}
