import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateWithoutUserInput } from "../inputs/User_organizationUpdateWithoutUserInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateWithWhereUniqueWithoutUserInput",
  {},
)
export class User_organizationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organizationUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: User_organizationUpdateWithoutUserInput;
}
