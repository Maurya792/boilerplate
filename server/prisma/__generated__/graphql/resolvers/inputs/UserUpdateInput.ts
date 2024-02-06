import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateManyWithoutUserNestedInput } from "../inputs/User_organizationUpdateManyWithoutUserNestedInput";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.InputType("UserUpdateInput", {})
export class UserUpdateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  username?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  password?: string | undefined;

  @TypeGraphQL.Field((_type) => account_status, {
    nullable: true,
  })
  status?: "active" | "initiated" | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateManyWithoutUserNestedInput,
    {
      nullable: true,
    },
  )
  user_organizations?:
    | User_organizationUpdateManyWithoutUserNestedInput
    | undefined;
}
