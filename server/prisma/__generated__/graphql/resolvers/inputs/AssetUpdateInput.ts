import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateOneRequiredWithoutImagesNestedInput } from "../inputs/TraceUpdateOneRequiredWithoutImagesNestedInput";

@TypeGraphQL.InputType("AssetUpdateInput", {})
export class AssetUpdateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  date?: Date | undefined;

  @TypeGraphQL.Field(
    (_type) => TraceUpdateOneRequiredWithoutImagesNestedInput,
    {
      nullable: true,
    },
  )
  trace?: TraceUpdateOneRequiredWithoutImagesNestedInput | undefined;
}
