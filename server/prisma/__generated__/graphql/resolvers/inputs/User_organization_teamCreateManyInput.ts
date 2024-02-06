import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("User_organization_teamCreateManyInput", {})
export class User_organization_teamCreateManyInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  team_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_organization_id?: number | undefined;

  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;
}