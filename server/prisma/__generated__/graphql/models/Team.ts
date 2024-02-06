import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Organization } from "../models/Organization";
import { User_organization_team } from "../models/User_organization_team";
import { TeamCount } from "../resolvers/outputs/TeamCount";

@TypeGraphQL.ObjectType("Team", {
  simpleResolvers: true,
})
export class Team {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  organization?: Organization | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  user_organization_teams?: User_organization_team[];

  @TypeGraphQL.Field((_type) => TeamCount, {
    nullable: true,
  })
  _count?: TeamCount | null;
}
