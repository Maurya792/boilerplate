"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = exports.Authed = void 0;
const client_1 = require("@prisma/client");
const token_service_1 = require("../../services/token-service");
var type_graphql_1 = require("type-graphql");
Object.defineProperty(exports, "Authed", { enumerable: true, get: function () { return type_graphql_1.Authorized; } });
const authChecker = async ({ context: { prisma, token } }, roles) => {
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
    const allowed_roles = roles
        .map((i) => client_1.user_role[i])
        .filter((i) => !!i);
    const count = await prisma.organization.count({
        where: {
            user_organizations: {
                some: {
                    user_id: user.id,
                    OR: [
                        {
                            role: { in: [client_1.user_role.owner, ...allowed_roles] },
                        },
                        {
                            user_organization_teams: {
                                some: {
                                    role: client_1.team_role.manager,
                                },
                            },
                        },
                    ],
                },
            },
        },
    });
    return count > 0;
};
exports.authChecker = authChecker;
//# sourceMappingURL=authChecker.js.map