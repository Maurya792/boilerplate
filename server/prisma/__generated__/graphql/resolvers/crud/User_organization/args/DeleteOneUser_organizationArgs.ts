import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationWhereUniqueInput } from "../../../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;
}
