import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateNestedManyWithoutTraceInput } from "../inputs/AssetCreateNestedManyWithoutTraceInput";
import { LogCreateNestedManyWithoutTraceInput } from "../inputs/LogCreateNestedManyWithoutTraceInput";
import { PartCreateNestedManyWithoutTraceInput } from "../inputs/PartCreateNestedManyWithoutTraceInput";
import { User_organizationCreateNestedOneWithoutTracesInput } from "../inputs/User_organizationCreateNestedOneWithoutTracesInput";

@TypeGraphQL.InputType("TraceCreateInput", {})
export class TraceCreateInput {
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

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  all_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  date!: Date;

  @TypeGraphQL.Field((_type) => AssetCreateNestedManyWithoutTraceInput, {
    nullable: true,
  })
  images?: AssetCreateNestedManyWithoutTraceInput | undefined;

  @TypeGraphQL.Field((_type) => LogCreateNestedManyWithoutTraceInput, {
    nullable: true,
  })
  logs?: LogCreateNestedManyWithoutTraceInput | undefined;

  @TypeGraphQL.Field((_type) => PartCreateNestedManyWithoutTraceInput, {
    nullable: true,
  })
  parts?: PartCreateNestedManyWithoutTraceInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateNestedOneWithoutTracesInput,
    {
      nullable: true,
    },
  )
  user_organization?:
    | User_organizationCreateNestedOneWithoutTracesInput
    | undefined;
}
