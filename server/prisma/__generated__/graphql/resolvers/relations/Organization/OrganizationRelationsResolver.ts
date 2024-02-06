import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Organization } from "../../../models/Organization";
import { Team } from "../../../models/Team";
import { User_organization } from "../../../models/User_organization";
import { OrganizationTeamsArgs } from "./args/OrganizationTeamsArgs";
import { OrganizationUser_organizationsArgs } from "./args/OrganizationUser_organizationsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Organization)
export class OrganizationRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [User_organization], {
    nullable: false,
  })
  async user_organizations(
    @TypeGraphQL.Root() organization: Organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: OrganizationUser_organizationsArgs,
  ): Promise<User_organization[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .organization.findUniqueOrThrow({
        where: {
          id: organization.id,
        },
      })
      .user_organizations({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Team], {
    nullable: false,
  })
  async teams(
    @TypeGraphQL.Root() organization: Organization,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: OrganizationTeamsArgs,
  ): Promise<Team[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .organization.findUniqueOrThrow({
        where: {
          id: organization.id,
        },
      })
      .teams({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
