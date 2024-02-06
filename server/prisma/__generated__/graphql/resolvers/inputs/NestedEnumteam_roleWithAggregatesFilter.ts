import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumteam_roleFilter } from "../inputs/NestedEnumteam_roleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("NestedEnumteam_roleWithAggregatesFilter", {})
export class NestedEnumteam_roleWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  equals?: "manager" | "member" | undefined;

  @TypeGraphQL.Field((_type) => [team_role], {
    nullable: true,
  })
  in?: Array<"manager" | "member"> | undefined;

  @TypeGraphQL.Field((_type) => [team_role], {
    nullable: true,
  })
  notIn?: Array<"manager" | "member"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumteam_roleWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumteam_roleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumteam_roleFilter, {
    nullable: true,
  })
  _min?: NestedEnumteam_roleFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumteam_roleFilter, {
    nullable: true,
  })
  _max?: NestedEnumteam_roleFilter | undefined;
}
