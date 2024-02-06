import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trace } from "../models/Trace";

@TypeGraphQL.ObjectType("Part", {
  simpleResolvers: true,
})
export class Part {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  created_at!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updated_at!: Date;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  in_active_time!: Prisma.Decimal;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  trace_id!: number;

  trace?: Trace;
}
