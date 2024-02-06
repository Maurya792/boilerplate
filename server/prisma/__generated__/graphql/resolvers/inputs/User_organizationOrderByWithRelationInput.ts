import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationOrderByWithRelationInput } from "../inputs/OrganizationOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TraceOrderByRelationAggregateInput } from "../inputs/TraceOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { User_organization_teamOrderByRelationAggregateInput } from "../inputs/User_organization_teamOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("User_organizationOrderByWithRelationInput", {})
export class User_organizationOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => TraceOrderByRelationAggregateInput, {
    nullable: true,
  })
  traces?: TraceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationOrderByWithRelationInput, {
    nullable: true,
  })
  organization?: OrganizationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamOrderByRelationAggregateInput,
    {
      nullable: true,
    },
  )
  user_organization_teams?:
    | User_organization_teamOrderByRelationAggregateInput
    | undefined;
}
