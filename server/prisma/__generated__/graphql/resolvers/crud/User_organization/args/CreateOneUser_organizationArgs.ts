import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationCreateInput } from "../../../inputs/User_organizationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationCreateInput, {
    nullable: false,
  })
  data!: User_organizationCreateInput;
}
