import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutUser_organization_teamsInput } from "../inputs/TeamUpdateWithoutUser_organization_teamsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType(
  "TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput",
  {},
)
export class TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => TeamWhereInput, {
    nullable: true,
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TeamUpdateWithoutUser_organization_teamsInput, {
    nullable: false,
  })
  data!: TeamUpdateWithoutUser_organization_teamsInput;
}
