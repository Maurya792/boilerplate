import * as TypeGraphQL from "type-graphql";

export enum LogScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at",
  start_time = "start_time",
  end_time = "end_time",
  is_active = "is_active",
  status = "status",
  trace_id = "trace_id",
}
TypeGraphQL.registerEnumType(LogScalarFieldEnum, {
  name: "LogScalarFieldEnum",
  description: undefined,
});
