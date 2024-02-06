import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutUser_organization_teamsInput } from "../inputs/TeamCreateOrConnectWithoutUser_organization_teamsInput";
import { TeamCreateWithoutUser_organization_teamsInput } from "../inputs/TeamCreateWithoutUser_organization_teamsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType(
  "TeamCreateNestedOneWithoutUser_organization_teamsInput",
  {},
)
export class TeamCreateNestedOneWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => TeamCreateWithoutUser_organization_teamsInput, {
    nullable: true,
  })
  create?: TeamCreateWithoutUser_organization_teamsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => TeamCreateOrConnectWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | TeamCreateOrConnectWithoutUser_organization_teamsInput
    | undefined;

  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: true,
  })
  connect?: TeamWhereUniqueInput | undefined;
}
