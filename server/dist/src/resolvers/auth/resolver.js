"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const type_graphql_1 = require("type-graphql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const constants_1 = require("../../constants");
const token_service_1 = require("../../services/token-service");
const mail_service_1 = require("../../services/mail-service");
const graphql_1 = require("../../../prisma/__generated__/graphql");
const prisma_client_1 = require("prisma/prisma-client");
const templates_1 = require("../../templates");
const types_1 = require("./types");
let RegisterInput = class RegisterInput extends types_1.UsernamePassWordInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RegisterInput.prototype, "redirectUrl", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RegisterInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [type_graphql_1.Int], { nullable: true }),
    __metadata("design:type", Array)
], RegisterInput.prototype, "preJoinedOrgs", void 0);
RegisterInput = __decorate([
    (0, type_graphql_1.InputType)()
], RegisterInput);
let LoginInput = class LoginInput extends types_1.UsernamePassWordInput {
};
LoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], LoginInput);
let LoginRes = class LoginRes extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoginRes.prototype, "accessToken", void 0);
LoginRes = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginRes);
let VerifyAccountInput = class VerifyAccountInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyAccountInput.prototype, "token", void 0);
VerifyAccountInput = __decorate([
    (0, type_graphql_1.InputType)()
], VerifyAccountInput);
let VerifyAccountRes = class VerifyAccountRes extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], VerifyAccountRes.prototype, "isSuccess", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VerifyAccountRes.prototype, "accessToken", void 0);
VerifyAccountRes = __decorate([
    (0, type_graphql_1.ObjectType)()
], VerifyAccountRes);
let ForgotPasswordInput = class ForgotPasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ForgotPasswordInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], ForgotPasswordInput.prototype, "redirectUrl", void 0);
ForgotPasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], ForgotPasswordInput);
let ForgotPasswordRes = class ForgotPasswordRes extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ForgotPasswordRes.prototype, "isSuccess", void 0);
ForgotPasswordRes = __decorate([
    (0, type_graphql_1.ObjectType)()
], ForgotPasswordRes);
let ResetPasswordInput = class ResetPasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordInput.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordInput.prototype, "password", void 0);
ResetPasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], ResetPasswordInput);
let ResetPasswordRes = class ResetPasswordRes extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResetPasswordRes.prototype, "accessToken", void 0);
ResetPasswordRes = __decorate([
    (0, type_graphql_1.ObjectType)()
], ResetPasswordRes);
let RegisterResponse = class RegisterResponse extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], RegisterResponse.prototype, "isSuccess", void 0);
RegisterResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], RegisterResponse);
let AuthResolver = class AuthResolver {
    async me({ prisma, user }) {
        if (!user) {
            return null;
        }
        const userFound = await prisma.user.findUnique({
            where: { id: user.userId },
        });
        return userFound;
    }
    async register(data, { prisma }) {
        var _a;
        if ((data === null || data === void 0 ? void 0 : data.username.length) <= 2) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "Userame must be atleast 3 characters long.",
                    },
                ],
            };
        }
        if (!data.password || data.password.length <= 2) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Password must be atleast 3 characters long.",
                    },
                ],
            };
        }
        const userFound = await prisma.user.findUnique({
            where: {
                username: data.username,
            },
        });
        if (userFound && userFound.status === prisma_client_1.account_status.active) {
            return {
                errors: [{ field: "username", message: "User already exists." }],
            };
        }
        else {
            const hashedPassword = await bcryptjs_1.default.hash(data.password, 5);
            const userCreateRequest = {
                username: data.username,
                password: hashedPassword,
                name: data.name,
            };
            const userUpdateRequest = {
                username: data.username,
                password: hashedPassword,
                name: data.name,
            };
            const user = await prisma.user.upsert({
                where: { username: data.username },
                create: userCreateRequest,
                update: userUpdateRequest,
            });
            const verifyToken = token_service_1.TokenService.generateVerifyAccountToken({
                userId: user.id,
                username: user.username,
            });
            const mailService = new mail_service_1.MailService();
            const targetUrl = new URL((_a = data.redirectUrl) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_AUTH_REDIRECT_URL);
            targetUrl.searchParams.append("token", verifyToken);
            try {
                const isSuccess = await mailService.send({
                    to: data.username,
                    subject: "Activate Account",
                    html: templates_1.templates.verifyAccount(targetUrl),
                });
                if (isSuccess) {
                    return {
                        isSuccess: true,
                    };
                }
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Couldn't sent activation mail to provided email. Please try again later.",
                        },
                    ],
                };
            }
            catch (err) {
                return {
                    errors: [
                        {
                            field: "null",
                            message: typeof err.message == "string" ? err.message : "Server error.",
                        },
                    ],
                };
            }
        }
    }
    async verifyAccount(data, { prisma }) {
        if (data.token) {
            const tokenData = await token_service_1.TokenService.verifyToken(data.token, "verifyAccountToken");
            const userFound = await prisma.user.findUnique({
                where: { id: Number(tokenData === null || tokenData === void 0 ? void 0 : tokenData.userId) },
            });
            if (data && userFound) {
                const user = await prisma.user.update({
                    where: { id: userFound.id },
                    data: { status: prisma_client_1.account_status.active },
                });
                const accessToken = token_service_1.TokenService.generateAccessToken({
                    userId: user.id,
                    username: user.username,
                    name: user.name,
                });
                return {
                    isSuccess: true,
                    accessToken,
                };
            }
        }
        return {
            errors: [{ field: "token", message: "Invalid token!" }],
        };
    }
    async login(data, { prisma }) {
        const userFound = await prisma.user.findUnique({
            where: {
                username: data.username,
                status: prisma_client_1.account_status.active,
            },
        });
        if (userFound) {
            const valid = await bcryptjs_1.default.compare(data.password, userFound.password);
            if (valid) {
                const accessToken = token_service_1.TokenService.generateAccessToken({
                    username: userFound.username,
                    name: userFound.name,
                    userId: userFound.id,
                });
                return {
                    accessToken,
                };
            }
            return {
                errors: [{ field: "password", message: "Invalid password!" }],
            };
        }
        return {
            errors: [{ field: "username", message: "Couldn't find that user!" }],
        };
    }
    async forgotPassword(data, { prisma }) {
        const userFound = await prisma.user.findUnique({
            where: {
                username: data.username,
            },
        });
        if (userFound) {
            const resetPasswordToken = token_service_1.TokenService.generateResetPasswordToken({
                username: userFound.username,
                userId: userFound.id,
            });
            const targetUrl = new URL(data.redirectUrl);
            targetUrl.searchParams.append("token", resetPasswordToken);
            const mailService = new mail_service_1.MailService();
            const isSuccess = await mailService.send({
                to: data.username,
                subject: "Reset Password",
                html: templates_1.templates.resetPassword(targetUrl),
            });
            if (isSuccess) {
                return {
                    isSuccess: true,
                };
            }
            return {
                errors: [
                    {
                        field: "email",
                        message: "Couldn't sent activation mail to provided email. Please try again later.",
                    },
                ],
            };
        }
        else {
            return {
                errors: [
                    {
                        field: "email",
                        message: "User not found for provided email.",
                    },
                ],
            };
        }
    }
    async resetPassword(data, { prisma }) {
        const user = await token_service_1.TokenService.verifyToken(data.token, "resetPasswordToken");
        if (user) {
            const userFound = await prisma.user.findUnique({
                where: {
                    username: user.username,
                },
            });
            if (userFound) {
                const passwordHash = await bcryptjs_1.default.hash(data.password, 5);
                const updatedUser = await prisma.user.update({
                    data: { password: passwordHash, status: prisma_client_1.account_status.active },
                    where: { id: userFound.id },
                });
                const accessToken = token_service_1.TokenService.generateAccessToken({
                    userId: userFound.id,
                    username: userFound.username,
                    name: userFound.name,
                });
                return {
                    accessToken,
                };
            }
        }
        return {
            errors: [
                {
                    field: "token",
                    message: "Invalid token.",
                },
            ],
        };
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, type_graphql_1.Query)(() => graphql_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => RegisterResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => VerifyAccountRes),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyAccountInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "verifyAccount", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => LoginRes),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ForgotPasswordRes),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ResetPasswordRes),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resetPassword", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AuthResolver);
//# sourceMappingURL=resolver.js.map