import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamAvgAggregate } from "../outputs/User_organization_teamAvgAggregate";
import { User_organization_teamCountAggregate } from "../outputs/User_organization_teamCountAggregate";
import { User_organization_teamMaxAggregate } from "../outputs/User_organization_teamMaxAggregate";
import { User_organization_teamMinAggregate } from "../outputs/User_organization_teamMinAggregate";
import { User_organization_teamSumAggregate } from "../outputs/User_organization_teamSumAggregate";
import { team_role } from "../../enums/team_role";

@TypeGraphQL.ObjectType("User_organization_teamGroupBy", {
  simpleResolvers: true,
})
export class User_organization_teamGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  team_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_organization_id!: number | null;

  @TypeGraphQL.Field((_type) => team_role, {
    nullable: false,
  })
  role!: "manager" | "member";

  @TypeGraphQL.Field((_type) => User_organization_teamCountAggregate, {
    nullable: true,
  })
  _count!: User_organization_teamCountAggregate | null;

  @TypeGraphQL.Field((_type) => User_organization_teamAvgAggregate, {
    nullable: true,
  })
  _avg!: User_organization_teamAvgAggregate | null;

  @TypeGraphQL.Field((_type) => User_organization_teamSumAggregate, {
    nullable: true,
  })
  _sum!: User_organization_teamSumAggregate | null;

  @TypeGraphQL.Field((_type) => User_organization_teamMinAggregate, {
    nullable: true,
  })
  _min!: User_organization_teamMinAggregate | null;

  @TypeGraphQL.Field((_type) => User_organization_teamMaxAggregate, {
    nullable: true,
  })
  _max!: User_organization_teamMaxAggregate | null;
}
