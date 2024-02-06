import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateOrConnectWithoutImagesInput } from "../inputs/TraceCreateOrConnectWithoutImagesInput";
import { TraceCreateWithoutImagesInput } from "../inputs/TraceCreateWithoutImagesInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateNestedOneWithoutImagesInput", {})
export class TraceCreateNestedOneWithoutImagesInput {
  @TypeGraphQL.Field((_type) => TraceCreateWithoutImagesInput, {
    nullable: true,
  })
  create?: TraceCreateWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateOrConnectWithoutImagesInput, {
    nullable: true,
  })
  connectOrCreate?: TraceCreateOrConnectWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput | undefined;
}
