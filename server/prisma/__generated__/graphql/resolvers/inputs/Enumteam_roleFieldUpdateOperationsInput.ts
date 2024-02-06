import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.InputType("Enumteam_roleFieldUpdateOperationsInput", {})
export class Enumteam_roleFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => team_role, {
    nullable: true,
  })
  set?: "manager" | "member" | undefined;
}
