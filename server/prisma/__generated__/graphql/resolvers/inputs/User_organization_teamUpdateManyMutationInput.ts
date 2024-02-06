import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("User_organization_teamUpdateManyMutationInput", {})
export class User_organization_teamUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  role?: "manager" | "member" | undefined;
}
