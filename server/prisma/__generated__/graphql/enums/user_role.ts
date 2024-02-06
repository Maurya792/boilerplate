import * as TypeGraphQL from "type-graphql";

export enum user_role {
  admin = "admin",
  user = "user",
  owner = "owner",
}
TypeGraphQL.registerEnumType(user_role, {
  name: "user_role",
  description: undefined,
});
