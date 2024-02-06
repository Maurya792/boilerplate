import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("traceUser_organization_idDateCompoundUniqueInput", {})
export class traceUser_organization_idDateCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_organization_id!: number;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  date!: Date;
}
