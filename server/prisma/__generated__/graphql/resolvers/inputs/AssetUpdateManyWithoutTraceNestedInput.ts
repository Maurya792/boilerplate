import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateManyTraceInputEnvelope } from "../inputs/AssetCreateManyTraceInputEnvelope";
import { AssetCreateOrConnectWithoutTraceInput } from "../inputs/AssetCreateOrConnectWithoutTraceInput";
import { AssetCreateWithoutTraceInput } from "../inputs/AssetCreateWithoutTraceInput";
import { AssetScalarWhereInput } from "../inputs/AssetScalarWhereInput";
import { AssetUpdateManyWithWhereWithoutTraceInput } from "../inputs/AssetUpdateManyWithWhereWithoutTraceInput";
import { AssetUpdateWithWhereUniqueWithoutTraceInput } from "../inputs/AssetUpdateWithWhereUniqueWithoutTraceInput";
import { AssetUpsertWithWhereUniqueWithoutTraceInput } from "../inputs/AssetUpsertWithWhereUniqueWithoutTraceInput";
import { AssetWhereUniqueInput } from "../inputs/AssetWhereUniqueInput";

@TypeGraphQL.InputType("AssetUpdateManyWithoutTraceNestedInput", {})
export class AssetUpdateManyWithoutTraceNestedInput {
  @TypeGraphQL.Field((_type) => [AssetCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: AssetCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: AssetCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetUpsertWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  upsert?: AssetUpsertWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => AssetCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: AssetCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereUniqueInput], {
    nullable: true,
  })
  set?: AssetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: AssetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereUniqueInput], {
    nullable: true,
  })
  delete?: AssetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereUniqueInput], {
    nullable: true,
  })
  connect?: AssetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetUpdateWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  update?: AssetUpdateWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetUpdateManyWithWhereWithoutTraceInput], {
    nullable: true,
  })
  updateMany?: AssetUpdateManyWithWhereWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: AssetScalarWhereInput[] | undefined;
}
