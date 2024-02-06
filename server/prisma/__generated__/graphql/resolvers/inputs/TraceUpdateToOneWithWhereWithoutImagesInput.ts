import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateWithoutImagesInput } from "../inputs/TraceUpdateWithoutImagesInput";
import { TraceWhereInput } from "../inputs/TraceWhereInput";

@TypeGraphQL.InputType("TraceUpdateToOneWithWhereWithoutImagesInput", {})
export class TraceUpdateToOneWithWhereWithoutImagesInput {
  @TypeGraphQL.Field((_type) => TraceWhereInput, {
    nullable: true,
  })
  where?: TraceWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateWithoutImagesInput, {
    nullable: false,
  })
  data!: TraceUpdateWithoutImagesInput;
}
