import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationOrderByWithRelationInput } from "../inputs/OrganizationOrderByWithRelationInput";
import { User_organization_teamOrderByRelationAggregateInput } from "../inputs/User_organization_teamOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamOrderByWithRelationInput", {})
export class TeamOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  organization_id?: "asc" | "desc" | undefined;

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
