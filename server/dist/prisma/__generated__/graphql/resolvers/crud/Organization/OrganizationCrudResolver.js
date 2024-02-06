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
exports.OrganizationCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateOrganizationArgs_1 = require("./args/AggregateOrganizationArgs");
const CreateManyOrganizationArgs_1 = require("./args/CreateManyOrganizationArgs");
const CreateOneOrganizationArgs_1 = require("./args/CreateOneOrganizationArgs");
const DeleteManyOrganizationArgs_1 = require("./args/DeleteManyOrganizationArgs");
const DeleteOneOrganizationArgs_1 = require("./args/DeleteOneOrganizationArgs");
const FindFirstOrganizationArgs_1 = require("./args/FindFirstOrganizationArgs");
const FindFirstOrganizationOrThrowArgs_1 = require("./args/FindFirstOrganizationOrThrowArgs");
const FindManyOrganizationArgs_1 = require("./args/FindManyOrganizationArgs");
const FindUniqueOrganizationArgs_1 = require("./args/FindUniqueOrganizationArgs");
const FindUniqueOrganizationOrThrowArgs_1 = require("./args/FindUniqueOrganizationOrThrowArgs");
const GroupByOrganizationArgs_1 = require("./args/GroupByOrganizationArgs");
const UpdateManyOrganizationArgs_1 = require("./args/UpdateManyOrganizationArgs");
const UpdateOneOrganizationArgs_1 = require("./args/UpdateOneOrganizationArgs");
const UpsertOneOrganizationArgs_1 = require("./args/UpsertOneOrganizationArgs");
const helpers_1 = require("../../../helpers");
const Organization_1 = require("../../../models/Organization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrganization_1 = require("../../outputs/AggregateOrganization");
const OrganizationGroupBy_1 = require("../../outputs/OrganizationGroupBy");
let OrganizationCrudResolver = class OrganizationCrudResolver {
    async aggregateOrganization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstOrganizationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async organizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByOrganization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.OrganizationCrudResolver = OrganizationCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateOrganization_1.AggregateOrganization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOrganizationArgs_1.AggregateOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "aggregateOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOrganizationArgs_1.CreateManyOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "createManyOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Organization_1.Organization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneOrganizationArgs_1.CreateOneOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "createOneOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOrganizationArgs_1.DeleteManyOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "deleteManyOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneOrganizationArgs_1.DeleteOneOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "deleteOneOrganization", null);
__decorate([
    TypeGraphQL.Query((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOrganizationArgs_1.FindFirstOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "findFirstOrganization", null);
__decorate([
    TypeGraphQL.Query((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOrganizationOrThrowArgs_1.FindFirstOrganizationOrThrowArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "findFirstOrganizationOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Organization_1.Organization], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOrganizationArgs_1.FindManyOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "organizations", null);
__decorate([
    TypeGraphQL.Query((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOrganizationArgs_1.FindUniqueOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "organization", null);
__decorate([
    TypeGraphQL.Query((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOrganizationOrThrowArgs_1.FindUniqueOrganizationOrThrowArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "getOrganization", null);
__decorate([
    TypeGraphQL.Query((_returns) => [OrganizationGroupBy_1.OrganizationGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOrganizationArgs_1.GroupByOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "groupByOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOrganizationArgs_1.UpdateManyOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "updateManyOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Organization_1.Organization, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneOrganizationArgs_1.UpdateOneOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "updateOneOrganization", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Organization_1.Organization, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneOrganizationArgs_1.UpsertOneOrganizationArgs]),
    __metadata("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "upsertOneOrganization", null);
exports.OrganizationCrudResolver = OrganizationCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Organization_1.Organization)
], OrganizationCrudResolver);
//# sourceMappingURL=OrganizationCrudResolver.js.map