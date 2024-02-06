import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationAvgAggregate } from "../outputs/User_organizationAvgAggregate";
import { User_organizationCountAggregate } from "../outputs/User_organizationCountAggregate";
import { User_organizationMaxAggregate } from "../outputs/User_organizationMaxAggregate";
import { User_organizationMinAggregate } from "../outputs/User_organizationMinAggregate";
import { User_organizationSumAggregate } from "../outputs/User_organizationSumAggregate";
import { user_invitation_status } from "../../enums/user_invitation_status";
import { user_role } from "../../enums/user_role";

@TypeGraphQL.ObjectType("User_organizationGroupBy", {
  simpleResolvers: true,
})
export class User_organizationGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => user_role, {
    nullable: false,
  })
  role!: "admin" | "user" | "owner";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  organization_id!: number;

  @TypeGraphQL.Field((_type) => user_invitation_status, {
    nullable: true,
  })
  invitation_status!: "notConnected" | "invited" | "connected" | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  last_invited!: Date | null;

  @TypeGraphQL.Field((_type) => User_organizationCountAggregate, {
    nullable: true,
  })
  _count!: User_organizationCountAggregate | null;

  @TypeGraphQL.Field((_type) => User_organizationAvgAggregate, {
    nullable: true,
  })
  _avg!: User_organizationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => User_organizationSumAggregate, {
    nullable: true,
  })
  _sum!: User_organizationSumAggregate | null;

  @TypeGraphQL.Field((_type) => User_organizationMinAggregate, {
    nullable: true,
  })
  _min!: User_organizationMinAggregate | null;

  @TypeGraphQL.Field((_type) => User_organizationMaxAggregate, {
    nullable: true,
  })
  _max!: User_organizationMaxAggregate | null;
}
