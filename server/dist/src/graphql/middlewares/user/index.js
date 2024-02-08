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
    const allowedUsers = connectedUsers.map((i) => i.id);
    return result.filter((i) => allowedUsers.includes(i.id));
};
exports.restrictUserMiddleware = restrictUserMiddleware;

//# sourceMappingURL=index.js.map