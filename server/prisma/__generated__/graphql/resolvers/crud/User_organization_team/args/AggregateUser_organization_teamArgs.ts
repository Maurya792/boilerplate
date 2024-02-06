import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamOrderByWithRelationInput } from "../../../inputs/User_organization_teamOrderByWithRelationInput";
import { User_organization_teamWhereInput } from "../../../inputs/User_organization_teamWhereInput";
import { User_organization_teamWhereUniqueInput } from "../../../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUser_organization_teamArgs {
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
}
