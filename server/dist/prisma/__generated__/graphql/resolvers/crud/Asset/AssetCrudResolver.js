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
exports.AssetCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateAssetArgs_1 = require("./args/AggregateAssetArgs");
const CreateManyAssetArgs_1 = require("./args/CreateManyAssetArgs");
const CreateOneAssetArgs_1 = require("./args/CreateOneAssetArgs");
const DeleteManyAssetArgs_1 = require("./args/DeleteManyAssetArgs");
const DeleteOneAssetArgs_1 = require("./args/DeleteOneAssetArgs");
const FindFirstAssetArgs_1 = require("./args/FindFirstAssetArgs");
const FindFirstAssetOrThrowArgs_1 = require("./args/FindFirstAssetOrThrowArgs");
const FindManyAssetArgs_1 = require("./args/FindManyAssetArgs");
const FindUniqueAssetArgs_1 = require("./args/FindUniqueAssetArgs");
const FindUniqueAssetOrThrowArgs_1 = require("./args/FindUniqueAssetOrThrowArgs");
const GroupByAssetArgs_1 = require("./args/GroupByAssetArgs");
const UpdateManyAssetArgs_1 = require("./args/UpdateManyAssetArgs");
const UpdateOneAssetArgs_1 = require("./args/UpdateOneAssetArgs");
const UpsertOneAssetArgs_1 = require("./args/UpsertOneAssetArgs");
const helpers_1 = require("../../../helpers");
const Asset_1 = require("../../../models/Asset");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAsset_1 = require("../../outputs/AggregateAsset");
const AssetGroupBy_1 = require("../../outputs/AssetGroupBy");
let AssetCrudResolver = class AssetCrudResolver {
    async aggregateAsset(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstAssetOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async assets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async asset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByAsset(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneAsset(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).asset.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.AssetCrudResolver = AssetCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateAsset_1.AggregateAsset, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAssetArgs_1.AggregateAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "aggregateAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAssetArgs_1.CreateManyAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "createManyAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Asset_1.Asset, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneAssetArgs_1.CreateOneAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "createOneAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAssetArgs_1.DeleteManyAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "deleteManyAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneAssetArgs_1.DeleteOneAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "deleteOneAsset", null);
__decorate([
    TypeGraphQL.Query((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAssetArgs_1.FindFirstAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "findFirstAsset", null);
__decorate([
    TypeGraphQL.Query((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAssetOrThrowArgs_1.FindFirstAssetOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "findFirstAssetOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Asset_1.Asset], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAssetArgs_1.FindManyAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "assets", null);
__decorate([
    TypeGraphQL.Query((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAssetArgs_1.FindUniqueAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "asset", null);
__decorate([
    TypeGraphQL.Query((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAssetOrThrowArgs_1.FindUniqueAssetOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "getAsset", null);
__decorate([
    TypeGraphQL.Query((_returns) => [AssetGroupBy_1.AssetGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAssetArgs_1.GroupByAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "groupByAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAssetArgs_1.UpdateManyAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "updateManyAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Asset_1.Asset, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneAssetArgs_1.UpdateOneAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "updateOneAsset", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Asset_1.Asset, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneAssetArgs_1.UpsertOneAssetArgs]),
    __metadata("design:returntype", Promise)
], AssetCrudResolver.prototype, "upsertOneAsset", null);
exports.AssetCrudResolver = AssetCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Asset_1.Asset)
], AssetCrudResolver);
//# sourceMappingURL=AssetCrudResolver.js.map