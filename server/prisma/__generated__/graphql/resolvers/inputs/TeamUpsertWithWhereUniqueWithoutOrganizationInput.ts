import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutOrganizationInput } from "../inputs/TeamCreateWithoutOrganizationInput";
import { TeamUpdateWithoutOrganizationInput } from "../inputs/TeamUpdateWithoutOrganizationInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpsertWithWhereUniqueWithoutOrganizationInput", {})
export class TeamUpsertWithWhereUniqueWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: false,
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TeamUpdateWithoutOrganizationInput, {
    nullable: false,
  })
  update!: TeamUpdateWithoutOrganizationInput;

  @TypeGraphQL.Field((_type) => TeamCreateWithoutOrganizationInput, {
    nullable: false,
  })
  create!: TeamCreateWithoutOrganizationInput;
}
