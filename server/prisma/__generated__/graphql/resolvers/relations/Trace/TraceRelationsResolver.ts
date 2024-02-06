import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Asset } from "../../../models/Asset";
import { Log } from "../../../models/Log";
import { Part } from "../../../models/Part";
import { Trace } from "../../../models/Trace";
import { User_organization } from "../../../models/User_organization";
import { TraceImagesArgs } from "./args/TraceImagesArgs";
import { TraceLogsArgs } from "./args/TraceLogsArgs";
import { TracePartsArgs } from "./args/TracePartsArgs";
import { TraceUser_organizationArgs } from "./args/TraceUser_organizationArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Trace)
export class TraceRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Asset], {
    nullable: false,
  })
  async images(
    @TypeGraphQL.Root() trace: Trace,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TraceImagesArgs,
  ): Promise<Asset[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .trace.findUniqueOrThrow({
        where: {
          id: trace.id,
        },
      })
      .images({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Log], {
    nullable: false,
  })
  async logs(
    @TypeGraphQL.Root() trace: Trace,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TraceLogsArgs,
  ): Promise<Log[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .trace.findUniqueOrThrow({
        where: {
          id: trace.id,
        },
      })
      .logs({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Part], {
    nullable: false,
  })
  async parts(
    @TypeGraphQL.Root() trace: Trace,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TracePartsArgs,
  ): Promise<Part[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .trace.findUniqueOrThrow({
        where: {
          id: trace.id,
        },
      })
      .parts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User_organization, {
    nullable: true,
  })
  async user_organization(
    @TypeGraphQL.Root() trace: Trace,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TraceUser_organizationArgs,
  ): Promise<User_organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .trace.findUniqueOrThrow({
        where: {
          id: trace.id,
        },
      })
      .user_organization({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
