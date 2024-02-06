"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOrganizationActionsConfig = void 0;
const authChecker_1 = require("../../auth/authChecker");
const error_1 = require("../../middlewares/error");
exports.userOrganizationActionsConfig = {
    _all: [error_1.ErrorMiddleware, (0, authChecker_1.Authed)(["*"])],
};
//# sourceMappingURL=index.js.map