import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("LogMaxAggregate", {
  simpleResolvers: true,
})
export class LogMaxAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  start_time!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  end_time!: Date | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  is_active!: boolean | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  status!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  trace_id!: number | null;
}
