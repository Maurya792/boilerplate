import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutUser_organization_teamsInput } from "../inputs/TeamCreateOrConnectWithoutUser_organization_teamsInput";
import { TeamCreateWithoutUser_organization_teamsInput } from "../inputs/TeamCreateWithoutUser_organization_teamsInput";
import { TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput } from "../inputs/TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput";
import { TeamUpsertWithoutUser_organization_teamsInput } from "../inputs/TeamUpsertWithoutUser_organization_teamsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType(
  "TeamUpdateOneWithoutUser_organization_teamsNestedInput",
  {},
)
export class TeamUpdateOneWithoutUser_organization_teamsNestedInput {
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

  @TypeGraphQL.Field((_type) => TeamUpsertWithoutUser_organization_teamsInput, {
    nullable: true,
  })
  upsert?: TeamUpsertWithoutUser_organization_teamsInput | undefined;

  @TypeGraphQL.Field((_type) => TeamWhereInput, {
    nullable: true,
  })
  disconnect?: TeamWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TeamWhereInput, {
    nullable: true,
  })
  delete?: TeamWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TeamWhereUniqueInput, {
    nullable: true,
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput,
    {
      nullable: true,
    },
  )
  update?:
    | TeamUpdateToOneWithWhereWithoutUser_organization_teamsInput
    | undefined;
}
