import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_invitation_status } from "../../enums/user_invitation_status";

@TypeGraphQL.InputType(
  "NullableEnumuser_invitation_statusFieldUpdateOperationsInput",
  {},
)
export class NullableEnumuser_invitation_statusFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  set?: "notConnected" | "invited" | "connected" | undefined;
}
