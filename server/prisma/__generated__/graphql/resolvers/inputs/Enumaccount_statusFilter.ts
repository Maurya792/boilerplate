import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumaccount_statusFilter } from "../inputs/NestedEnumaccount_statusFilter";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("Enumaccount_statusFilter", {})
export class Enumaccount_statusFilter {
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

  @TypeGraphQL.Field((_type) => NestedEnumaccount_statusFilter, {
    nullable: true,
  })
  not?: NestedEnumaccount_statusFilter | undefined;
}
