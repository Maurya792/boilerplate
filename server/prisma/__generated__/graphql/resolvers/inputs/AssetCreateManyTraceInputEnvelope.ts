import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetCreateManyTraceInput } from "../inputs/AssetCreateManyTraceInput";

@TypeGraphQL.InputType("AssetCreateManyTraceInputEnvelope", {})
export class AssetCreateManyTraceInputEnvelope {
  @TypeGraphQL.Field((_type) => [AssetCreateManyTraceInput], {
    nullable: false,
  })
  data!: AssetCreateManyTraceInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
