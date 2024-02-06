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
exports.TeamRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Organization_1 = require("../../../models/Organization");
const Team_1 = require("../../../models/Team");
const User_organization_team_1 = require("../../../models/User_organization_team");
const TeamOrganizationArgs_1 = require("./args/TeamOrganizationArgs");
const TeamUser_organization_teamsArgs_1 = require("./args/TeamUser_organization_teamsArgs");
const helpers_1 = require("../../../helpers");
let TeamRelationsResolver = class TeamRelationsResolver {
    async organization(team, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .team.findUniqueOrThrow({
            where: {
                id: team.id,
            },
        })
            .organization(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organization_teams(team, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx)
            .team.findUniqueOrThrow({
            where: {
                id: team.id,
            },
        })
            .user_organization_teams(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.TeamRelationsResolver = TeamRelationsResolver;
__decorate([
    TypeGraphQL.FieldResolver((_type) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Team_1.Team, Object, Object, TeamOrganizationArgs_1.TeamOrganizationArgs]),
    __metadata("design:returntype", Promise)
], TeamRelationsResolver.prototype, "organization", null);
__decorate([
    TypeGraphQL.FieldResolver((_type) => [User_organization_team_1.User_organization_team], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Team_1.Team, Object, Object, TeamUser_organization_teamsArgs_1.TeamUser_organization_teamsArgs]),
    __metadata("design:returntype", Promise)
], TeamRelationsResolver.prototype, "user_organization_teams", null);
exports.TeamRelationsResolver = TeamRelationsResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Team_1.Team)
], TeamRelationsResolver);
//# sourceMappingURL=TeamRelationsResolver.js.map