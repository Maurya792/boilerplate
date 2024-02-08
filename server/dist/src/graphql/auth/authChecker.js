"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = exports.Authed = void 0;
const token_service_1 = require("../../services/token-service");
var type_graphql_1 = require("type-graphql");
Object.defineProperty(exports, "Authed", { enumerable: true, get: function () { return type_graphql_1.Authorized; } });
const authChecker = async ({ context: { prisma, token } }, roles) => {
    return true;
    const userFromToken = await token_service_1.TokenService.verifyToken(token !== null && token !== void 0 ? token : "", "accessToken");
    const user = userFromToken
        ? await prisma.user.findUnique({
            where: { id: userFromToken.userId },
        })
        : null;
    if (roles.length === 0) {
        return !!user;
    }
    if (roles.includes("*")) {
        return !!user;
    }
    if (!user) {
        return false;
    }
};
exports.authChecker = authChecker;
//# sourceMappingURL=authChecker.js.map