import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationCreateInput } from "../../../inputs/OrganizationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrganizationArgs {
  @TypeGraphQL.Field((_type) => OrganizationCreateInput, {
    nullable: false,
  })
  data!: OrganizationCreateInput;
}
