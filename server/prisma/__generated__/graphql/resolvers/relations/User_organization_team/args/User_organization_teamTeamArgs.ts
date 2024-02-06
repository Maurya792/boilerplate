import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";

@TypeGraphQL.ArgsType()
export class User_organization_teamTeamArgs {
  @TypeGraphQL.Field((_type) => TeamWhereInput, {
    nullable: true,
  })
  where?: TeamWhereInput | undefined;
}
