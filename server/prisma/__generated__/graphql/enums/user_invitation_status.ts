import * as TypeGraphQL from "type-graphql";

export enum user_invitation_status {
  notConnected = "notConnected",
  invited = "invited",
  connected = "connected",
}
TypeGraphQL.registerEnumType(user_invitation_status, {
  name: "user_invitation_status",
  description: undefined,
});
