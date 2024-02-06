import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssetAvgAggregate } from "../outputs/AssetAvgAggregate";
import { AssetCountAggregate } from "../outputs/AssetCountAggregate";
import { AssetMaxAggregate } from "../outputs/AssetMaxAggregate";
import { AssetMinAggregate } from "../outputs/AssetMinAggregate";
import { AssetSumAggregate } from "../outputs/AssetSumAggregate";

@TypeGraphQL.ObjectType("AggregateAsset", {
  simpleResolvers: true,
})
export class AggregateAsset {
  @TypeGraphQL.Field((_type) => AssetCountAggregate, {
    nullable: true,
  })
  _count!: AssetCountAggregate | null;

  @TypeGraphQL.Field((_type) => AssetAvgAggregate, {
    nullable: true,
  })
  _avg!: AssetAvgAggregate | null;

  @TypeGraphQL.Field((_type) => AssetSumAggregate, {
    nullable: true,
  })
  _sum!: AssetSumAggregate | null;

  @TypeGraphQL.Field((_type) => AssetMinAggregate, {
    nullable: true,
  })
  _min!: AssetMinAggregate | null;

  @TypeGraphQL.Field((_type) => AssetMaxAggregate, {
    nullable: true,
  })
  _max!: AssetMaxAggregate | null;
}
