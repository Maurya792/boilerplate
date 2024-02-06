import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateWithoutTeamsInput } from "../inputs/OrganizationUpdateWithoutTeamsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType("OrganizationUpdateToOneWithWhereWithoutTeamsInput", {})
export class OrganizationUpdateToOneWithWhereWithoutTeamsInput {
  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => OrganizationUpdateWithoutTeamsInput, {
    nullable: false,
  })
  data!: OrganizationUpdateWithoutTeamsInput;
}
