import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutUser_organization_teamsInput } from "../inputs/TeamCreateWithoutUser_organization_teamsInput";
import { TeamUpdateWithoutUser_organization_teamsInput } from "../inputs/TeamUpdateWithoutUser_organization_teamsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpsertWithoutUser_organization_teamsInput", {})
export class TeamUpsertWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => TeamUpdateWithoutUser_organization_teamsInput, {
    nullable: false,
  })
  update!: TeamUpdateWithoutUser_organization_teamsInput;

  @TypeGraphQL.Field((_type) => TeamCreateWithoutUser_organization_teamsInput, {
    nullable: false,
  })
  create!: TeamCreateWithoutUser_organization_teamsInput;

  @TypeGraphQL.Field((_type) => TeamWhereInput, {
    nullable: true,
  })
  where?: TeamWhereInput | undefined;
}
