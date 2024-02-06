import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartCreateManyTraceInput } from "../inputs/PartCreateManyTraceInput";

@TypeGraphQL.InputType("PartCreateManyTraceInputEnvelope", {})
export class PartCreateManyTraceInputEnvelope {
  @TypeGraphQL.Field((_type) => [PartCreateManyTraceInput], {
    nullable: false,
  })
  data!: PartCreateManyTraceInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
