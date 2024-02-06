import * as TypeGraphQL from "type-graphql";

export enum PartScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at",
  active_time = "active_time",
  in_active_time = "in_active_time",
  trace_id = "trace_id",
}
TypeGraphQL.registerEnumType(PartScalarFieldEnum, {
  name: "PartScalarFieldEnum",
  description: undefined,
});
