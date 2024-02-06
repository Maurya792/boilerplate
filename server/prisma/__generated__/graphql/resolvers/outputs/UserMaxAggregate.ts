import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { account_status } from "../../enums/account_status";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
  simpleResolvers: true,
})
export class UserMaxAggregate {
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

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  username!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  password!: string | null;

  @TypeGraphQL.Field((_type) => account_status, {
    nullable: true,
  })
  status!: "active" | "initiated" | null;
}
