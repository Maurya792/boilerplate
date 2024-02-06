import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Team } from "../models/Team";
import { User_organization } from "../models/User_organization";
import { team_role } from "../enums/team_role";

@TypeGraphQL.ObjectType("User_organization_team", {
  simpleResolvers: true,
})
export class User_organization_team {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  team?: Team | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  team_id!: number;

  user_organization?: User_organization | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_organization_id?: number | null;

  @TypeGraphQL.Field((_type) => team_role, {
    nullable: false,
  })
  role!: "manager" | "member";
}
