import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  INVITATION_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_SECRET,
  VERIFY_ACCOUNT_TOKEN_SECRET,
} from "../../constants";
import { user } from "@prisma/client";
const tokenSecrets = {
  accessToken: ACCESS_TOKEN_SECRET,
  resetPasswordToken: RESET_PASSWORD_TOKEN_SECRET,
  verifyAccountToken: VERIFY_ACCOUNT_TOKEN_SECRET,
  userOrgInvitationToken: INVITATION_TOKEN_SECRET,
};
export type AccessTokenData = Pick<user, "name" | "username"> & {
  userId: number;
};

type UserOrgInvitationTokenData = Pick<
  AccessTokenData,
  "username" | "userId"
> & { userOrgId: number; orgName: string };
export type DataMapping = {
  accessToken: AccessTokenData;
  resetPasswordToken: Pick<AccessTokenData, "username" | "userId">;
  verifyAccountToken: Pick<AccessTokenData, "username" | "userId">;
};
export class TokenService {
  static generateAccessToken(values: DataMapping["accessToken"]) {
    return jwt.sign(values, ACCESS_TOKEN_SECRET, {
      expiresIn: "1d", // 1 day
    });
  }

  static async verifyToken<T extends keyof typeof tokenSecrets>(
    token: string,
    type: T
  ) {
    return new Promise<jwt.JwtPayload | null>((res) => {
      jwt.verify(token, tokenSecrets[type], (error, data) => {
        if (error) {
          return res(null);
        }
        return res(data as jwt.JwtPayload);
      });
    });
  }

  static generateResetPasswordToken(values: DataMapping["resetPasswordToken"]) {
    return jwt.sign(values, tokenSecrets.resetPasswordToken, {
      expiresIn: "15m", // 15 mins
    });
  }

  static generateVerifyAccountToken(values: DataMapping["verifyAccountToken"]) {
    return jwt.sign(values, tokenSecrets.verifyAccountToken, {
      expiresIn: "15m", // 15 mins
    });
  }
}
