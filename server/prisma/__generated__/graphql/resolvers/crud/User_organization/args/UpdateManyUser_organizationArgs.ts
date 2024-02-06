import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationUpdateManyMutationInput } from "../../../inputs/User_organizationUpdateManyMutationInput";
import { User_organizationWhereInput } from "../../../inputs/User_organizationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: User_organizationUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;
}
