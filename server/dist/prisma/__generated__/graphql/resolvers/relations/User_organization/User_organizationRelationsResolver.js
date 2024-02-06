"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_organizationRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Organization_1 = require("../../../models/Organization");
const Trace_1 = require("../../../models/Trace");
const User_1 = require("../../../models/User");
const User_organization_1 = require("../../../models/User_organization");
const User_organization_team_1 = require("../../../models/User_organization_team");
const User_organizationOrganizationArgs_1 = require("./args/User_organizationOrganizationArgs");
const User_organizationTracesArgs_1 = require("./args/User_organizationTracesArgs");
const User_organizationUserArgs_1 = require("./args/User_organizationUserArgs");
const User_organizationUser_organization_teamsArgs_1 = require("./args/User_organizationUser_organization_teamsArgs");
const helpers_1 = require("../../../helpers");
let User_organizationRelationsResolver = class User_organizationRelationsResolver {
    async user(user_organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .user_organization.findUniqueOrThrow({
            where: {
                id: user_organization.id,
            },
        })
            .user(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async traces(user_organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .user_organization.findUniqueOrThrow({
            where: {
                id: user_organization.id,
            },
        })
            .traces(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async organization(user_organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .user_organization.findUniqueOrThrow({
            where: {
                id: user_organization.id,
            },
        })
            .organization(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organization_teams(user_organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .user_organization.findUniqueOrThrow({
            where: {
                id: user_organization.id,
            },
        })
            .user_organization_teams(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.User_organizationRelationsResolver = User_organizationRelationsResolver;
__decorate([
    TypeGraphQL.FieldResolver((_type) => User_1.User, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organization_1.User_organization, Object, Object, User_organizationUserArgs_1.User_organizationUserArgs]),
    __metadata("design:returntype", Promise)
], User_organizationRelationsResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.FieldResolver((_type) => [Trace_1.Trace], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organization_1.User_organization, Object, Object, User_organizationTracesArgs_1.User_organizationTracesArgs]),
    __metadata("design:returntype", Promise)
], User_organizationRelationsResolver.prototype, "traces", null);
__decorate([
    TypeGraphQL.FieldResolver((_type) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organization_1.User_organization, Object, Object, User_organizationOrganizationArgs_1.User_organizationOrganizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationRelationsResolver.prototype, "organization", null);
__decorate([
    TypeGraphQL.FieldResolver((_type) => [User_organization_team_1.User_organization_team], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organization_1.User_organization, Object, Object, User_organizationUser_organization_teamsArgs_1.User_organizationUser_organization_teamsArgs]),
    __metadata("design:returntype", Promise)
], User_organizationRelationsResolver.prototype, "user_organization_teams", null);
exports.User_organizationRelationsResolver = User_organizationRelationsResolver = __decorate([
    TypeGraphQL.Resolver((_of) => User_organization_1.User_organization)
], User_organizationRelationsResolver);
//# sourceMappingURL=User_organizationRelationsResolver.js.map