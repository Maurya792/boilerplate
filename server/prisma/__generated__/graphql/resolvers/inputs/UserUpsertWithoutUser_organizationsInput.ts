import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_organizationsInput } from "../inputs/UserCreateWithoutUser_organizationsInput";
import { UserUpdateWithoutUser_organizationsInput } from "../inputs/UserUpdateWithoutUser_organizationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutUser_organizationsInput", {})
export class UserUpsertWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutUser_organizationsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutUser_organizationsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutUser_organizationsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutUser_organizationsInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
