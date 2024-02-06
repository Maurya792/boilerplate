import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateManyOrganizationInputEnvelope } from "../inputs/TeamCreateManyOrganizationInputEnvelope";
import { TeamCreateOrConnectWithoutOrganizationInput } from "../inputs/TeamCreateOrConnectWithoutOrganizationInput";
import { TeamCreateWithoutOrganizationInput } from "../inputs/TeamCreateWithoutOrganizationInput";
import { TeamScalarWhereInput } from "../inputs/TeamScalarWhereInput";
import { TeamUpdateManyWithWhereWithoutOrganizationInput } from "../inputs/TeamUpdateManyWithWhereWithoutOrganizationInput";
import { TeamUpdateWithWhereUniqueWithoutOrganizationInput } from "../inputs/TeamUpdateWithWhereUniqueWithoutOrganizationInput";
import { TeamUpsertWithWhereUniqueWithoutOrganizationInput } from "../inputs/TeamUpsertWithWhereUniqueWithoutOrganizationInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateManyWithoutOrganizationNestedInput", {})
export class TeamUpdateManyWithoutOrganizationNestedInput {
  @TypeGraphQL.Field((_type) => [TeamCreateWithoutOrganizationInput], {
    nullable: true,
  })
  create?: TeamCreateWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamCreateOrConnectWithoutOrganizationInput], {
    nullable: true,
  })
  connectOrCreate?: TeamCreateOrConnectWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TeamUpsertWithWhereUniqueWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  upsert?: TeamUpsertWithWhereUniqueWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field((_type) => TeamCreateManyOrganizationInputEnvelope, {
    nullable: true,
  })
  createMany?: TeamCreateManyOrganizationInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereUniqueInput], {
    nullable: true,
  })
  set?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereUniqueInput], {
    nullable: true,
  })
  delete?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamWhereUniqueInput], {
    nullable: true,
  })
  connect?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TeamUpdateWithWhereUniqueWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  update?: TeamUpdateWithWhereUniqueWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TeamUpdateManyWithWhereWithoutOrganizationInput],
    {
      nullable: true,
    },
  )
  updateMany?: TeamUpdateManyWithWhereWithoutOrganizationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TeamScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: TeamScalarWhereInput[] | undefined;
}
