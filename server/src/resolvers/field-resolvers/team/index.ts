import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  ObjectType,
  Resolver,
  Root,
  registerEnumType,
} from "type-graphql";
import {
  Organization,
  Team,
  User,
} from "../../../../prisma/__generated__/graphql";
import { MyContext } from "../../../types";

@Resolver((of) => Team)
export class ExTeamResolver {
  @FieldResolver((type) => [User!], { nullable: true })
  async users(
    @Root() team: Team,
    @Ctx() { prisma }: MyContext
  ): Promise<User[] | undefined> {
    const users = await prisma.user.findMany({
      where: {
        user_organizations: {
          some: {
            user_organization_teams: { some: { team_id: { equals: team.id } } },
          },
        },
      },
      include: {
        user_organizations: {
          where: {
            user_organization_teams: {
              some: { team_id: { equals: team.id } },
            },
          },
        },
      },
    });
    return users;
  }
}
