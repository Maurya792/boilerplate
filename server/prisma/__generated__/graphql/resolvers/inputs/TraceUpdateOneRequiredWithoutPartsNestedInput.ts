import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutPartsInput } from "../inputs/TraceCreateOrConnectWithoutPartsInput";
import { TraceCreateWithoutPartsInput } from "../inputs/TraceCreateWithoutPartsInput";
import { TraceUpdateToOneWithWhereWithoutPartsInput } from "../inputs/TraceUpdateToOneWithWhereWithoutPartsInput";
import { TraceUpsertWithoutPartsInput } from "../inputs/TraceUpsertWithoutPartsInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceUpdateOneRequiredWithoutPartsNestedInput", {})
export class TraceUpdateOneRequiredWithoutPartsNestedInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutPartsInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutPartsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutPartsInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutPartsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpsertWithoutPartsInput, {
    nullable: true,
  })
  upsert?: TraceUpsertWithoutPartsInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateToOneWithWhereWithoutPartsInput, {
    nullable: true,
  })
  update?: TraceUpdateToOneWithWhereWithoutPartsInput | undefined;
}
