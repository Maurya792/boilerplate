import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutOrganizationInput } from "../inputs/TeamUpdateWithoutOrganizationInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateWithWhereUniqueWithoutOrganizationInput", {})
export class TeamUpdateWithWhereUniqueWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: false,
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TeamUpdateWithoutOrganizationInput, {
    nullable: false,
  })
  data!: TeamUpdateWithoutOrganizationInput;
}
