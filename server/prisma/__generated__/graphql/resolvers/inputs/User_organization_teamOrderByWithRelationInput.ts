import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TeamOrderByWithRelationInput } from "../inputs/TeamOrderByWithRelationInput";
import { User_organizationOrderByWithRelationInput } from "../inputs/User_organizationOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("User_organization_teamOrderByWithRelationInput", {})
export class User_organization_teamOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => TeamOrderByWithRelationInput, {
    nullable: true,
  })
  team?: TeamOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationOrderByWithRelationInput, {
    nullable: true,
  })
  user_organization?: User_organizationOrderByWithRelationInput | undefined;
}
