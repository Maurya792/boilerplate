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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExOrganizationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("../../../../prisma/__generated__/graphql");
const prisma_client_1 = require("prisma/prisma-client");
let ExOrganizationResolver = class ExOrganizationResolver {
    async users(org, { prisma, user }) {
        const users = await prisma.user.findMany({
            where: {
                user_organizations: {
                    some: {
                        OR: [
                            {
                                organization: {
                                    id: org.id,
                                    user_organizations: {
                                        some: {
                                            user_id: user === null || user === void 0 ? void 0 : user.userId,
                                            role: {
                                                in: [prisma_client_1.user_role.admin, prisma_client_1.user_role.owner],
                                            },
                                        },
                                    },
                                },
                            },
                            {
                                user_organization_teams: {
                                    some: {
                                        team: {
                                            organization_id: org.id,
                                            user_organization_teams: {
                                                some: {
                                                    role: prisma_client_1.team_role.manager,
                                                    user_organization: {
                                                        user_id: user === null || user === void 0 ? void 0 : user.userId,
                                                        organization_id: org.id,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            },
            include: {
                user_organizations: {
                    where: {
                        organization_id: org.id,
                    },
                },
            },
        });
        return users;
    }
};
exports.ExOrganizationResolver = ExOrganizationResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)((type) => [graphql_1.User], { nullable: true }),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_1.Organization, Object]),
    __metadata("design:returntype", Promise)
], ExOrganizationResolver.prototype, "users", null);
exports.ExOrganizationResolver = ExOrganizationResolver = __decorate([
    (0, type_graphql_1.Resolver)((of) => graphql_1.Organization)
], ExOrganizationResolver);
//# sourceMappingURL=index.js.map