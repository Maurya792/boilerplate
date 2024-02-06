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
exports.UserOrgActionsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const constants_1 = require("../../constants");
const token_service_1 = require("../../services/token-service");
const mail_service_1 = require("../../services/mail-service");
const prisma_client_1 = require("prisma/prisma-client");
const templates_1 = require("../../templates");
const types_1 = require("../auth/types");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
let InviteUserInput = class InviteUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InviteUserInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], InviteUserInput.prototype, "orgId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InviteUserInput.prototype, "redirectUrl", void 0);
InviteUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], InviteUserInput);
let InviteUserResponse = class InviteUserResponse extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], InviteUserResponse.prototype, "isSuccess", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], InviteUserResponse.prototype, "isNewUser", void 0);
InviteUserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], InviteUserResponse);
let JoinOrgInput = class JoinOrgInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], JoinOrgInput.prototype, "token", void 0);
JoinOrgInput = __decorate([
    (0, type_graphql_1.InputType)()
], JoinOrgInput);
let UserOrgActionsResolver = class UserOrgActionsResolver {
    async inviteUser(data, { prisma }) {
        var _a, _b;
        const [user, org] = await Promise.all([
            prisma.user.findUnique({ where: { username: data.username } }),
            prisma.organization.findUnique({ where: { id: data.orgId } }),
        ]);
        if (!org) {
            return {
                errors: [
                    {
                        field: "orgId",
                        message: "The organization doesn't exists on system.",
                    },
                ],
            };
        }
        try {
            if (!user) {
                const invitationToken = token_service_1.TokenService.generateUserOrgInvitationToken({
                    isNewUser: true,
                    username: data.username,
                    orgId: org.id,
                    orgName: org.name || org.slug,
                });
                const mailService = new mail_service_1.MailService();
                const targetUrl = new URL((_a = data.redirectUrl) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_AUTH_REDIRECT_URL);
                targetUrl.searchParams.append("token", invitationToken);
                const isSuccess = await mailService.send({
                    to: data.username,
                    subject: `Join Org ${org.name || org.slug}`,
                    html: templates_1.templates.joinOrg(targetUrl, org.name || org.slug),
                });
                if (isSuccess) {
                    return {
                        isSuccess: true,
                    };
                }
                return {
                    errors: [
                        {
                            field: "userId",
                            message: "Couldn't sent activation mail to provided email. Please try again later.",
                        },
                    ],
                };
            }
            const isUserConnected = await prisma.user_organization.findUnique({
                where: {
                    user_id_organization_id: {
                        user_id: user.id,
                        organization_id: org.id,
                    },
                    invitation_status: prisma_client_1.user_invitation_status.connected,
                },
            });
            if (isUserConnected) {
                return {
                    errors: [
                        {
                            field: "userId",
                            message: "User is already connected to organization.",
                        },
                    ],
                };
            }
            const userOrg = await prisma.user_organization.upsert({
                create: {
                    user_id: user.id,
                    organization_id: org.id,
                    slug: org.slug,
                    invitation_status: prisma_client_1.user_invitation_status.invited,
                    last_invited: (0, moment_timezone_1.default)().toDate(),
                },
                update: {
                    invitation_status: prisma_client_1.user_invitation_status.invited,
                    last_invited: (0, moment_timezone_1.default)().toDate(),
                },
                where: {
                    user_id_organization_id: {
                        user_id: user.id,
                        organization_id: org.id,
                    },
                },
            });
            const invitationToken = token_service_1.TokenService.generateUserOrgInvitationToken({
                userId: user.id,
                username: user.username,
                userOrgId: userOrg.id,
                orgName: org.name || org.slug,
            });
            const mailService = new mail_service_1.MailService();
            const targetUrl = new URL((_b = data.redirectUrl) !== null && _b !== void 0 ? _b : constants_1.DEFAULT_AUTH_REDIRECT_URL);
            targetUrl.searchParams.append("token", invitationToken);
            const isSuccess = await mailService.send({
                to: user.username,
                subject: `Join Org ${org.name || org.slug}`,
                html: templates_1.templates.joinOrg(targetUrl, org.name || org.slug),
            });
            if (isSuccess) {
                return {
                    isSuccess: true,
                };
            }
            return {
                errors: [
                    {
                        field: "userId",
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
    async joinOrg(data, { prisma }) {
        const tokenData = await token_service_1.TokenService.verifyToken(data.token, "userOrgInvitationToken");
        const user = await prisma.user.findUnique({
            where: { username: tokenData === null || tokenData === void 0 ? void 0 : tokenData.username },
        });
        if ((tokenData === null || tokenData === void 0 ? void 0 : tokenData.isNewUser) && !user) {
            return {
                isNewUser: true,
            };
        }
        try {
            const userOrg = (tokenData === null || tokenData === void 0 ? void 0 : tokenData.userOrgId)
                ? await prisma.user_organization.findUnique({
                    where: { id: tokenData === null || tokenData === void 0 ? void 0 : tokenData.userOrgId },
                })
                : await prisma.user_organization.findUnique({
                    where: {
                        user_id_organization_id: {
                            organization_id: tokenData === null || tokenData === void 0 ? void 0 : tokenData.orgId,
                            user_id: user.id,
                        },
                    },
                });
            if (userOrg) {
                const updatedUserOrg = await prisma.user_organization.update({
                    data: { invitation_status: prisma_client_1.user_invitation_status.connected },
                    where: { id: userOrg.id },
                });
                if (updatedUserOrg) {
                    return {
                        isSuccess: true,
                    };
                }
            }
        }
        catch (err) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "The provided token is invalid!",
                    },
                ],
            };
        }
        return {
            errors: [
                {
                    field: "token",
                    message: "The provided token is invalid!",
                },
            ],
        };
    }
};
exports.UserOrgActionsResolver = UserOrgActionsResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => InviteUserResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InviteUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserOrgActionsResolver.prototype, "inviteUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => InviteUserResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [JoinOrgInput, Object]),
    __metadata("design:returntype", Promise)
], UserOrgActionsResolver.prototype, "joinOrg", null);
exports.UserOrgActionsResolver = UserOrgActionsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserOrgActionsResolver);
//# sourceMappingURL=resolver.js.map