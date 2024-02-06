import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyUserInputEnvelope } from "../inputs/User_organizationCreateManyUserInputEnvelope";
import { User_organizationCreateOrConnectWithoutUserInput } from "../inputs/User_organizationCreateOrConnectWithoutUserInput";
import { User_organizationCreateWithoutUserInput } from "../inputs/User_organizationCreateWithoutUserInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationCreateNestedManyWithoutUserInput", {})
export class User_organizationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [User_organizationCreateWithoutUserInput], {
    nullable: true,
  })
  create?: User_organizationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationCreateOrConnectWithoutUserInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organizationCreateOrConnectWithoutUserInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => User_organizationCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: User_organizationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput], {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput[] | undefined;
}
