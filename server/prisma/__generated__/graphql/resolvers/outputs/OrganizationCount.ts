import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCountTeamsArgs } from "./args/OrganizationCountTeamsArgs";
import { OrganizationCountUser_organizationsArgs } from "./args/OrganizationCountUser_organizationsArgs";

@TypeGraphQL.ObjectType("OrganizationCount", {
  simpleResolvers: true,
})
export class OrganizationCount {
  user_organizations!: number;
  teams!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "user_organizations",
    nullable: false,
  })
  getUser_organizations(
    @TypeGraphQL.Root() root: OrganizationCount,
    @TypeGraphQL.Args() args: OrganizationCountUser_organizationsArgs,
  ): number {
    return root.user_organizations;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "teams",
    nullable: false,
  })
  getTeams(
    @TypeGraphQL.Root() root: OrganizationCount,
    @TypeGraphQL.Args() args: OrganizationCountTeamsArgs,
  ): number {
    return root.teams;
  }
}
