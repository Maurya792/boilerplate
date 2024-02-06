import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetOrderByRelationAggregateInput } from "../inputs/AssetOrderByRelationAggregateInput";
import { LogOrderByRelationAggregateInput } from "../inputs/LogOrderByRelationAggregateInput";
import { PartOrderByRelationAggregateInput } from "../inputs/PartOrderByRelationAggregateInput";
import { User_organizationOrderByWithRelationInput } from "../inputs/User_organizationOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TraceOrderByWithRelationInput", {})
export class TraceOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  active_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  in_active_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  all_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  organization_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_organization_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AssetOrderByRelationAggregateInput, {
    nullable: true,
  })
  images?: AssetOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LogOrderByRelationAggregateInput, {
    nullable: true,
  })
  logs?: LogOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PartOrderByRelationAggregateInput, {
    nullable: true,
  })
  parts?: PartOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationOrderByWithRelationInput, {
    nullable: true,
  })
  user_organization?: User_organizationOrderByWithRelationInput | undefined;
}
