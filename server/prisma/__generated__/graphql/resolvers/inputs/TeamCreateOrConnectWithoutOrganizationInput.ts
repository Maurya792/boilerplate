import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutOrganizationInput } from "../inputs/TeamCreateWithoutOrganizationInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateOrConnectWithoutOrganizationInput", {})
export class TeamCreateOrConnectWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: false,
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TeamCreateWithoutOrganizationInput, {
    nullable: false,
  })
  create!: TeamCreateWithoutOrganizationInput;
}
