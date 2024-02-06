export const __prod__ = process.env.NODE_ENV === "production";
export const ACCESS_TOKEN_SECRET = "my-jwt-secret-:)-|<";
export const VERIFY_ACCOUNT_TOKEN_SECRET = "my-jwt-secret-:)-|<";
export const INVITATION_TOKEN_SECRET = "my-jwt-secret-:)-|<";
export const RESET_PASSWORD_TOKEN_SECRET = "my-jwt-secret-:)-|<";
export const MAIL_SERVICE_USER = "crm@codagehabitation.com";
export const MAIL_SERVICE_PASSWORD = "@$bZ)5~F=T1(";
export const COOKIE_NAME = process.env.COOKIE_NAME ?? "_tt_id";
export const DEFAULT_AUTH_REDIRECT_URL = 'http://localhost:3000'
export const API_HOST =
  process.env.API_HOST ?? __prod__
    ? "https://codage-time-tracker.devserapp.com/"
    : "http://localhost:4000/";
