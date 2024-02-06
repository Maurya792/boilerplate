import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";

@TypeGraphQL.ArgsType()
export class User_organizationOrganizationArgs {
  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;
}
