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
exports.OrganizationRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Organization_1 = require("../../../models/Organization");
const Team_1 = require("../../../models/Team");
const User_organization_1 = require("../../../models/User_organization");
const OrganizationTeamsArgs_1 = require("./args/OrganizationTeamsArgs");
const OrganizationUser_organizationsArgs_1 = require("./args/OrganizationUser_organizationsArgs");
const helpers_1 = require("../../../helpers");
let OrganizationRelationsResolver = class OrganizationRelationsResolver {
    async user_organizations(organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .organization.findUniqueOrThrow({
            where: {
                id: organization.id,
            },
        })
            .user_organizations(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async teams(organization, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .organization.findUniqueOrThrow({
            where: {
                id: organization.id,
            },
        })
            .teams(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.OrganizationRelationsResolver = OrganizationRelationsResolver;
__decorate([
    TypeGraphQL.FieldResolver((_type) => [User_organization_1.User_organization], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Organization_1.Organization, Object, Object, OrganizationUser_organizationsArgs_1.OrganizationUser_organizationsArgs]),
    __metadata("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "user_organizations", null);
__decorate([
    TypeGraphQL.FieldResolver((_type) => [Team_1.Team], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Organization_1.Organization, Object, Object, OrganizationTeamsArgs_1.OrganizationTeamsArgs]),
    __metadata("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "teams", null);
exports.OrganizationRelationsResolver = OrganizationRelationsResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Organization_1.Organization)
], OrganizationRelationsResolver);
//# sourceMappingURL=OrganizationRelationsResolver.js.map