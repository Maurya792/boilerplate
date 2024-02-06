import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationOrderByWithAggregationInput } from "../../../inputs/User_organizationOrderByWithAggregationInput";
import { User_organizationScalarWhereWithAggregatesInput } from "../../../inputs/User_organizationScalarWhereWithAggregatesInput";
import { User_organizationWhereInput } from "../../../inputs/User_organizationWhereInput";
import { User_organizationScalarFieldEnum } from "../../../../enums/User_organizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUser_organizationArgs {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationOrderByWithAggregationInput],
    {
      nullable: true,
    },
  )
  orderBy?: User_organizationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "role"
    | "user_id"
    | "slug"
    | "organization_id"
    | "invitation_status"
    | "last_invited"
  >;

  @TypeGraphQL.Field(
    (_type) => User_organizationScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: User_organizationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
