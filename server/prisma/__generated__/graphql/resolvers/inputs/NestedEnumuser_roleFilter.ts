import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("NestedEnumuser_roleFilter", {})
export class NestedEnumuser_roleFilter {
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

  @TypeGraphQL.Field((_type) => NestedEnumuser_roleFilter, {
    nullable: true,
  })
  not?: NestedEnumuser_roleFilter | undefined;
}
