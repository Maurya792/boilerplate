"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOrgTeamActionsConfig = void 0;
const client_1 = require("@prisma/client");
const authChecker_1 = require("../../auth/authChecker");
const middlewares_1 = require("../../middlewares");
exports.userOrgTeamActionsConfig = {
    _all: [middlewares_1.errorMiddlewares.ErrorMiddleware, (0, authChecker_1.Authed)([client_1.user_role.admin])],
};
//# sourceMappingURL=index.js.map