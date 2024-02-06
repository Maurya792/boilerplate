"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictUserOrgsMiddleware = exports.restrictUserMiddleware = void 0;
const prisma_client_1 = require("prisma/prisma-client");
const client_1 = require("../../../../prisma/__generated__/client");
const restrictUserMiddleware = async ({ root, context }, next) => {
    var _a, _b, _c;
    const result = (await next());
    if (!((_a = context.user) === null || _a === void 0 ? void 0 : _a.userId)) {
        return [];
    }
    const connectedUsers = await client_1.prismaClient.user.findMany({
        where: {
            user_organizations: {
                some: {
                    OR: [
                        {
                            organization: {
                                user_organizations: {
                                    some: {
                                        user_id: (_b = context === null || context === void 0 ? void 0 : context.user) === null || _b === void 0 ? void 0 : _b.userId,
                                        role: {
                                            in: [prisma_client_1.user_role.admin, prisma_client_1.user_role.owner],
                                        },
                                    },
                                },
                            },
                        },
                        {
                            user_organization_teams: {
                                some: {
                                    team: {
                                        user_organization_teams: {
                                            some: {
                                                role: prisma_client_1.team_role.manager,
                                                user_organization: {
                                                    user_id: (_c = context === null || context === void 0 ? void 0 : context.user) === null || _c === void 0 ? void 0 : _c.userId,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        },
        select: { id: true },
    });
    const allowedUsers = connectedUsers.map((i) => i.id);
    return result.filter((i) => allowedUsers.includes(i.id));
};
exports.restrictUserMiddleware = restrictUserMiddleware;
const restrictUserOrgsMiddleware = async ({ root, context }, next) => {
    var _a;
    const result = (await next());
    const all_user_orgs = root.user_organizations;
    const connectedOrgs = await client_1.prismaClient.user_organization.findMany({
        where: {
            organization: {
                user_organizations: { some: { user_id: (_a = context.user) === null || _a === void 0 ? void 0 : _a.userId } },
            },
        },
        select: { id: true },
    });
    const allowedOrgs = connectedOrgs.map((i) => i.id);
    return result.filter((i) => allowedOrgs.includes(i.id));
};
exports.restrictUserOrgsMiddleware = restrictUserOrgsMiddleware;
//# sourceMappingURL=index.js.map