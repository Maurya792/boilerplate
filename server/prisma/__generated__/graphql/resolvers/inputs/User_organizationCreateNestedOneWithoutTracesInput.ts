import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateOrConnectWithoutTracesInput } from "../inputs/User_organizationCreateOrConnectWithoutTracesInput";
import { User_organizationCreateWithoutTracesInput } from "../inputs/User_organizationCreateWithoutTracesInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationCreateNestedOneWithoutTracesInput", {})
export class User_organizationCreateNestedOneWithoutTracesInput {
  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutTracesInput, {
    nullable: true,
  })
  create?: User_organizationCreateWithoutTracesInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateOrConnectWithoutTracesInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organizationCreateOrConnectWithoutTracesInput
    | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput | undefined;
}
