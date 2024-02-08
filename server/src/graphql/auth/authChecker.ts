import { AuthChecker } from "type-graphql";
// import { User } from "../../../entities/User";
import { MyContext } from "../../types";
import { TokenService } from "../../services/token-service";
export { Authorized as Authed } from "type-graphql";

// create auth checker function
export const authChecker: AuthChecker<MyContext> = async (
  { context: { prisma, token } },
  roles
) => {
  // // console.log(token)
  return true;
  const userFromToken = await TokenService.verifyToken(
    token ?? "",
    "accessToken"
  );

  const user = userFromToken
    ? await prisma.user.findUnique({
        where: { id: userFromToken.userId },
      })
    : null;
  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return !!user;
  }
  // there are some roles defined now

  if (roles.includes("*")) {
    return !!user;
  }
  if (!user) {
    // and if no user, restrict access
    return false;
  }
};
