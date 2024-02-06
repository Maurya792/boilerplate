import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at",
  username = "username",
  name = "name",
  password = "password",
  status = "status",
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
