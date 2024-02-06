import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumteam_roleFilter } from "../inputs/Enumteam_roleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("User_organization_teamScalarWhereInput", {})
export class User_organization_teamScalarWhereInput {
  @TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput], {
    nullable: true,
  })
  AND?: User_organization_teamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput], {
    nullable: true,
  })
  OR?: User_organization_teamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput], {
    nullable: true,
  })
  NOT?: User_organization_teamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  team_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  user_organization_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumteam_roleFilter, {
    nullable: true,
  })
  role?: Enumteam_roleFilter | undefined;
}
