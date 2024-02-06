import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutTeamsInput } from "../inputs/OrganizationCreateOrConnectWithoutTeamsInput";
import { OrganizationCreateWithoutTeamsInput } from "../inputs/OrganizationCreateWithoutTeamsInput";
import { OrganizationUpdateToOneWithWhereWithoutTeamsInput } from "../inputs/OrganizationUpdateToOneWithWhereWithoutTeamsInput";
import { OrganizationUpsertWithoutTeamsInput } from "../inputs/OrganizationUpsertWithoutTeamsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType("OrganizationUpdateOneWithoutTeamsNestedInput", {})
export class OrganizationUpdateOneWithoutTeamsNestedInput {
  @TypeGraphQL.Field((_type) => OrganizationCreateWithoutTeamsInput, {
    nullable: true,
  })
  create?: OrganizationCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationCreateOrConnectWithoutTeamsInput, {
    nullable: true,
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationUpsertWithoutTeamsInput, {
    nullable: true,
  })
  upsert?: OrganizationUpsertWithoutTeamsInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  disconnect?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  delete?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: OrganizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationUpdateToOneWithWhereWithoutTeamsInput,
    {
      nullable: true,
    },
  )
  update?: OrganizationUpdateToOneWithWhereWithoutTeamsInput | undefined;
}
