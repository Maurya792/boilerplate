import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutUser_organizationsInput } from "../inputs/OrganizationCreateWithoutUser_organizationsInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "OrganizationCreateOrConnectWithoutUser_organizationsInput",
  {},
)
export class OrganizationCreateOrConnectWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: false,
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => OrganizationCreateWithoutUser_organizationsInput,
    {
      nullable: false,
    },
  )
  create!: OrganizationCreateWithoutUser_organizationsInput;
}
