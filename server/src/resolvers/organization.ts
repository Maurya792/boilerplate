import { wrap } from "@mikro-orm/core";
import { USER_ROLE, User } from "../entities/User";
import { Authed } from "../graphql/auth/authChecker";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  // InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";


@Resolver()
export class OrgResolver {
  @Authed([USER_ROLE.admin])
  @Query(() => [User])
  async users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(
      User,
      {},
      {
        orderBy: { createdAt: "ASC" },
        populate: ["trace"],
      }
    );
  }

}
