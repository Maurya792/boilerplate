import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationCreateInput } from "../../../inputs/User_organizationCreateInput";
import { User_organizationUpdateInput } from "../../../inputs/User_organizationUpdateInput";
import { User_organizationWhereUniqueInput } from "../../../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organizationCreateInput, {
    nullable: false,
  })
  create!: User_organizationCreateInput;

  @TypeGraphQL.Field((_type) => User_organizationUpdateInput, {
    nullable: false,
  })
  update!: User_organizationUpdateInput;
}
