"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../../constants");
const tokenSecrets = {
    accessToken: constants_1.ACCESS_TOKEN_SECRET,
    resetPasswordToken: constants_1.RESET_PASSWORD_TOKEN_SECRET,
    verifyAccountToken: constants_1.VERIFY_ACCOUNT_TOKEN_SECRET,
    userOrgInvitationToken: constants_1.INVITATION_TOKEN_SECRET,
};
class TokenService {
    static generateAccessToken(values) {
        return jsonwebtoken_1.default.sign(values, constants_1.ACCESS_TOKEN_SECRET, {
            expiresIn: "1d",
        });
    }
    static async verifyToken(token, type) {
        return new Promise((res) => {
            jsonwebtoken_1.default.verify(token, tokenSecrets[type], (error, data) => {
                if (error) {
                    return res(null);
                }
                return res(data);
            });
        });
    }
    static generateResetPasswordToken(values) {
        return jsonwebtoken_1.default.sign(values, tokenSecrets.resetPasswordToken, {
            expiresIn: "15m",
        });
    }
    static generateVerifyAccountToken(values) {
        return jsonwebtoken_1.default.sign(values, tokenSecrets.verifyAccountToken, {
            expiresIn: "15m",
        });
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=index.js.map