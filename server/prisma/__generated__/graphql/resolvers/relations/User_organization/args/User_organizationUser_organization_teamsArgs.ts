import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamOrderByWithRelationInput } from "../../../inputs/User_organization_teamOrderByWithRelationInput";
import { User_organization_teamWhereInput } from "../../../inputs/User_organization_teamWhereInput";
import { User_organization_teamWhereUniqueInput } from "../../../inputs/User_organization_teamWhereUniqueInput";
import { User_organization_teamScalarFieldEnum } from "../../../../enums/User_organization_teamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class User_organizationUser_organization_teamsArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  where?: User_organization_teamWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamOrderByWithRelationInput],
    {
      nullable: true,
    },
  )
  orderBy?: User_organization_teamOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => User_organization_teamWhereUniqueInput, {
    nullable: true,
  })
  cursor?: User_organization_teamWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "team_id" | "user_organization_id" | "role">
    | undefined;
}
