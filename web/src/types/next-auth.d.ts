import { UserFragment as ApiUser} from "@/api/__generated__/graphql/graphql";
import NextAuth, { DefaultUser, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    accessToken: string;
    user : User
  }
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends Omit<ApiUser, "id">, DefaultUser {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      accessToken?: string
      user : User
    }
  }