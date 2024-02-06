import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetListRelationFilter } from "../inputs/AssetListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LogListRelationFilter } from "../inputs/LogListRelationFilter";
import { PartListRelationFilter } from "../inputs/PartListRelationFilter";
import { TraceWhereInput } from "../inputs/TraceWhereInput";
import { User_organizationNullableRelationFilter } from "../inputs/User_organizationNullableRelationFilter";
import { traceIdUser_organization_idDateCompoundUniqueInput } from "../inputs/traceIdUser_organization_idDateCompoundUniqueInput";
import { traceUser_organization_idDateCompoundUniqueInput } from "../inputs/traceUser_organization_idDateCompoundUniqueInput";

@TypeGraphQL.InputType("TraceWhereUniqueInput", {})
export class TraceWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(
    (_type) => traceUser_organization_idDateCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  user_organization_id_date?:
    | traceUser_organization_idDateCompoundUniqueInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) => traceIdUser_organization_idDateCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  id_user_organization_id_date?:
    | traceIdUser_organization_idDateCompoundUniqueInput
    | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereInput], {
    nullable: true,
  })
  AND?: TraceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereInput], {
    nullable: true,
  })
  OR?: TraceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereInput], {
    nullable: true,
  })
  NOT?: TraceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalFilter, {
    nullable: true,
  })
  active_time?: DecimalFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalFilter, {
    nullable: true,
  })
  in_active_time?: DecimalFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalFilter, {
    nullable: true,
  })
  all_time?: DecimalFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  organization_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  user_organization_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => AssetListRelationFilter, {
    nullable: true,
  })
  images?: AssetListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => LogListRelationFilter, {
    nullable: true,
  })
  logs?: LogListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => PartListRelationFilter, {
    nullable: true,
  })
  parts?: PartListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => User_organizationNullableRelationFilter, {
    nullable: true,
  })
  user_organization?: User_organizationNullableRelationFilter | undefined;
}
