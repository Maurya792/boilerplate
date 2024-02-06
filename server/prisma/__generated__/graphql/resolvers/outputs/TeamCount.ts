import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountUser_organization_teamsArgs } from "./args/TeamCountUser_organization_teamsArgs";

@TypeGraphQL.ObjectType("TeamCount", {
  simpleResolvers: true,
})
export class TeamCount {
  user_organization_teams!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "user_organization_teams",
    nullable: false,
  })
  getUser_organization_teams(
    @TypeGraphQL.Root() root: TeamCount,
    @TypeGraphQL.Args() args: TeamCountUser_organization_teamsArgs,
  ): number {
    return root.user_organization_teams;
  }
}
