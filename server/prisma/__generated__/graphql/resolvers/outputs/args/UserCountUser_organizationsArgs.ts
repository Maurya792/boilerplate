import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationWhereInput } from "../../inputs/User_organizationWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountUser_organizationsArgs {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;
}
