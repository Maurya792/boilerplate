import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType(
  "user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput",
  {},
)
export class user_organization_teamTeam_idUser_organization_idRoleCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  team_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_organization_id!: number;

  @TypeGraphQL.Field((_type) => team_role, {
    nullable: false,
  })
  role!: "manager" | "member";
}
