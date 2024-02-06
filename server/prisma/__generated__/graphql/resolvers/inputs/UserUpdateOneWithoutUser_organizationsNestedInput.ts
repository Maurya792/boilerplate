import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_organizationsInput } from "../inputs/UserCreateOrConnectWithoutUser_organizationsInput";
import { UserCreateWithoutUser_organizationsInput } from "../inputs/UserCreateWithoutUser_organizationsInput";
import { UserUpdateToOneWithWhereWithoutUser_organizationsInput } from "../inputs/UserUpdateToOneWithWhereWithoutUser_organizationsInput";
import { UserUpsertWithoutUser_organizationsInput } from "../inputs/UserUpsertWithoutUser_organizationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutUser_organizationsNestedInput", {})
export class UserUpdateOneWithoutUser_organizationsNestedInput {
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

  @TypeGraphQL.Field((_type) => UserUpsertWithoutUser_organizationsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutUser_organizationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UserUpdateToOneWithWhereWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  update?: UserUpdateToOneWithWhereWithoutUser_organizationsInput | undefined;
}
