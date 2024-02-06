import * as TypeGraphQL from "type-graphql";

export enum team_role {
  manager = "manager",
  member = "member",
}
TypeGraphQL.registerEnumType(team_role, {
  name: "team_role",
  description: undefined,
});
