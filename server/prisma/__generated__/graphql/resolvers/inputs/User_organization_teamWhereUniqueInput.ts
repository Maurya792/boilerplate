import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumteam_roleFilter } from "../inputs/Enumteam_roleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { TeamNullableRelationFilter } from "../inputs/TeamNullableRelationFilter";
import { User_organizationNullableRelationFilter } from "../inputs/User_organizationNullableRelationFilter";
import { User_organization_teamWhereInput } from "../inputs/User_organization_teamWhereInput";
import { user_organization_teamTeam_idUser_organization_idCompoundUniqueInput } from "../inputs/user_organization_teamTeam_idUser_organization_idCompoundUniqueInput";
import { user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput } from "../inputs/user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput";

@TypeGraphQL.InputType("User_organization_teamWhereUniqueInput", {})
export class User_organization_teamWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      user_organization_teamTeam_idUser_organization_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  team_id_user_organization_id?:
    | user_organization_teamTeam_idUser_organization_idCompoundUniqueInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  team_id_user_organization_id_role?:
    | user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput
    | undefined;

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
