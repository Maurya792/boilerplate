import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssetOrderByWithRelationInput } from "../../../inputs/AssetOrderByWithRelationInput";
import { AssetWhereInput } from "../../../inputs/AssetWhereInput";
import { AssetWhereUniqueInput } from "../../../inputs/AssetWhereUniqueInput";
import { AssetScalarFieldEnum } from "../../../../enums/AssetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TraceImagesArgs {
  @TypeGraphQL.Field((_type) => AssetWhereInput, {
    nullable: true,
  })
  where?: AssetWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AssetOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AssetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => AssetWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AssetWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [AssetScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "url" | "date" | "trace_id"> | undefined;
}
