import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateManyTeamInputEnvelope } from "../inputs/User_organization_teamCreateManyTeamInputEnvelope";
import { User_organization_teamCreateOrConnectWithoutTeamInput } from "../inputs/User_organization_teamCreateOrConnectWithoutTeamInput";
import { User_organization_teamCreateWithoutTeamInput } from "../inputs/User_organization_teamCreateWithoutTeamInput";
import { User_organization_teamWhereUniqueInput } from "../inputs/User_organization_teamWhereUniqueInput";

@TypeGraphQL.InputType(
  "User_organization_teamCreateNestedManyWithoutTeamInput",
  {},
)
export class User_organization_teamCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateWithoutTeamInput],
    {
      nullable: true,
    },
  )
  create?: User_organization_teamCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateOrConnectWithoutTeamInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organization_teamCreateOrConnectWithoutTeamInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organization_teamCreateManyTeamInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: User_organization_teamCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput], {
    nullable: true,
  })
  connect?: User_organization_teamWhereUniqueInput[] | undefined;
}
