import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TraceCreateManyInput", {})
export class TraceCreateManyInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_organization_id!: number;
}