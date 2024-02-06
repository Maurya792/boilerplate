import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuser_invitation_statusNullableFilter } from "../inputs/NestedEnumuser_invitation_statusNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { user_invitation_status } from "../../enums/user_invitation_status";

@TypeGraphQL.InputType(
  "NestedEnumuser_invitation_statusNullableWithAggregatesFilter",
  {},
)
export class NestedEnumuser_invitation_statusNullableWithAggregatesFilter {
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
    (_type) => NestedEnumuser_invitation_statusNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  not?:
    | NestedEnumuser_invitation_statusNullableWithAggregatesFilter
    | undefined;

  @TypeGraphQL.Field((_type) => NestedIntNullableFilter, {
    nullable: true,
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(
    (_type) => NestedEnumuser_invitation_statusNullableFilter,
    {
      nullable: true,
    },
  )
  _min?: NestedEnumuser_invitation_statusNullableFilter | undefined;

  @TypeGraphQL.Field(
    (_type) => NestedEnumuser_invitation_statusNullableFilter,
    {
      nullable: true,
    },
  )
  _max?: NestedEnumuser_invitation_statusNullableFilter | undefined;
}
