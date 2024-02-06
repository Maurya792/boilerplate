import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutUser_organization_teamsInput } from "../inputs/TeamCreateWithoutUser_organization_teamsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType(
  "TeamCreateOrConnectWithoutUser_organization_teamsInput",
  {},
)
export class TeamCreateOrConnectWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: false,
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TeamCreateWithoutUser_organization_teamsInput, {
    nullable: false,
  })
  create!: TeamCreateWithoutUser_organization_teamsInput;
}
