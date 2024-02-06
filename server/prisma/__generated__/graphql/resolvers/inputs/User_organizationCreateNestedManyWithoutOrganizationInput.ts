import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyOrganizationInputEnvelope } from "../inputs/User_organizationCreateManyOrganizationInputEnvelope";
import { User_organizationCreateOrConnectWithoutOrganizationInput } from "../inputs/User_organizationCreateOrConnectWithoutOrganizationInput";
import { User_organizationCreateWithoutOrganizationInput } from "../inputs/User_organizationCreateWithoutOrganizationInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationCreateNestedManyWithoutOrganizationInput",
  {},
)
export class User_organizationCreateNestedManyWithoutOrganizationInput {
  @TypeGraphQL.Field(
    (_type) => [User_organizationCreateWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  create?: User_organizationCreateWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationCreateOrConnectWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organizationCreateOrConnectWithoutOrganizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateManyOrganizationInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: User_organizationCreateManyOrganizationInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput], {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput[] | undefined;
}
