import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateOrConnectWithoutTracesInput } from "../inputs/User_organizationCreateOrConnectWithoutTracesInput";
import { User_organizationCreateWithoutTracesInput } from "../inputs/User_organizationCreateWithoutTracesInput";
import { User_organizationUpdateToOneWithWhereWithoutTracesInput } from "../inputs/User_organizationUpdateToOneWithWhereWithoutTracesInput";
import { User_organizationUpsertWithoutTracesInput } from "../inputs/User_organizationUpsertWithoutTracesInput";
import { User_organizationWhereInput } from "../inputs/User_organizationWhereInput";
import { User_organizationWhereUniqueInput } from "../inputs/User_organizationWhereUniqueInput";

@TypeGraphQL.InputType("User_organizationUpdateOneWithoutTracesNestedInput", {})
export class User_organizationUpdateOneWithoutTracesNestedInput {
  @TypeGraphQL.Field((_type) => User_organizationCreateWithoutTracesInput, {
    nullable: true,
  })
  create?: User_organizationCreateWithoutTracesInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationCreateOrConnectWithoutTracesInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | User_organizationCreateOrConnectWithoutTracesInput
    | undefined;

  @TypeGraphQL.Field((_type) => User_organizationUpsertWithoutTracesInput, {
    nullable: true,
  })
  upsert?: User_organizationUpsertWithoutTracesInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  disconnect?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  delete?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: true,
  })
  connect?: User_organizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => User_organizationUpdateToOneWithWhereWithoutTracesInput,
    {
      nullable: true,
    },
  )
  update?: User_organizationUpdateToOneWithWhereWithoutTracesInput | undefined;
}
