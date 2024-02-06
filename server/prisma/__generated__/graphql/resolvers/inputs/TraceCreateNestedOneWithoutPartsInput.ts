import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutPartsInput } from "../inputs/TraceCreateOrConnectWithoutPartsInput";
import { TraceCreateWithoutPartsInput } from "../inputs/TraceCreateWithoutPartsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateNestedOneWithoutPartsInput", {})
export class TraceCreateNestedOneWithoutPartsInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutPartsInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutPartsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutPartsInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutPartsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;
}
