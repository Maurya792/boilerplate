import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateWithoutTeamInput } from "../inputs/User_organization_teamCreateWithoutTeamInput";
import { User_organization_teamWhereUniqueInput } from "../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organization_teamCreateOrConnectWithoutTeamInput",
  {},
)
export class User_organization_teamCreateOrConnectWithoutTeamInput {
  @TypeGraphQL.Field((_type) => User_organization_teamWhereUniqueInput, {
    nullable: false,
  })
  where!: User_organization_teamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => User_organization_teamCreateWithoutTeamInput, {
    nullable: false,
  })
  create!: User_organization_teamCreateWithoutTeamInput;
}
