import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyUserInput } from "../inputs/User_organizationCreateManyUserInput";

@TypeGraphQL.InputType("User_organizationCreateManyUserInputEnvelope", {})
export class User_organizationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [User_organizationCreateManyUserInput], {
    nullable: false,
  })
  data!: User_organizationCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
