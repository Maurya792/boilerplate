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
exports.LogCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateLogArgs_1 = require("./args/AggregateLogArgs");
const CreateManyLogArgs_1 = require("./args/CreateManyLogArgs");
const CreateOneLogArgs_1 = require("./args/CreateOneLogArgs");
const DeleteManyLogArgs_1 = require("./args/DeleteManyLogArgs");
const DeleteOneLogArgs_1 = require("./args/DeleteOneLogArgs");
const FindFirstLogArgs_1 = require("./args/FindFirstLogArgs");
const FindFirstLogOrThrowArgs_1 = require("./args/FindFirstLogOrThrowArgs");
const FindManyLogArgs_1 = require("./args/FindManyLogArgs");
const FindUniqueLogArgs_1 = require("./args/FindUniqueLogArgs");
const FindUniqueLogOrThrowArgs_1 = require("./args/FindUniqueLogOrThrowArgs");
const GroupByLogArgs_1 = require("./args/GroupByLogArgs");
const UpdateManyLogArgs_1 = require("./args/UpdateManyLogArgs");
const UpdateOneLogArgs_1 = require("./args/UpdateOneLogArgs");
const UpsertOneLogArgs_1 = require("./args/UpsertOneLogArgs");
const helpers_1 = require("../../../helpers");
const Log_1 = require("../../../models/Log");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLog_1 = require("../../outputs/AggregateLog");
const LogGroupBy_1 = require("../../outputs/LogGroupBy");
let LogCrudResolver = class LogCrudResolver {
    async aggregateLog(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).log.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstLogOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async logs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async log(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByLog(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneLog(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).log.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.LogCrudResolver = LogCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateLog_1.AggregateLog, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateLogArgs_1.AggregateLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "aggregateLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyLogArgs_1.CreateManyLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "createManyLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Log_1.Log, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneLogArgs_1.CreateOneLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "createOneLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyLogArgs_1.DeleteManyLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "deleteManyLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneLogArgs_1.DeleteOneLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "deleteOneLog", null);
__decorate([
    TypeGraphQL.Query((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstLogArgs_1.FindFirstLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "findFirstLog", null);
__decorate([
    TypeGraphQL.Query((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstLogOrThrowArgs_1.FindFirstLogOrThrowArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "findFirstLogOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Log_1.Log], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyLogArgs_1.FindManyLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "logs", null);
__decorate([
    TypeGraphQL.Query((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueLogArgs_1.FindUniqueLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "log", null);
__decorate([
    TypeGraphQL.Query((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueLogOrThrowArgs_1.FindUniqueLogOrThrowArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "getLog", null);
__decorate([
    TypeGraphQL.Query((_returns) => [LogGroupBy_1.LogGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByLogArgs_1.GroupByLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "groupByLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyLogArgs_1.UpdateManyLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "updateManyLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Log_1.Log, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneLogArgs_1.UpdateOneLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "updateOneLog", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Log_1.Log, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneLogArgs_1.UpsertOneLogArgs]),
    __metadata("design:returntype", Promise)
], LogCrudResolver.prototype, "upsertOneLog", null);
exports.LogCrudResolver = LogCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Log_1.Log)
], LogCrudResolver);
//# sourceMappingURL=LogCrudResolver.js.map