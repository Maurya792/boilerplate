import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateNestedOneWithoutImagesInput } from "../inputs/TraceCreateNestedOneWithoutImagesInput";

@TypeGraphQL.InputType("AssetCreateInput", {})
export class AssetCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  date!: Date;

  @TypeGraphQL.Field((_type) => TraceCreateNestedOneWithoutImagesInput, {
    nullable: false,
  })
  trace!: TraceCreateNestedOneWithoutImagesInput;
}
