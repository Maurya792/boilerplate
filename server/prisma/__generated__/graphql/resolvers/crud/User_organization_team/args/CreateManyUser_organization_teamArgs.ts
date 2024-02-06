import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamCreateManyInput } from "../../../inputs/User_organization_teamCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUser_organization_teamArgs {
  @TypeGraphQL.Field((_type) => [User_organization_teamCreateManyInput], {
    nullable: false,
  })
  data!: User_organization_teamCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
