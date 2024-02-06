import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamCreateInput } from "../../../inputs/User_organization_teamCreateInput";
import { User_organization_teamUpdateInput } from "../../../inputs/User_organization_teamUpdateInput";
import { User_organization_teamWhereUniqueInput } from "../../../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUser_organization_teamArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organization_teamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organization_teamCreateInput, {
    nullable: false,
  })
  create!: User_organization_teamCreateInput;

  @TypeGraphQL.Field((_type) => User_organization_teamUpdateInput, {
    nullable: false,
  })
  update!: User_organization_teamUpdateInput;
}
