import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutUser_organizationsInput } from "../inputs/OrganizationCreateWithoutUser_organizationsInput";
import { OrganizationUpdateWithoutUser_organizationsInput } from "../inputs/OrganizationUpdateWithoutUser_organizationsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType("OrganizationUpsertWithoutUser_organizationsInput", {})
export class OrganizationUpsertWithoutUser_organizationsInput {
  @TypeGraphQL.Field(
    (_type) => OrganizationUpdateWithoutUser_organizationsInput,
    {
      nullable: false,
    },
  )
  update!: OrganizationUpdateWithoutUser_organizationsInput;

  @TypeGraphQL.Field(
    (_type) => OrganizationCreateWithoutUser_organizationsInput,
    {
      nullable: false,
    },
  )
  create!: OrganizationCreateWithoutUser_organizationsInput;

  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;
}
