import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyUserInputEnvelope } from "../inputs/User_organizationCreateManyUserInputEnvelope";
import { User_organizationCreateOrConnectWithoutUserInput } from "../inputs/User_organizationCreateOrConnectWithoutUserInput";
import { User_organizationCreateWithoutUserInput } from "../inputs/User_organizationCreateWithoutUserInput";
import { User_organizationScalarWhereInput } from "../inputs/User_organizationScalarWhereInput";
import { User_organizationUpdateManyWithWhereWithoutUserInput } from "../inputs/User_organizationUpdateManyWithWhereWithoutUserInput";
import { User_organizationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/User_organizationUpdateWithWhereUniqueWithoutUserInput";
import { User_organizationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/User_organizationUpsertWithWhereUniqueWithoutUserInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationUpdateManyWithoutUserNestedInput", {})
export class User_organizationUpdateManyWithoutUserNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => [User_organizationUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: User_organizationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => User_organizationCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: User_organizationCreateManyUserInputEnvelope | undefined;

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
    (_type) => [User_organizationUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: User_organizationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationUpdateManyWithWhereWithoutUserInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | User_organizationUpdateManyWithWhereWithoutUserInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: User_organizationScalarWhereInput[] | undefined;
}
