import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamWhereInput } from "../inputs/User_organization_teamWhereInput";

@TypeGraphQL.InputType("User_organization_teamListRelationFilter", {})
export class User_organization_teamListRelationFilter {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  every?: User_organization_teamWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  some?: User_organization_teamWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organization_teamWhereInput, {
    nullable: true,
  })
  none?: User_organization_teamWhereInput | undefined;
}
