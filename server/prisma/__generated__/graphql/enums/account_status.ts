import * as TypeGraphQL from "type-graphql";

export enum account_status {
  active = "active",
  initiated = "initiated",
}
TypeGraphQL.registerEnumType(account_status, {
  name: "account_status",
  description: undefined,
});
