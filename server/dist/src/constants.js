"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_HOST = exports.DEFAULT_AUTH_REDIRECT_URL = exports.COOKIE_NAME = exports.MAIL_SERVICE_PASSWORD = exports.MAIL_SERVICE_USER = exports.RESET_PASSWORD_TOKEN_SECRET = exports.INVITATION_TOKEN_SECRET = exports.VERIFY_ACCOUNT_TOKEN_SECRET = exports.ACCESS_TOKEN_SECRET = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === "production";
exports.ACCESS_TOKEN_SECRET = "my-jwt-secret-:)-|<";
exports.VERIFY_ACCOUNT_TOKEN_SECRET = "my-jwt-secret-:)-|<";
exports.INVITATION_TOKEN_SECRET = "my-jwt-secret-:)-|<";
exports.RESET_PASSWORD_TOKEN_SECRET = "my-jwt-secret-:)-|<";
exports.MAIL_SERVICE_USER = "crm@codagehabitation.com";
exports.MAIL_SERVICE_PASSWORD = "@$bZ)5~F=T1(";
exports.COOKIE_NAME = (_a = process.env.COOKIE_NAME) !== null && _a !== void 0 ? _a : "_tt_id";
exports.DEFAULT_AUTH_REDIRECT_URL = 'http://localhost:3000';
exports.API_HOST = ((_b = process.env.API_HOST) !== null && _b !== void 0 ? _b : exports.__prod__)
    ? "https://codage-time-tracker.devserapp.com/"
    : "http://localhost:4000/";
//# sourceMappingURL=constants.js.map