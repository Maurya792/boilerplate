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

// @InputType()
// class UsernamePassWordInput {
//   @Field()
//   name: string;
//   @Field()
//   password: string;
// }
@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}
@ObjectType()
export class BaseResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
@ObjectType()
class UserResponse extends BaseResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
class UpdateUserInput {
  @Field(() => String, { nullable: true })
  name?: string;
}

@Resolver()
export class UserResolver {
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

  @Authed([USER_ROLE.admin])
  @Query(() => UserResponse)
  async user(
    @Arg("username", { nullable: true }) username: string,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    if (!username) {
      return {
        errors: [{ field: "username", message: "Please provide a username!" }],
      };
    }
    const user = await em.findOne(User, { username }, { populate: ["trace"] });
    if (!user) {
      return {
        errors: [
          { field: "username", message: "Please provide a valid username!" },
        ],
      };
    }
    return { user };
  }

  @Authed([USER_ROLE.admin])
  @Mutation(() => UserResponse)
  async updateUser(
    @Arg("id") id: number,
    @Arg("updates") updates: UpdateUserInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    if (!id) {
      return {
        errors: [{ field: "id", message: "Please provide a user id!" }],
      };
    }
    const user = await em.findOne(User, { id }, { populate: ["trace"] });
    if (!user) {
      return {
        errors: [
          { field: "username", message: "Please provide a valid username!" },
        ],
      };
    }
    wrap(user).assign(updates);
    await em.persistAndFlush(user);
    return { user };
  }

  //   @Mutation(() => UserResponse)
  //   async register(
  //     @Arg("options") options: UsernamePassWordInput,
  //     @Ctx() { em }: MyContext
  //   ): Promise<UserResponse> {
  //     if (options.name.length <= 2) {
  //       return {
  //         errors: [
  //           {
  //             field: "name",
  //             message: "Userame must be atleast 3 characters long.",
  //           },
  //         ],
  //       };
  //     }
  //     if (options.password.length <= 6) {
  //       return {
  //         errors: [
  //           {
  //             field: "name",
  //             message: "Password must be atleast 6 characters long.",
  //           },
  //         ],
  //       };
  //     }
  //     const hashpassword = await bcrypt.hash(options.password, 5);
  //     const user = em.create(User, {
  //       username: options.name,
  //       password: hashpassword,
  //     });
  //     try {
  //       await em.persistAndFlush(user);
  //     } catch (err) {
  //       if (err.code == "23505") {
  //         return {
  //           errors: [
  //             {
  //               field: "name",
  //               message: "Username already taken.",
  //             },
  //           ],
  //         };
  //       }
  //     }
  //     return { user };
  //   }

  //   @Mutation(() => UserResponse)
  //   async login(
  //     @Arg("options") options: UsernamePassWordInput,
  //     @Ctx() { em }: MyContext
  //   ): Promise<UserResponse> {
  //     const user = await em.findOne(User, { username: options.name });
  //     if (!user) {
  //       return {
  //         errors: [
  //           {
  //             field: "username",
  //             message: "Could not find the user!",
  //           },
  //         ],
  //       };
  //     }
  //     const valid = await bcrypt.compare(user.password, options.password);
  //     if (!valid) {
  //       return {
  //         errors: [
  //           {
  //             field: "password",
  //             message: "Incorrect Password!",
  //           },
  //         ],
  //       };
  //     }

  //     return {
  //       user,
  //     };
  //   }

  @Authed([USER_ROLE.admin])
  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      const user = await em.findOne(User, { id });
      if (user) {
        await em.removeAndFlush(user);
        return true;
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
