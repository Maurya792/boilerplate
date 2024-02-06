import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateWithoutUserInput } from "../inputs/User_organizationCreateWithoutUserInput";
import { User_organizationUpdateWithoutUserInput } from "../inputs/User_organizationUpdateWithoutUserInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationUpsertWithWhereUniqueWithoutUserInput",
  {},
)
export class User_organizationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organizationUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: User_organizationUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutUserInput, {
    nullable: false,
  })
  create!: User_organizationCreateWithoutUserInput;
}
