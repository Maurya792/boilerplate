import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumaccount_statusFilter } from "../inputs/NestedEnumaccount_statusFilter";
import { NestedEnumaccount_statusWithAggregatesFilter } from "../inputs/NestedEnumaccount_statusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("Enumaccount_statusWithAggregatesFilter", {})
export class Enumaccount_statusWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => account_status, {
    nullable: true,
  })
  equals?: "active" | "initiated" | undefined;

  @TypeGraphQL.Field((_type) => [account_status], {
    nullable: true,
  })
  in?: Array<"active" | "initiated"> | undefined;

  @TypeGraphQL.Field((_type) => [account_status], {
    nullable: true,
  })
  notIn?: Array<"active" | "initiated"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumaccount_statusWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumaccount_statusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumaccount_statusFilter, {
    nullable: true,
  })
  _min?: NestedEnumaccount_statusFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumaccount_statusFilter, {
    nullable: true,
  })
  _max?: NestedEnumaccount_statusFilter | undefined;
}
