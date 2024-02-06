import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Team } from "../models/Team";
import { User_organization } from "../models/User_organization";
import { OrganizationCount } from "../resolvers/outputs/OrganizationCount";

@TypeGraphQL.ObjectType("Organization", {
  simpleResolvers: true,
})
export class Organization {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  user_organizations?: User_organization[];

  teams?: Team[];

  @TypeGraphQL.Field((_type) => OrganizationCount, {
    nullable: true,
  })
  _count?: OrganizationCount | null;
}
