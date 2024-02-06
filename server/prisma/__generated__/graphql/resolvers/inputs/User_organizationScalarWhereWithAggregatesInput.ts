import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { Enumuser_invitation_statusNullableWithAggregatesFilter } from "../inputs/Enumuser_invitation_statusNullableWithAggregatesFilter";
import { Enumuser_roleWithAggregatesFilter } from "../inputs/Enumuser_roleWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("User_organizationScalarWhereWithAggregatesInput", {})
export class User_organizationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [User_organizationScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: User_organizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: User_organizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organizationScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: User_organizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumuser_roleWithAggregatesFilter, {
    nullable: true,
  })
  role?: Enumuser_roleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  organization_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(
    (_type) => Enumuser_invitation_statusNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  invitation_status?:
    | Enumuser_invitation_statusNullableWithAggregatesFilter
    | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  last_invited?: DateTimeNullableWithAggregatesFilter | undefined;
}
