import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationAvgAggregate } from "../outputs/OrganizationAvgAggregate";
import { OrganizationCountAggregate } from "../outputs/OrganizationCountAggregate";
import { OrganizationMaxAggregate } from "../outputs/OrganizationMaxAggregate";
import { OrganizationMinAggregate } from "../outputs/OrganizationMinAggregate";
import { OrganizationSumAggregate } from "../outputs/OrganizationSumAggregate";

@TypeGraphQL.ObjectType("OrganizationGroupBy", {
  simpleResolvers: true,
})
export class OrganizationGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field((_type) => OrganizationCountAggregate, {
    nullable: true,
  })
  _count!: OrganizationCountAggregate | null;

  @TypeGraphQL.Field((_type) => OrganizationAvgAggregate, {
    nullable: true,
  })
  _avg!: OrganizationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => OrganizationSumAggregate, {
    nullable: true,
  })
  _sum!: OrganizationSumAggregate | null;

  @TypeGraphQL.Field((_type) => OrganizationMinAggregate, {
    nullable: true,
  })
  _min!: OrganizationMinAggregate | null;

  @TypeGraphQL.Field((_type) => OrganizationMaxAggregate, {
    nullable: true,
  })
  _max!: OrganizationMaxAggregate | null;
}
