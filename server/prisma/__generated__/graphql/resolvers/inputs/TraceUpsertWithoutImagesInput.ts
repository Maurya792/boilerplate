import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutImagesInput } from "../inputs/TraceCreateWithoutImagesInput";
import { TraceUpdateWithoutImagesInput } from "../inputs/TraceUpdateWithoutImagesInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpsertWithoutImagesInput", {})
export class TraceUpsertWithoutImagesInput {
  @TypeGraphQL.Field((_type) => TraceUpdateWithoutImagesInput, {
    nullable: false,
  })
  update!: TraceUpdateWithoutImagesInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutImagesInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutImagesInput;

  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;
}
