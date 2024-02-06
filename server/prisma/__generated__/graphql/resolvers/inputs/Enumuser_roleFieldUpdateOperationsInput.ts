import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("Enumuser_roleFieldUpdateOperationsInput", {})
export class Enumuser_roleFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => user_role, {
    nullable: true,
  })
  set?: "admin" | "user" | "owner" | undefined;
}
