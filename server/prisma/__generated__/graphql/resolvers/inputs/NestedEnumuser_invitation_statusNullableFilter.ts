import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_invitation_status } from "../../enums/user_invitation_status";

@TypeGraphQL.InputType("NestedEnumuser_invitation_statusNullableFilter", {})
export class NestedEnumuser_invitation_statusNullableFilter {
  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  equals?: "notConnected" | "invited" | "connected" | undefined;

  @TypeGraphQL.Field((_type) => [user_invitation_status], {
    nullable: true,
  })
  in?: Array<"notConnected" | "invited" | "connected"> | undefined;

  @TypeGraphQL.Field((_type) => [user_invitation_status], {
    nullable: true,
  })
  notIn?: Array<"notConnected" | "invited" | "connected"> | undefined;

  @TypeGraphQL.Field(
    (_type) => NestedEnumuser_invitation_statusNullableFilter,
    {
      nullable: true,
    },
  )
  not?: NestedEnumuser_invitation_statusNullableFilter | undefined;
}
