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
exports.TeamCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateTeamArgs_1 = require("./args/AggregateTeamArgs");
const CreateManyTeamArgs_1 = require("./args/CreateManyTeamArgs");
const CreateOneTeamArgs_1 = require("./args/CreateOneTeamArgs");
const DeleteManyTeamArgs_1 = require("./args/DeleteManyTeamArgs");
const DeleteOneTeamArgs_1 = require("./args/DeleteOneTeamArgs");
const FindFirstTeamArgs_1 = require("./args/FindFirstTeamArgs");
const FindFirstTeamOrThrowArgs_1 = require("./args/FindFirstTeamOrThrowArgs");
const FindManyTeamArgs_1 = require("./args/FindManyTeamArgs");
const FindUniqueTeamArgs_1 = require("./args/FindUniqueTeamArgs");
const FindUniqueTeamOrThrowArgs_1 = require("./args/FindUniqueTeamOrThrowArgs");
const GroupByTeamArgs_1 = require("./args/GroupByTeamArgs");
const UpdateManyTeamArgs_1 = require("./args/UpdateManyTeamArgs");
const UpdateOneTeamArgs_1 = require("./args/UpdateOneTeamArgs");
const UpsertOneTeamArgs_1 = require("./args/UpsertOneTeamArgs");
const helpers_1 = require("../../../helpers");
const Team_1 = require("../../../models/Team");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeam_1 = require("../../outputs/AggregateTeam");
const TeamGroupBy_1 = require("../../outputs/TeamGroupBy");
let TeamCrudResolver = class TeamCrudResolver {
    async aggregateTeam(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).team.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstTeamOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async teams(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByTeam(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.TeamCrudResolver = TeamCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateTeam_1.AggregateTeam, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTeamArgs_1.AggregateTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "aggregateTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyTeamArgs_1.CreateManyTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "createManyTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Team_1.Team, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneTeamArgs_1.CreateOneTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "createOneTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTeamArgs_1.DeleteManyTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "deleteManyTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneTeamArgs_1.DeleteOneTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "deleteOneTeam", null);
__decorate([
    TypeGraphQL.Query((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTeamArgs_1.FindFirstTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "findFirstTeam", null);
__decorate([
    TypeGraphQL.Query((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTeamOrThrowArgs_1.FindFirstTeamOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "findFirstTeamOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Team_1.Team], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTeamArgs_1.FindManyTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "teams", null);
__decorate([
    TypeGraphQL.Query((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTeamArgs_1.FindUniqueTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "team", null);
__decorate([
    TypeGraphQL.Query((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTeamOrThrowArgs_1.FindUniqueTeamOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "getTeam", null);
__decorate([
    TypeGraphQL.Query((_returns) => [TeamGroupBy_1.TeamGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTeamArgs_1.GroupByTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "groupByTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTeamArgs_1.UpdateManyTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "updateManyTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Team_1.Team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneTeamArgs_1.UpdateOneTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "updateOneTeam", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Team_1.Team, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneTeamArgs_1.UpsertOneTeamArgs]),
    __metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "upsertOneTeam", null);
exports.TeamCrudResolver = TeamCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Team_1.Team)
], TeamCrudResolver);
//# sourceMappingURL=TeamCrudResolver.js.map