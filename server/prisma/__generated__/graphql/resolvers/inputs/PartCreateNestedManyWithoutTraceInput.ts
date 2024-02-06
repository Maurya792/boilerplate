import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartCreateManyTraceInputEnvelope } from "../inputs/PartCreateManyTraceInputEnvelope";
import { PartCreateOrConnectWithoutTraceInput } from "../inputs/PartCreateOrConnectWithoutTraceInput";
import { PartCreateWithoutTraceInput } from "../inputs/PartCreateWithoutTraceInput";
import { PartWhereUniqueInput } from "../inputs/PartWhereUniqueInput";

@TypeGraphQL.InputType("PartCreateNestedManyWithoutTraceInput", {})
export class PartCreateNestedManyWithoutTraceInput {
  @TypeGraphQL.Field((_type) => [PartCreateWithoutTraceInput], {
    nullable: true,
  })
  create?: PartCreateWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PartCreateOrConnectWithoutTraceInput], {
    nullable: true,
  })
  connectOrCreate?: PartCreateOrConnectWithoutTraceInput[] | undefined;

  @TypeGraphQL.Field((_type) => PartCreateManyTraceInputEnvelope, {
    nullable: true,
  })
  createMany?: PartCreateManyTraceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PartWhereUniqueInput], {
    nullable: true,
  })
  connect?: PartWhereUniqueInput[] | undefined;
}
