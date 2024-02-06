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
exports.PartCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregatePartArgs_1 = require("./args/AggregatePartArgs");
const CreateManyPartArgs_1 = require("./args/CreateManyPartArgs");
const CreateOnePartArgs_1 = require("./args/CreateOnePartArgs");
const DeleteManyPartArgs_1 = require("./args/DeleteManyPartArgs");
const DeleteOnePartArgs_1 = require("./args/DeleteOnePartArgs");
const FindFirstPartArgs_1 = require("./args/FindFirstPartArgs");
const FindFirstPartOrThrowArgs_1 = require("./args/FindFirstPartOrThrowArgs");
const FindManyPartArgs_1 = require("./args/FindManyPartArgs");
const FindUniquePartArgs_1 = require("./args/FindUniquePartArgs");
const FindUniquePartOrThrowArgs_1 = require("./args/FindUniquePartOrThrowArgs");
const GroupByPartArgs_1 = require("./args/GroupByPartArgs");
const UpdateManyPartArgs_1 = require("./args/UpdateManyPartArgs");
const UpdateOnePartArgs_1 = require("./args/UpdateOnePartArgs");
const UpsertOnePartArgs_1 = require("./args/UpsertOnePartArgs");
const helpers_1 = require("../../../helpers");
const Part_1 = require("../../../models/Part");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePart_1 = require("../../outputs/AggregatePart");
const PartGroupBy_1 = require("../../outputs/PartGroupBy");
let PartCrudResolver = class PartCrudResolver {
    async aggregatePart(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).part.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyPart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOnePart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyPart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOnePart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstPart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstPartOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async parts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async part(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getPart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByPart(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyPart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOnePart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOnePart(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).part.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.PartCrudResolver = PartCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregatePart_1.AggregatePart, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregatePartArgs_1.AggregatePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "aggregatePart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyPartArgs_1.CreateManyPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "createManyPart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Part_1.Part, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOnePartArgs_1.CreateOnePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "createOnePart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyPartArgs_1.DeleteManyPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "deleteManyPart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOnePartArgs_1.DeleteOnePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "deleteOnePart", null);
__decorate([
    TypeGraphQL.Query((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPartArgs_1.FindFirstPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "findFirstPart", null);
__decorate([
    TypeGraphQL.Query((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPartOrThrowArgs_1.FindFirstPartOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "findFirstPartOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Part_1.Part], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyPartArgs_1.FindManyPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "parts", null);
__decorate([
    TypeGraphQL.Query((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePartArgs_1.FindUniquePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "part", null);
__decorate([
    TypeGraphQL.Query((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePartOrThrowArgs_1.FindUniquePartOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "getPart", null);
__decorate([
    TypeGraphQL.Query((_returns) => [PartGroupBy_1.PartGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByPartArgs_1.GroupByPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "groupByPart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyPartArgs_1.UpdateManyPartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "updateManyPart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Part_1.Part, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOnePartArgs_1.UpdateOnePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "updateOnePart", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Part_1.Part, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOnePartArgs_1.UpsertOnePartArgs]),
    __metadata("design:returntype", Promise)
], PartCrudResolver.prototype, "upsertOnePart", null);
exports.PartCrudResolver = PartCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Part_1.Part)
], PartCrudResolver);
//# sourceMappingURL=PartCrudResolver.js.map