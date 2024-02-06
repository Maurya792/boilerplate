import { Resolver, Query, Ctx, Mutation, ObjectType, Field } from "type-graphql";
import { MyContext } from "../types";
import { User } from "../../prisma/__generated__/graphql";
import { ResponseError } from "./auth/types";
@ObjectType()
class RegisterResponse extends ResponseError {
  @Field(() => Boolean, { nullable: true })
  isSuccess?: boolean;
}
@Resolver()
export class CustomUserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, user }: MyContext): Promise<User | null> {
    if (!user) {
      return null;
    }
    const userFound = await prisma.user.findUnique({
      where: { id: user.userId },
    });

    return userFound;
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Ctx() { prisma }: MyContext
  ): Promise<RegisterResponse> {
    
        return {
          errors: [
            {
              field: "null",
              message:
                 "Server error.",
            },
          ],
        };
  }
}