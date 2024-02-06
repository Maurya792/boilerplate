import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TeamScalarWhereInput", {})
export class TeamScalarWhereInput {
  @TypeGraphQL.Field((_type) => [TeamScalarWhereInput], {
    nullable: true,
  })
  AND?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamScalarWhereInput], {
    nullable: true,
  })
  OR?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamScalarWhereInput], {
    nullable: true,
  })
  NOT?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  organization_id?: IntFilter | undefined;
}
