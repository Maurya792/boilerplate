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
exports.User_organization_teamCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateUser_organization_teamArgs_1 = require("./args/AggregateUser_organization_teamArgs");
const CreateManyUser_organization_teamArgs_1 = require("./args/CreateManyUser_organization_teamArgs");
const CreateOneUser_organization_teamArgs_1 = require("./args/CreateOneUser_organization_teamArgs");
const DeleteManyUser_organization_teamArgs_1 = require("./args/DeleteManyUser_organization_teamArgs");
const DeleteOneUser_organization_teamArgs_1 = require("./args/DeleteOneUser_organization_teamArgs");
const FindFirstUser_organization_teamArgs_1 = require("./args/FindFirstUser_organization_teamArgs");
const FindFirstUser_organization_teamOrThrowArgs_1 = require("./args/FindFirstUser_organization_teamOrThrowArgs");
const FindManyUser_organization_teamArgs_1 = require("./args/FindManyUser_organization_teamArgs");
const FindUniqueUser_organization_teamArgs_1 = require("./args/FindUniqueUser_organization_teamArgs");
const FindUniqueUser_organization_teamOrThrowArgs_1 = require("./args/FindUniqueUser_organization_teamOrThrowArgs");
const GroupByUser_organization_teamArgs_1 = require("./args/GroupByUser_organization_teamArgs");
const UpdateManyUser_organization_teamArgs_1 = require("./args/UpdateManyUser_organization_teamArgs");
const UpdateOneUser_organization_teamArgs_1 = require("./args/UpdateOneUser_organization_teamArgs");
const UpsertOneUser_organization_teamArgs_1 = require("./args/UpsertOneUser_organization_teamArgs");
const helpers_1 = require("../../../helpers");
const User_organization_team_1 = require("../../../models/User_organization_team");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_organization_team_1 = require("../../outputs/AggregateUser_organization_team");
const User_organization_teamGroupBy_1 = require("../../outputs/User_organization_teamGroupBy");
let User_organization_teamCrudResolver = class User_organization_teamCrudResolver {
    async aggregateUser_organization_team(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUser_organization_teamOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organization_teams(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByUser_organization_team(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneUser_organization_team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.User_organization_teamCrudResolver = User_organization_teamCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateUser_organization_team_1.AggregateUser_organization_team, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUser_organization_teamArgs_1.AggregateUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "aggregateUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUser_organization_teamArgs_1.CreateManyUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "createManyUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_team_1.User_organization_team, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneUser_organization_teamArgs_1.CreateOneUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "createOneUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUser_organization_teamArgs_1.DeleteManyUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "deleteManyUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneUser_organization_teamArgs_1.DeleteOneUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "deleteOneUser_organization_team", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUser_organization_teamArgs_1.FindFirstUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "findFirstUser_organization_team", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUser_organization_teamOrThrowArgs_1.FindFirstUser_organization_teamOrThrowArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "findFirstUser_organization_teamOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [User_organization_team_1.User_organization_team], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUser_organization_teamArgs_1.FindManyUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "user_organization_teams", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUser_organization_teamArgs_1.FindUniqueUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "user_organization_team", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUser_organization_teamOrThrowArgs_1.FindUniqueUser_organization_teamOrThrowArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "getUser_organization_team", null);
__decorate([
    TypeGraphQL.Query((_returns) => [User_organization_teamGroupBy_1.User_organization_teamGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUser_organization_teamArgs_1.GroupByUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "groupByUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUser_organization_teamArgs_1.UpdateManyUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "updateManyUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_team_1.User_organization_team, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneUser_organization_teamArgs_1.UpdateOneUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "updateOneUser_organization_team", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_team_1.User_organization_team, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneUser_organization_teamArgs_1.UpsertOneUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], User_organization_teamCrudResolver.prototype, "upsertOneUser_organization_team", null);
exports.User_organization_teamCrudResolver = User_organization_teamCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => User_organization_team_1.User_organization_team)
], User_organization_teamCrudResolver);
//# sourceMappingURL=User_organization_teamCrudResolver.js.map