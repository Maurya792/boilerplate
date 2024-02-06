import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutImagesInput } from "../inputs/TraceCreateOrConnectWithoutImagesInput";
import { TraceCreateWithoutImagesInput } from "../inputs/TraceCreateWithoutImagesInput";
import { TraceUpdateToOneWithWhereWithoutImagesInput } from "../inputs/TraceUpdateToOneWithWhereWithoutImagesInput";
import { TraceUpsertWithoutImagesInput } from "../inputs/TraceUpsertWithoutImagesInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceUpdateOneRequiredWithoutImagesNestedInput", {})
export class TraceUpdateOneRequiredWithoutImagesNestedInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutImagesInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutImagesInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpsertWithoutImagesInput, {
    nullable: true,
  })
  upsert?: TraceUpsertWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateToOneWithWhereWithoutImagesInput, {
    nullable: true,
  })
  update?: TraceUpdateToOneWithWhereWithoutImagesInput | undefined;
}
