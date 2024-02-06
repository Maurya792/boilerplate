import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organization_teamOrderByWithAggregationInput } from "../../../inputs/User_organization_teamOrderByWithAggregationInput";
import { User_organization_teamScalarWhereWithAggregatesInput } from "../../../inputs/User_organization_teamScalarWhereWithAggregatesInput";
import { User_organization_teamWhereInput } from "../../../inputs/User_organization_teamWhereInput";
import { User_organization_teamScalarFieldEnum } from "../../../../enums/User_organization_teamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUser_organization_teamArgs {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  where?: User_organization_teamWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamOrderByWithAggregationInput],
    {
      nullable: true,
    },
  )
  orderBy?: User_organization_teamOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "team_id" | "user_organization_id" | "role">;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: User_organization_teamScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
