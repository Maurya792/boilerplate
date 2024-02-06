import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutUser_organizationsInput } from "../inputs/OrganizationCreateOrConnectWithoutUser_organizationsInput";
import { OrganizationCreateWithoutUser_organizationsInput } from "../inputs/OrganizationCreateWithoutUser_organizationsInput";
import { OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput } from "../inputs/OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput";
import { OrganizationUpsertWithoutUser_organizationsInput } from "../inputs/OrganizationUpsertWithoutUser_organizationsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "OrganizationUpdateOneWithoutUser_organizationsNestedInput",
  {},
)
export class OrganizationUpdateOneWithoutUser_organizationsNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => OrganizationUpsertWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  upsert?: OrganizationUpsertWithoutUser_organizationsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  disconnect?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  delete?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: OrganizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput,
    {
      nullable: true,
    },
  )
  update?:
    | OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput
    | undefined;
}
