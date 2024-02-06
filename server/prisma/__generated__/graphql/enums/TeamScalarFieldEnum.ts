import * as TypeGraphQL from "type-graphql";

export enum TeamScalarFieldEnum {
  id = "id",
  name = "name",
  organization_id = "organization_id",
}
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
  name: "TeamScalarFieldEnum",
  description: undefined,
});
