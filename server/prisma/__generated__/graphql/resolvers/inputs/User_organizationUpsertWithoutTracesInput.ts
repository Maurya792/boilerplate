import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateWithoutTracesInput } from "../inputs/User_organizationCreateWithoutTracesInput";
import { User_organizationUpdateWithoutTracesInput } from "../inputs/User_organizationUpdateWithoutTracesInput";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";

@TypeGraphQL.InputType("User_organizationUpsertWithoutTracesInput", {})
export class User_organizationUpsertWithoutTracesInput {
  @TypeGraphQL.Field((_type) => User_organizationUpdateWithoutTracesInput, {
    nullable: false,
  })
  update!: User_organizationUpdateWithoutTracesInput;

  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutTracesInput, {
    nullable: false,
  })
  create!: User_organizationCreateWithoutTracesInput;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;
}
