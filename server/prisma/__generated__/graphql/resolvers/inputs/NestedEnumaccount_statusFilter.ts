import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("NestedEnumaccount_statusFilter", {})
export class NestedEnumaccount_statusFilter {
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
