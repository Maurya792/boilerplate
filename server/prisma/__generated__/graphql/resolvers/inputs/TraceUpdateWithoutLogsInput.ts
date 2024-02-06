import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetUpdateManyWithoutTraceNestedInput } from "../inputs/AssetUpdateManyWithoutTraceNestedInput";
import { PartUpdateManyWithoutTraceNestedInput } from "../inputs/PartUpdateManyWithoutTraceNestedInput";
import { User_organizationUpdateOneWithoutTracesNestedInput } from "../inputs/User_organizationUpdateOneWithoutTracesNestedInput";

@TypeGraphQL.InputType("TraceUpdateWithoutLogsInput", {})
export class TraceUpdateWithoutLogsInput {
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

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  all_time?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  date?: Date | undefined;

  @TypeGraphQL.Field((_type) => AssetUpdateManyWithoutTraceNestedInput, {
    nullable: true,
  })
  images?: AssetUpdateManyWithoutTraceNestedInput | undefined;

  @TypeGraphQL.Field((_type) => PartUpdateManyWithoutTraceNestedInput, {
    nullable: true,
  })
  parts?: PartUpdateManyWithoutTraceNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateOneWithoutTracesNestedInput,
    {
      nullable: true,
    },
  )
  user_organization?:
    | User_organizationUpdateOneWithoutTracesNestedInput
    | undefined;
}
