import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationOrderByWithAggregationInput } from "../../../inputs/OrganizationOrderByWithAggregationInput";
import { OrganizationScalarWhereWithAggregatesInput } from "../../../inputs/OrganizationScalarWhereWithAggregatesInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
import { OrganizationScalarFieldEnum } from "../../../../enums/OrganizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrganizationArgs {
  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: OrganizationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [OrganizationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "slug" | "name">;

  @TypeGraphQL.Field((_type) => OrganizationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: OrganizationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
