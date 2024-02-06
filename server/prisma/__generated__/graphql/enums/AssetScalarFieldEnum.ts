import * as TypeGraphQL from "type-graphql";

export enum AssetScalarFieldEnum {
  id = "id",
  url = "url",
  date = "date",
  trace_id = "trace_id",
}
TypeGraphQL.registerEnumType(AssetScalarFieldEnum, {
  name: "AssetScalarFieldEnum",
  description: undefined,
});
