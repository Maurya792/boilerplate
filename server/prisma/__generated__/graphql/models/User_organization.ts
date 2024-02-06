import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Organization } from "../models/Organization";
import { Trace } from "../models/Trace";
import { User } from "../models/User";
import { User_organization_team } from "../models/User_organization_team";
import { user_invitation_status } from "../enums/user_invitation_status";
import { user_role } from "../enums/user_role";
import { User_organizationCount } from "../resolvers/outputs/User_organizationCount";

@TypeGraphQL.ObjectType("User_organization", {
  simpleResolvers: true,
})
export class User_organization {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => user_role, {
    nullable: false,
  })
  role!: "admin" | "user" | "owner";

  user?: User | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  traces?: Trace[];

  organization?: Organization | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  invitation_status?: "notConnected" | "invited" | "connected" | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  last_invited?: Date | null;

  user_organization_teams?: User_organization_team[];

  @TypeGraphQL.Field((_type) => User_organizationCount, {
    nullable: true,
  })
  _count?: User_organizationCount | null;
}
