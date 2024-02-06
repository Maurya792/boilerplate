import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumteam_roleFilter } from "../inputs/NestedEnumteam_roleFilter";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("Enumteam_roleFilter", {})
export class Enumteam_roleFilter {
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

  @TypeGraphQL.Field((_type) => NestedEnumteam_roleFilter, {
    nullable: true,
  })
  not?: NestedEnumteam_roleFilter | undefined;
}
