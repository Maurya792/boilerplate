import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TraceCountImagesArgs } from "./args/TraceCountImagesArgs";
import { TraceCountLogsArgs } from "./args/TraceCountLogsArgs";
import { TraceCountPartsArgs } from "./args/TraceCountPartsArgs";

@TypeGraphQL.ObjectType("TraceCount", {
  simpleResolvers: true,
})
export class TraceCount {
  images!: number;
  logs!: number;
  parts!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "images",
    nullable: false,
  })
  getImages(
    @TypeGraphQL.Root() root: TraceCount,
    @TypeGraphQL.Args() args: TraceCountImagesArgs,
  ): number {
    return root.images;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "logs",
    nullable: false,
  })
  getLogs(
    @TypeGraphQL.Root() root: TraceCount,
    @TypeGraphQL.Args() args: TraceCountLogsArgs,
  ): number {
    return root.logs;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "parts",
    nullable: false,
  })
  getParts(
    @TypeGraphQL.Root() root: TraceCount,
    @TypeGraphQL.Args() args: TraceCountPartsArgs,
  ): number {
    return root.parts;
  }
}
