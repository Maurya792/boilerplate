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
exports.User_organizationCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateUser_organizationArgs_1 = require("./args/AggregateUser_organizationArgs");
const CreateManyUser_organizationArgs_1 = require("./args/CreateManyUser_organizationArgs");
const CreateOneUser_organizationArgs_1 = require("./args/CreateOneUser_organizationArgs");
const DeleteManyUser_organizationArgs_1 = require("./args/DeleteManyUser_organizationArgs");
const DeleteOneUser_organizationArgs_1 = require("./args/DeleteOneUser_organizationArgs");
const FindFirstUser_organizationArgs_1 = require("./args/FindFirstUser_organizationArgs");
const FindFirstUser_organizationOrThrowArgs_1 = require("./args/FindFirstUser_organizationOrThrowArgs");
const FindManyUser_organizationArgs_1 = require("./args/FindManyUser_organizationArgs");
const FindUniqueUser_organizationArgs_1 = require("./args/FindUniqueUser_organizationArgs");
const FindUniqueUser_organizationOrThrowArgs_1 = require("./args/FindUniqueUser_organizationOrThrowArgs");
const GroupByUser_organizationArgs_1 = require("./args/GroupByUser_organizationArgs");
const UpdateManyUser_organizationArgs_1 = require("./args/UpdateManyUser_organizationArgs");
const UpdateOneUser_organizationArgs_1 = require("./args/UpdateOneUser_organizationArgs");
const UpsertOneUser_organizationArgs_1 = require("./args/UpsertOneUser_organizationArgs");
const helpers_1 = require("../../../helpers");
const User_organization_1 = require("../../../models/User_organization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_organization_1 = require("../../outputs/AggregateUser_organization");
const User_organizationGroupBy_1 = require("../../outputs/User_organizationGroupBy");
let User_organizationCrudResolver = class User_organizationCrudResolver {
    async aggregateUser_organization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUser_organizationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async user_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByUser_organization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneUser_organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.User_organizationCrudResolver = User_organizationCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateUser_organization_1.AggregateUser_organization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUser_organizationArgs_1.AggregateUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "aggregateUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUser_organizationArgs_1.CreateManyUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "createManyUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_1.User_organization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneUser_organizationArgs_1.CreateOneUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "createOneUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUser_organizationArgs_1.DeleteManyUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "deleteManyUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneUser_organizationArgs_1.DeleteOneUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "deleteOneUser_organization", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUser_organizationArgs_1.FindFirstUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "findFirstUser_organization", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUser_organizationOrThrowArgs_1.FindFirstUser_organizationOrThrowArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "findFirstUser_organizationOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [User_organization_1.User_organization], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUser_organizationArgs_1.FindManyUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "user_organizations", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUser_organizationArgs_1.FindUniqueUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "user_organization", null);
__decorate([
    TypeGraphQL.Query((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUser_organizationOrThrowArgs_1.FindUniqueUser_organizationOrThrowArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "getUser_organization", null);
__decorate([
    TypeGraphQL.Query((_returns) => [User_organizationGroupBy_1.User_organizationGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUser_organizationArgs_1.GroupByUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "groupByUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUser_organizationArgs_1.UpdateManyUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "updateManyUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_1.User_organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneUser_organizationArgs_1.UpdateOneUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "updateOneUser_organization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => User_organization_1.User_organization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneUser_organizationArgs_1.UpsertOneUser_organizationArgs]),
    __metadata("design:returntype", Promise)
], User_organizationCrudResolver.prototype, "upsertOneUser_organization", null);
exports.User_organizationCrudResolver = User_organizationCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => User_organization_1.User_organization)
], User_organizationCrudResolver);
//# sourceMappingURL=User_organizationCrudResolver.js.map