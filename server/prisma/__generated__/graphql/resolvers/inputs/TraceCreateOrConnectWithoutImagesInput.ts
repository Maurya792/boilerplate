import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateWithoutImagesInput } from "../inputs/TraceCreateWithoutImagesInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateOrConnectWithoutImagesInput", {})
export class TraceCreateOrConnectWithoutImagesInput {
  @TypeGraphQL.Field((_type) => TraceWhereUniqueInput, {
    nullable: false,
  })
  where!: TraceWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TraceCreateWithoutImagesInput, {
    nullable: false,
  })
  create!: TraceCreateWithoutImagesInput;
}
