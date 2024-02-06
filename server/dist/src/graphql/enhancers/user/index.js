"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRelationsConfig = exports.userActionsConfig = void 0;
const authChecker_1 = require("../../auth/authChecker");
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../middlewares");
exports.userActionsConfig = {
    _all: [middlewares_1.errorMiddlewares.ErrorMiddleware, (0, authChecker_1.Authed)(["*"])],
    users: [(0, type_graphql_1.UseMiddleware)(middlewares_1.userMiddlewares.restrictUserMiddleware)],
};
exports.userRelationsConfig = {
    user_organizations: [(0, type_graphql_1.UseMiddleware)(middlewares_1.userMiddlewares.restrictUserOrgsMiddleware)]
};
//# sourceMappingURL=index.js.map