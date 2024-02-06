import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationUpdateInput } from "../../../inputs/User_organizationUpdateInput";
import { User_organizationWhereUniqueInput } from "../../../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationUpdateInput, {
    nullable: false,
  })
  data!: User_organizationUpdateInput;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organizationWhereUniqueInput;
}
