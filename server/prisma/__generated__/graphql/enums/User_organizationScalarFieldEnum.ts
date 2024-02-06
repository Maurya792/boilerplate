import * as TypeGraphQL from "type-graphql";

export enum User_organizationScalarFieldEnum {
  id = "id",
  role = "role",
  user_id = "user_id",
  slug = "slug",
  organization_id = "organization_id",
  invitation_status = "invitation_status",
  last_invited = "last_invited",
}
TypeGraphQL.registerEnumType(User_organizationScalarFieldEnum, {
  name: "User_organizationScalarFieldEnum",
  description: undefined,
});
