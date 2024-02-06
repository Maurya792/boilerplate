import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateNestedOneWithoutPartsInput } from "../inputs/TraceCreateNestedOneWithoutPartsInput";

@TypeGraphQL.InputType("PartCreateInput", {})
export class PartCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  in_active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => TraceCreateNestedOneWithoutPartsInput, {
    nullable: false,
  })
  trace!: TraceCreateNestedOneWithoutPartsInput;
}
