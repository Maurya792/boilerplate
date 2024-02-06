import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUser_organizationsInput } from "../inputs/UserUpdateWithoutUser_organizationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType(
  "UserUpdateToOneWithWhereWithoutUser_organizationsInput",
  {},
)
export class UserUpdateToOneWithWhereWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutUser_organizationsInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutUser_organizationsInput;
}
