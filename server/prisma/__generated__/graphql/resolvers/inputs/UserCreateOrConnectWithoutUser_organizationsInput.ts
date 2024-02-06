import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_organizationsInput } from "../inputs/UserCreateWithoutUser_organizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUser_organizationsInput", {})
export class UserCreateOrConnectWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutUser_organizationsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutUser_organizationsInput;
}
