import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamUpdateInput } from "../../../inputs/User_organization_teamUpdateInput";
import { User_organization_teamWhereUniqueInput } from "../../../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUser_organization_teamArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamUpdateInput, {
    nullable: false,
  })
  data!: User_organization_teamUpdateInput;

  @TypeGraphQL.Field((_type) => User_organization_teamWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organization_teamWhereUniqueInput;
}
