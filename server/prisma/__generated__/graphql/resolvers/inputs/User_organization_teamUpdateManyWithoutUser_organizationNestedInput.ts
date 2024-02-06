import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateManyUser_organizationInputEnvelope } from "../inputs/User_organization_teamCreateManyUser_organizationInputEnvelope";
import { User_organization_teamCreateOrConnectWithoutUser_organizationInput } from "../inputs/User_organization_teamCreateOrConnectWithoutUser_organizationInput";
import { User_organization_teamCreateWithoutUser_organizationInput } from "../inputs/User_organization_teamCreateWithoutUser_organizationInput";
import { User_organization_teamScalarWhereInput } from "../inputs/User_organization_teamScalarWhereInput";
import { User_organization_teamUpdateManyWithWhereWithoutUser_organizationInput } from "../inputs/User_organization_teamUpdateManyWithWhereWithoutUser_organizationInput";
import { User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput } from "../inputs/User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput";
import { User_organization_teamUpsertWithWhereUniqueWithoutUser_organizationInput } from "../inputs/User_organization_teamUpsertWithWhereUniqueWithoutUser_organizationInput";
import { User_organization_teamWhereUniqueInput } from "../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organization_teamUpdateManyWithoutUser_organizationNestedInput",
  {},
)
export class User_organization_teamUpdateManyWithoutUser_organizationNestedInput {
  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  create?:
    | User_organization_teamCreateWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      User_organization_teamCreateOrConnectWithoutUser_organizationInput,
    ],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organization_teamCreateOrConnectWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      User_organization_teamUpsertWithWhereUniqueWithoutUser_organizationInput,
    ],
    {
      nullable: true,
    },
  )
  upsert?:
    | User_organization_teamUpsertWithWhereUniqueWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamCreateManyUser_organizationInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | User_organization_teamCreateManyUser_organizationInputEnvelope
    | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput], {
    nullable: true,
  })
  set?: User_organization_teamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: User_organization_teamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput], {
    nullable: true,
  })
  delete?: User_organization_teamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput], {
    nullable: true,
  })
  connect?: User_organization_teamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput,
    ],
    {
      nullable: true,
    },
  )
  update?:
    | User_organization_teamUpdateWithWhereUniqueWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      User_organization_teamUpdateManyWithWhereWithoutUser_organizationInput,
    ],
    {
      nullable: true,
    },
  )
  updateMany?:
    | User_organization_teamUpdateManyWithWhereWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: User_organization_teamScalarWhereInput[] | undefined;
}
