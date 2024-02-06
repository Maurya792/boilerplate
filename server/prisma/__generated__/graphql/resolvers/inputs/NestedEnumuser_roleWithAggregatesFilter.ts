import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuser_roleFilter } from "../inputs/NestedEnumuser_roleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("NestedEnumuser_roleWithAggregatesFilter", {})
export class NestedEnumuser_roleWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => user_role, {
    nullable: true,
  })
  equals?: "admin" | "user" | "owner" | undefined;

  @TypeGraphQL.Field((_type) => [user_role], {
    nullable: true,
  })
  in?: Array<"admin" | "user" | "owner"> | undefined;

  @TypeGraphQL.Field((_type) => [user_role], {
    nullable: true,
  })
  notIn?: Array<"admin" | "user" | "owner"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumuser_roleWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumuser_roleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumuser_roleFilter, {
    nullable: true,
  })
  _min?: NestedEnumuser_roleFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumuser_roleFilter, {
    nullable: true,
  })
  _max?: NestedEnumuser_roleFilter | undefined;
}
