import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrganizationOrThrowArgs {
  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: false,
  })
  where!: OrganizationWhereUniqueInput;
}
