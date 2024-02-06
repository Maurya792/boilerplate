import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TraceCreateManyInput } from "../../../inputs/TraceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTraceArgs {
  @TypeGraphQL.Field((_type) => [TraceCreateManyInput], {
    nullable: false,
  })
  data!: TraceCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
