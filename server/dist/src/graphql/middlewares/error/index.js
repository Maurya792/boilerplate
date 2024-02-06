"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const prisma_client_1 = require("prisma/prisma-client");
const type_graphql_1 = require("type-graphql");
const ErrorMiddlewareFn = async ({ root, context }, next) => {
    var _a;
    try {
        const result = await next();
        return result;
    }
    catch (e) {
        if (e instanceof prisma_client_1.Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
                e.message = `<b>${(_a = e.meta) === null || _a === void 0 ? void 0 : _a.target}</b> must be unique.`;
            }
        }
        throw e;
    }
};
exports.ErrorMiddleware = (0, type_graphql_1.UseMiddleware)(ErrorMiddlewareFn);
//# sourceMappingURL=index.js.map