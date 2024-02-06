import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamCreateInput } from "../../../inputs/User_organization_teamCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUser_organization_teamArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamCreateInput, {
    nullable: false,
  })
  data!: User_organization_teamCreateInput;
}
