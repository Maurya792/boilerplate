import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { account_status } from "../enums/account_status";

@TypeGraphQL.ObjectType("User", {
  simpleResolvers: true,
})
export class User {
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

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  password?: string;

  @TypeGraphQL.Field((_type) => account_status, {
    nullable: false,
  })
  status!: "active" | "initiated";
}
