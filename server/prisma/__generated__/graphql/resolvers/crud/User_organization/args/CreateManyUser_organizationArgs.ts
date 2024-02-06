import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationCreateManyInput } from "../../../inputs/User_organizationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUser_organizationArgs {
  @TypeGraphQL.Field((_type) => [User_organizationCreateManyInput], {
    nullable: false,
  })
  data!: User_organizationCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
