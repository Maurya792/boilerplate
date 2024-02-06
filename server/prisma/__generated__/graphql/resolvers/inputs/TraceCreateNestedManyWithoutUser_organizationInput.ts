import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateManyUser_organizationInputEnvelope } from "../inputs/TraceCreateManyUser_organizationInputEnvelope";
import { TraceCreateOrConnectWithoutUser_organizationInput } from "../inputs/TraceCreateOrConnectWithoutUser_organizationInput";
import { TraceCreateWithoutUser_organizationInput } from "../inputs/TraceCreateWithoutUser_organizationInput";
import { TraceWhereUniqueInput } from "../inputs/TraceWhereUniqueInput";

@TypeGraphQL.InputType("TraceCreateNestedManyWithoutUser_organizationInput", {})
export class TraceCreateNestedManyWithoutUser_organizationInput {
  @TypeGraphQL.Field((_type) => [TraceCreateWithoutUser_organizationInput], {
    nullable: true,
  })
  create?: TraceCreateWithoutUser_organizationInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [TraceCreateOrConnectWithoutUser_organizationInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | TraceCreateOrConnectWithoutUser_organizationInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => TraceCreateManyUser_organizationInputEnvelope, {
    nullable: true,
  })
  createMany?: TraceCreateManyUser_organizationInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [TraceWhereUniqueInput], {
    nullable: true,
  })
  connect?: TraceWhereUniqueInput[] | undefined;
}
