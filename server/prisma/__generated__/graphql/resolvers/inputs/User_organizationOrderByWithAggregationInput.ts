import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { User_organizationAvgOrderByAggregateInput } from "../inputs/User_organizationAvgOrderByAggregateInput";
import { User_organizationCountOrderByAggregateInput } from "../inputs/User_organizationCountOrderByAggregateInput";
import { User_organizationMaxOrderByAggregateInput } from "../inputs/User_organizationMaxOrderByAggregateInput";
import { User_organizationMinOrderByAggregateInput } from "../inputs/User_organizationMinOrderByAggregateInput";
import { User_organizationSumOrderByAggregateInput } from "../inputs/User_organizationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("User_organizationOrderByWithAggregationInput", {})
export class User_organizationOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  organization_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  invitation_status?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  last_invited?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: User_organizationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: User_organizationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: User_organizationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: User_organizationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: User_organizationSumOrderByAggregateInput | undefined;
}
