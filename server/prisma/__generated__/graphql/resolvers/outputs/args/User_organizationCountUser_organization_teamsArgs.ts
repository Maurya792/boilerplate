import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamWhereInput } from "../../inputs/User_organization_teamWhereInput";

@TypeGraphQL.ArgsType()
export class User_organizationCountUser_organization_teamsArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  where?: User_organization_teamWhereInput | undefined;
}
