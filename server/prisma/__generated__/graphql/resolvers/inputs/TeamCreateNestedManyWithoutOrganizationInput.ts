import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateManyOrganizationInputEnvelope } from "../inputs/TeamCreateManyOrganizationInputEnvelope";
import { TeamCreateOrConnectWithoutOrganizationInput } from "../inputs/TeamCreateOrConnectWithoutOrganizationInput";
import { TeamCreateWithoutOrganizationInput } from "../inputs/TeamCreateWithoutOrganizationInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateNestedManyWithoutOrganizationInput", {})
export class TeamCreateNestedManyWithoutOrganizationInput {
  @TypeGraphQL.Field((_type) => [TeamCreateWithoutOrganizationInput], {
    nullable: true,
  })
  create?: TeamCreateWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamCreateOrConnectWithoutOrganizationInput], {
    nullable: true,
  })
  connectOrCreate?: TeamCreateOrConnectWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field((_type) => TeamCreateManyOrganizationInputEnvelope, {
    nullable: true,
  })
  createMany?: TeamCreateManyOrganizationInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereUniqueInput], {
    nullable: true,
  })
  connect?: TeamWhereUniqueInput[] | undefined;
}
