import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCountTracesArgs } from "./args/User_organizationCountTracesArgs";
import { User_organizationCountUser_organization_teamsArgs } from "./args/User_organizationCountUser_organization_teamsArgs";

@TypeGraphQL.ObjectType("User_organizationCount", {
  simpleResolvers: true,
})
export class User_organizationCount {
  traces!: number;
  user_organization_teams!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "traces",
    nullable: false,
  })
  getTraces(
    @TypeGraphQL.Root() root: User_organizationCount,
    @TypeGraphQL.Args() args: User_organizationCountTracesArgs,
  ): number {
    return root.traces;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "user_organization_teams",
    nullable: false,
  })
  getUser_organization_teams(
    @TypeGraphQL.Root() root: User_organizationCount,
    @TypeGraphQL.Args() args: User_organizationCountUser_organization_teamsArgs,
  ): number {
    return root.user_organization_teams;
  }
}
