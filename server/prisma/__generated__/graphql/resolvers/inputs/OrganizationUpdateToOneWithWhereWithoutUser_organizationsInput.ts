import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateWithoutUser_organizationsInput } from "../inputs/OrganizationUpdateWithoutUser_organizationsInput";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType(
  "OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput",
  {},
)
export class OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput {
  @TypeGraphQL.Field((_type) => OrganizationWhereInput, {
    nullable: true,
  })
  where?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => OrganizationUpdateWithoutUser_organizationsInput,
    {
      nullable: false,
    },
  )
  data!: OrganizationUpdateWithoutUser_organizationsInput;
}
