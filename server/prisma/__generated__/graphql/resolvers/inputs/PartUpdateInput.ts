import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceUpdateOneRequiredWithoutPartsNestedInput } from "../inputs/TraceUpdateOneRequiredWithoutPartsNestedInput";

@TypeGraphQL.InputType("PartUpdateInput", {})
export class PartUpdateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  active_time?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  in_active_time?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => TraceUpdateOneRequiredWithoutPartsNestedInput, {
    nullable: true,
  })
  trace?: TraceUpdateOneRequiredWithoutPartsNestedInput | undefined;
}
