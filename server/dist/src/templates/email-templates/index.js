"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplates = void 0;
const fs_1 = require("fs");
const helper_1 = require("../../helper");
exports.emailTemplates = {
    verifyAccount: (targetUrl) => (0, fs_1.readFileSync)("src/templates/email-templates/verify-account.html")
        .toString()
        .replace(/{{targetUrl}}/g, targetUrl.toString()),
    resetPassword: (targetUrl) => (0, fs_1.readFileSync)("src/templates/email-templates/reset-password.html")
        .toString()
        .replace(/{{targetUrl}}/g, targetUrl.toString()),
    joinOrg: (targetUrl, orgName) => (0, helper_1.replace)((0, fs_1.readFileSync)("src/templates/email-templates/join-org.html").toString(), { "{{targetUrl}}": targetUrl.toString(), "{{orgName}}": orgName }),
};
//# sourceMappingURL=index.js.map