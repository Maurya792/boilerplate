import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationUpdateWithoutTracesInput } from "../inputs/User_organizationUpdateWithoutTracesInput";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";

@TypeGraphQL.InputType(
  "User_organizationUpdateToOneWithWhereWithoutTracesInput",
  {},
)
export class User_organizationUpdateToOneWithWhereWithoutTracesInput {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationUpdateWithoutTracesInput, {
    nullable: false,
  })
  data!: User_organizationUpdateWithoutTracesInput;
}
