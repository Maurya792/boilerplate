import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateManyTraceInputEnvelope } from "../inputs/AssetCreateManyTraceInputEnvelope";
import { AssetCreateOrConnectWithoutTraceInput } from "../inputs/AssetCreateOrConnectWithoutTraceInput";
import { AssetCreateWithoutTraceInput } from "../inputs/AssetCreateWithoutTraceInput";
import { AssetWhereUniqueInput } from "../inputs/AssetWhereUniqueInput";

@TypeGraphQL.InputType("AssetCreateNestedManyWithoutTraceInput", {})
export class AssetCreateNestedManyWithoutTraceInput {
  @TypeGraphQL.Field((_type) => [AssetCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: AssetCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AssetCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: AssetCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => AssetCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: AssetCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AssetWhereUniqueInput], {
    nullable: true,
  })
  connect?: AssetWhereUniqueInput[] | undefined;
}
