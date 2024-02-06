import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateNestedManyWithoutUserInput } from "../inputs/User_organizationCreateNestedManyWithoutUserInput";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string;

  @TypeGraphQL.Field((_type) => account_status, {
    nullable: true,
  })
  status?: "active" | "initiated" | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateNestedManyWithoutUserInput,
    {
      nullable: true,
    },
  )
  user_organizations?:
    | User_organizationCreateNestedManyWithoutUserInput
    | undefined;
}