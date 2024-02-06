import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateWithoutUser_organization_teamsInput } from "../inputs/User_organizationUpdateWithoutUser_organization_teamsInput";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput",
  {},
)
export class User_organizationUpdateToOneWithWhereWithoutUser_organization_teamsInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateWithoutUser_organization_teamsInput,
    {
      nullable: false,
    },
  )
  data!: User_organizationUpdateWithoutUser_organization_teamsInput;
}
