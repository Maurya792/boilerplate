import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountUser_organizationsArgs } from "./args/UserCountUser_organizationsArgs";

@TypeGraphQL.ObjectType("UserCount", {
  simpleResolvers: true,
})
export class UserCount {
  user_organizations!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "user_organizations",
    nullable: false,
  })
  getUser_organizations(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountUser_organizationsArgs,
  ): number {
    return root.user_organizations;
  }
}
