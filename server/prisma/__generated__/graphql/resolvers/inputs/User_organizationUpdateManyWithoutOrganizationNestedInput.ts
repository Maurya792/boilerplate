import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyOrganizationInputEnvelope } from "../inputs/User_organizationCreateManyOrganizationInputEnvelope";
import { User_organizationCreateOrConnectWithoutOrganizationInput } from "../inputs/User_organizationCreateOrConnectWithoutOrganizationInput";
import { User_organizationCreateWithoutOrganizationInput } from "../inputs/User_organizationCreateWithoutOrganizationInput";
import { User_organizationScalarWhereInput } from "../inputs/User_organizationScalarWhereInput";
import { User_organizationUpdateManyWithWhereWithoutOrganizationInput } from "../inputs/User_organizationUpdateManyWithWhereWithoutOrganizationInput";
import { User_organizationUpdateWithWhereUniqueWithoutOrganizationInput } from "../inputs/User_organizationUpdateWithWhereUniqueWithoutOrganizationInput";
import { User_organizationUpsertWithWhereUniqueWithoutOrganizationInput } from "../inputs/User_organizationUpsertWithWhereUniqueWithoutOrganizationInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateManyWithoutOrganizationNestedInput",
  {},
)
export class User_organizationUpdateManyWithoutOrganizationNestedInput {
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
    (_type) => [User_organizationUpsertWithWhereUniqueWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | User_organizationUpsertWithWhereUniqueWithoutOrganizationInput[]
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
  set?: User_organizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: User_organizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput], {
    nullable: true,
  })
  delete?: User_organizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput], {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationUpdateWithWhereUniqueWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  update?:
    | User_organizationUpdateWithWhereUniqueWithoutOrganizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationUpdateManyWithWhereWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | User_organizationUpdateManyWithWhereWithoutOrganizationInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: User_organizationScalarWhereInput[] | undefined;
}
