import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateManyOrganizationInput } from "../inputs/TeamCreateManyOrganizationInput";

@TypeGraphQL.InputType("TeamCreateManyOrganizationInputEnvelope", {})
export class TeamCreateManyOrganizationInputEnvelope {
  @TypeGraphQL.Field((_type) => [TeamCreateManyOrganizationInput], {
    nullable: false,
  })
  data!: TeamCreateManyOrganizationInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
