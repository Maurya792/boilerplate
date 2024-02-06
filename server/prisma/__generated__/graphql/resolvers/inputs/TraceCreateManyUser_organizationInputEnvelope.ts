import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCreateManyUser_organizationInput } from "../inputs/TraceCreateManyUser_organizationInput";

@TypeGraphQL.InputType("TraceCreateManyUser_organizationInputEnvelope", {})
export class TraceCreateManyUser_organizationInputEnvelope {
  @TypeGraphQL.Field((_type) => [TraceCreateManyUser_organizationInput], {
    nullable: false,
  })
  data!: TraceCreateManyUser_organizationInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
