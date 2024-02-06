import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Enumuser_invitation_statusNullableFilter } from "../inputs/Enumuser_invitation_statusNullableFilter";
import { Enumuser_roleFilter } from "../inputs/Enumuser_roleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("User_organizationScalarWhereInput", {})
export class User_organizationScalarWhereInput {
  @TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput], {
    nullable: true,
  })
  AND?: User_organizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput], {
    nullable: true,
  })
  OR?: User_organizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput], {
    nullable: true,
  })
  NOT?: User_organizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumuser_roleFilter, {
    nullable: true,
  })
  role?: Enumuser_roleFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  organization_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => Enumuser_invitation_statusNullableFilter, {
    nullable: true,
  })
  invitation_status?: Enumuser_invitation_statusNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  last_invited?: DateTimeNullableFilter | undefined;
}
