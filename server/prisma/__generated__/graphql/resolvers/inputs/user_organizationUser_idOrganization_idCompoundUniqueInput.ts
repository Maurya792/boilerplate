import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType(
  "user_organizationUser_idOrganization_idCompoundUniqueInput",
  {},
)
export class user_organizationUser_idOrganization_idCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;
}