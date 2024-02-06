import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateWithoutUserInput } from "../inputs/User_organizationCreateWithoutUserInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationCreateOrConnectWithoutUserInput", {})
export class User_organizationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutUserInput, {
    nullable: false,
  })
  create!: User_organizationCreateWithoutUserInput;
}
