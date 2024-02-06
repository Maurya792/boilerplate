import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateManyTeamInput } from "../inputs/User_organization_teamCreateManyTeamInput";

@TypeGraphQL.InputType("User_organization_teamCreateManyTeamInputEnvelope", {})
export class User_organization_teamCreateManyTeamInputEnvelope {
  @TypeGraphQL.Field((_type) => [User_organization_teamCreateManyTeamInput], {
    nullable: false,
  })
  data!: User_organization_teamCreateManyTeamInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
