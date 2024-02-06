import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumteam_roleWithAggregatesFilter } from "../inputs/Enumteam_roleWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType(
  "User_organization_teamScalarWhereWithAggregatesInput",
  {},
)
export class User_organization_teamScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [User_organization_teamScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: User_organization_teamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: User_organization_teamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: User_organization_teamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  team_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  user_organization_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumteam_roleWithAggregatesFilter, {
    nullable: true,
  })
  role?: Enumteam_roleWithAggregatesFilter | undefined;
}
