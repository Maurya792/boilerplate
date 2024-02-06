import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateWithoutTracesInput } from "../inputs/User_organizationCreateWithoutTracesInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationCreateOrConnectWithoutTracesInput", {})
export class User_organizationCreateOrConnectWithoutTracesInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutTracesInput, {
    nullable: false,
  })
  create!: User_organizationCreateWithoutTracesInput;
}
