import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { User_organization_teamAvgOrderByAggregateInput } from "../inputs/User_organization_teamAvgOrderByAggregateInput";
import { User_organization_teamCountOrderByAggregateInput } from "../inputs/User_organization_teamCountOrderByAggregateInput";
import { User_organization_teamMaxOrderByAggregateInput } from "../inputs/User_organization_teamMaxOrderByAggregateInput";
import { User_organization_teamMinOrderByAggregateInput } from "../inputs/User_organization_teamMinOrderByAggregateInput";
import { User_organization_teamSumOrderByAggregateInput } from "../inputs/User_organization_teamSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("User_organization_teamOrderByWithAggregationInput", {})
export class User_organization_teamOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  team_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  user_organization_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamCountOrderByAggregateInput,
    {
      nullable: true,
    },
  )
  _count?: User_organization_teamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamAvgOrderByAggregateInput,
    {
      nullable: true,
    },
  )
  _avg?: User_organization_teamAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamMaxOrderByAggregateInput,
    {
      nullable: true,
    },
  )
  _max?: User_organization_teamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamMinOrderByAggregateInput,
    {
      nullable: true,
    },
  )
  _min?: User_organization_teamMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamSumOrderByAggregateInput,
    {
      nullable: true,
    },
  )
  _sum?: User_organization_teamSumOrderByAggregateInput | undefined;
}
