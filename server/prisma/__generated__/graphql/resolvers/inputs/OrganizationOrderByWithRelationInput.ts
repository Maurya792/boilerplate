import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TeamOrderByRelationAggregateInput } from "../inputs/TeamOrderByRelationAggregateInput";
import { User_organizationOrderByRelationAggregateInput } from "../inputs/User_organizationOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrganizationOrderByWithRelationInput", {})
export class OrganizationOrderByWithRelationInput {
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

  @TypeGraphQL.Field(
    (_type) => User_organizationOrderByRelationAggregateInput,
    {
      nullable: true,
    },
  )
  user_organizations?:
    | User_organizationOrderByRelationAggregateInput
    | undefined;

  @TypeGraphQL.Field((_type) => TeamOrderByRelationAggregateInput, {
    nullable: true,
  })
  teams?: TeamOrderByRelationAggregateInput | undefined;
}
