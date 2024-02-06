import * as TypeGraphQL from "type-graphql";

export enum TraceScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at",
  active_time = "active_time",
  in_active_time = "in_active_time",
  all_time = "all_time",
  date = "date",
  user_id = "user_id",
  organization_id = "organization_id",
  user_organization_id = "user_organization_id",
}
TypeGraphQL.registerEnumType(TraceScalarFieldEnum, {
  name: "TraceScalarFieldEnum",
  description: undefined,
});
