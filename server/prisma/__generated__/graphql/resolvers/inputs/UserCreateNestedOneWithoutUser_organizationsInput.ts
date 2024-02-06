import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_organizationsInput } from "../inputs/UserCreateOrConnectWithoutUser_organizationsInput";
import { UserCreateWithoutUser_organizationsInput } from "../inputs/UserCreateWithoutUser_organizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUser_organizationsInput", {})
export class UserCreateNestedOneWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutUser_organizationsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutUser_organizationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UserCreateOrConnectWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | UserCreateOrConnectWithoutUser_organizationsInput
    | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
