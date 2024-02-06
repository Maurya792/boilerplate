import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";

@TypeGraphQL.InputType("User_organizationListRelationFilter", {})
export class User_organizationListRelationFilter {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  every?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  some?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  none?: User_organizationWhereInput | undefined;
}
