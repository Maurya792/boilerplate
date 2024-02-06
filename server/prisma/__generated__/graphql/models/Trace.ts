import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Asset } from "../models/Asset";
import { Log } from "../models/Log";
import { Part } from "../models/Part";
import { User_organization } from "../models/User_organization";
import { TraceCount } from "../resolvers/outputs/TraceCount";

@TypeGraphQL.ObjectType("Trace", {
  simpleResolvers: true,
})
export class Trace {
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

  images?: Asset[];

  logs?: Log[];

  parts?: Part[];

  user_organization?: User_organization | null;

  @TypeGraphQL.Field((_type) => TraceCount, {
    nullable: true,
  })
  _count?: TraceCount | null;
}
