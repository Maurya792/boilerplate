import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateManyUser_organizationInputEnvelope } from "../inputs/TraceCreateManyUser_organizationInputEnvelope";
import { TraceCreateOrConnectWithoutUser_organizationInput } from "../inputs/TraceCreateOrConnectWithoutUser_organizationInput";
import { TraceCreateWithoutUser_organizationInput } from "../inputs/TraceCreateWithoutUser_organizationInput";
import { TraceScalarWhereInput } from "../inputs/TraceScalarWhereInput";
import { TraceUpdateManyWithWhereWithoutUser_organizationInput } from "../inputs/TraceUpdateManyWithWhereWithoutUser_organizationInput";
import { TraceUpdateWithWhereUniqueWithoutUser_organizationInput } from "../inputs/TraceUpdateWithWhereUniqueWithoutUser_organizationInput";
import { TraceUpsertWithWhereUniqueWithoutUser_organizationInput } from "../inputs/TraceUpsertWithWhereUniqueWithoutUser_organizationInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceUpdateManyWithoutUser_organizationNestedInput", {})
export class TraceUpdateManyWithoutUser_organizationNestedInput {
  @TypeGraphQL.Field((_type) => [TraceCreateWithoutUser_organizationInput], {
    nullable: true,
  })
  create?: TraceCreateWithoutUser_organizationInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TraceCreateOrConnectWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | TraceCreateOrConnectWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [TraceUpsertWithWhereUniqueWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | TraceUpsertWithWhereUniqueWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateManyUser_organizationInputEnvelope, {
    nullable: true,
  })
  createMany?: TraceCreateManyUser_organizationInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereUniqueInput], {
    nullable: true,
  })
  set?: TraceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: TraceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereUniqueInput], {
    nullable: true,
  })
  delete?: TraceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereUniqueInput], {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TraceUpdateWithWhereUniqueWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  update?:
    | TraceUpdateWithWhereUniqueWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [TraceUpdateManyWithWhereWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | TraceUpdateManyWithWhereWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [TraceScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: TraceScalarWhereInput[] | undefined;
}
