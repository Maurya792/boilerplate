import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OrganizationUpdateManyMutationInput", {})
export class OrganizationUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;
}
