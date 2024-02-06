import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationAvgOrderByAggregateInput } from "../inputs/OrganizationAvgOrderByAggregateInput";
import { OrganizationCountOrderByAggregateInput } from "../inputs/OrganizationCountOrderByAggregateInput";
import { OrganizationMaxOrderByAggregateInput } from "../inputs/OrganizationMaxOrderByAggregateInput";
import { OrganizationMinOrderByAggregateInput } from "../inputs/OrganizationMinOrderByAggregateInput";
import { OrganizationSumOrderByAggregateInput } from "../inputs/OrganizationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrganizationOrderByWithAggregationInput", {})
export class OrganizationOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: OrganizationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: OrganizationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: OrganizationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: OrganizationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: OrganizationSumOrderByAggregateInput | undefined;
}
