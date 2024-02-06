import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trace } from "../models/Trace";

@TypeGraphQL.ObjectType("Log", {
  simpleResolvers: true,
})
export class Log {
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

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  start_time!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  end_time!: Date;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  is_active!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  status!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  trace_id!: number;

  trace?: Trace;
}
