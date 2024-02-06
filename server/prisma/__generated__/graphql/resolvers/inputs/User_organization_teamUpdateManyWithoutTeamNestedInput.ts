import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateManyTeamInputEnvelope } from "../inputs/User_organization_teamCreateManyTeamInputEnvelope";
import { User_organization_teamCreateOrConnectWithoutTeamInput } from "../inputs/User_organization_teamCreateOrConnectWithoutTeamInput";
import { User_organization_teamCreateWithoutTeamInput } from "../inputs/User_organization_teamCreateWithoutTeamInput";
import { User_organization_teamScalarWhereInput } from "../inputs/User_organization_teamScalarWhereInput";
import { User_organization_teamUpdateManyWithWhereWithoutTeamInput } from "../inputs/User_organization_teamUpdateManyWithWhereWithoutTeamInput";
import { User_organization_teamUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/User_organization_teamUpdateWithWhereUniqueWithoutTeamInput";
import { User_organization_teamUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/User_organization_teamUpsertWithWhereUniqueWithoutTeamInput";
import { User_organization_teamWhereUniqueInput } from "../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organization_teamUpdateManyWithoutTeamNestedInput",
  {},
)
export class User_organization_teamUpdateManyWithoutTeamNestedInput {
  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateWithoutTeamInput],
    {
      nullable: true,
    },
  )
  create?: User_organization_teamCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateOrConnectWithoutTeamInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organization_teamCreateOrConnectWithoutTeamInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamUpsertWithWhereUniqueWithoutTeamInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | User_organization_teamUpsertWithWhereUniqueWithoutTeamInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamCreateManyTeamInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: User_organization_teamCreateManyTeamInputEnvelope | undefined;

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
    (_type) => [User_organization_teamUpdateWithWhereUniqueWithoutTeamInput],
    {
      nullable: true,
    },
  )
  update?:
    | User_organization_teamUpdateWithWhereUniqueWithoutTeamInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamUpdateManyWithWhereWithoutTeamInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | User_organization_teamUpdateManyWithWhereWithoutTeamInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: User_organization_teamScalarWhereInput[] | undefined;
}
