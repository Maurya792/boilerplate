import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutUser_organizationsInput } from "../inputs/OrganizationCreateOrConnectWithoutUser_organizationsInput";
import { OrganizationCreateWithoutUser_organizationsInput } from "../inputs/OrganizationCreateWithoutUser_organizationsInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "OrganizationCreateNestedOneWithoutUser_organizationsInput",
  {},
)
export class OrganizationCreateNestedOneWithoutUser_organizationsInput {
  @TypeGraphQL.Field(
    (_type) => OrganizationCreateWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  create?: OrganizationCreateWithoutUser_organizationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationCreateOrConnectWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | OrganizationCreateOrConnectWithoutUser_organizationsInput
    | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: OrganizationWhereUniqueInput | undefined;
}
