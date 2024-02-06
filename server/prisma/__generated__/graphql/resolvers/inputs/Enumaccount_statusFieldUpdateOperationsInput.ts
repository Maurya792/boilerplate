import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("Enumaccount_statusFieldUpdateOperationsInput", {})
export class Enumaccount_statusFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => account_status, {
    nullable: true,
  })
  set?: "active" | "initiated" | undefined;
}
