import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType(
  "user_organizationUser_idOrganization_idRoleCompoundUniqueInput",
  {},
)
export class user_organizationUser_idOrganization_idRoleCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => user_role, {
    nullable: false,
  })
  role!: "admin" | "user" | "owner";
}
