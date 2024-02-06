import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Organization } from "../../../models/Organization";
import { Trace } from "../../../models/Trace";
import { User } from "../../../models/User";
import { User_organization } from "../../../models/User_organization";
import { User_organization_team } from "../../../models/User_organization_team";
import { User_organizationOrganizationArgs } from "./args/User_organizationOrganizationArgs";
import { User_organizationTracesArgs } from "./args/User_organizationTracesArgs";
import { User_organizationUserArgs } from "./args/User_organizationUserArgs";
import { User_organizationUser_organization_teamsArgs } from "./args/User_organizationUser_organization_teamsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User_organization)
export class User_organizationRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: true,
  })
  async user(
    @TypeGraphQL.Root() user_organization: User_organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organizationUserArgs,
  ): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization.findUniqueOrThrow({
        where: {
          id: user_organization.id,
        },
      })
      .user({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Trace], {
    nullable: false,
  })
  async traces(
    @TypeGraphQL.Root() user_organization: User_organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organizationTracesArgs,
  ): Promise<Trace[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization.findUniqueOrThrow({
        where: {
          id: user_organization.id,
        },
      })
      .traces({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Organization, {
    nullable: true,
  })
  async organization(
    @TypeGraphQL.Root() user_organization: User_organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organizationOrganizationArgs,
  ): Promise<Organization | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization.findUniqueOrThrow({
        where: {
          id: user_organization.id,
        },
      })
      .organization({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [User_organization_team], {
    nullable: false,
  })
  async user_organization_teams(
    @TypeGraphQL.Root() user_organization: User_organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: User_organizationUser_organization_teamsArgs,
  ): Promise<User_organization_team[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user_organization.findUniqueOrThrow({
        where: {
          id: user_organization.id,
        },
      })
      .user_organization_teams({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
