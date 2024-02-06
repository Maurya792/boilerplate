import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartCreateManyTraceInputEnvelope } from "../inputs/PartCreateManyTraceInputEnvelope";
import { PartCreateOrConnectWithoutTraceInput } from "../inputs/PartCreateOrConnectWithoutTraceInput";
import { PartCreateWithoutTraceInput } from "../inputs/PartCreateWithoutTraceInput";
import { PartScalarWhereInput } from "../inputs/PartScalarWhereInput";
import { PartUpdateManyWithWhereWithoutTraceInput } from "../inputs/PartUpdateManyWithWhereWithoutTraceInput";
import { PartUpdateWithWhereUniqueWithoutTraceInput } from "../inputs/PartUpdateWithWhereUniqueWithoutTraceInput";
import { PartUpsertWithWhereUniqueWithoutTraceInput } from "../inputs/PartUpsertWithWhereUniqueWithoutTraceInput";
import { PartWhereUniqueInput } from "../inputs/PartWhereUniqueInput";

@TypeGraphQL.InputType("PartUpdateManyWithoutTraceNestedInput", {})
export class PartUpdateManyWithoutTraceNestedInput {
  @TypeGraphQL.Field((_type) => [PartCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: PartCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: PartCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartUpsertWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  upsert?: PartUpsertWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => PartCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: PartCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereUniqueInput], {
    nullable: true,
  })
  set?: PartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereUniqueInput], {
    nullable: true,
  })
  delete?: PartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereUniqueInput], {
    nullable: true,
  })
  connect?: PartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartUpdateWithWhereUniqueWithoutTraceInput], {
    nullable: true,
  })
  update?: PartUpdateWithWhereUniqueWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartUpdateManyWithWhereWithoutTraceInput], {
    nullable: true,
  })
  updateMany?: PartUpdateManyWithWhereWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PartScalarWhereInput[] | undefined;
}
