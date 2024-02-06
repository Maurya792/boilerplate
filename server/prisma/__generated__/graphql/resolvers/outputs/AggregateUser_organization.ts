import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationAvgAggregate } from "../outputs/User_organizationAvgAggregate";
import { User_organizationCountAggregate } from "../outputs/User_organizationCountAggregate";
import { User_organizationMaxAggregate } from "../outputs/User_organizationMaxAggregate";
import { User_organizationMinAggregate } from "../outputs/User_organizationMinAggregate";
import { User_organizationSumAggregate } from "../outputs/User_organizationSumAggregate";

@TypeGraphQL.ObjectType("AggregateUser_organization", {
  simpleResolvers: true,
})
export class AggregateUser_organization {
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
