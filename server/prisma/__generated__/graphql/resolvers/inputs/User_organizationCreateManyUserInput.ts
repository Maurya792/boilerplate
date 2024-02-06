import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { user_invitation_status } from "../../enums/user_invitation_status";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.InputType("User_organizationCreateManyUserInput", {})
export class User_organizationCreateManyUserInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => user_role, {
    nullable: true,
  })
  role?: "admin" | "user" | "owner" | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  invitation_status?: "notConnected" | "invited" | "connected" | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  last_invited?: Date | undefined;
}
