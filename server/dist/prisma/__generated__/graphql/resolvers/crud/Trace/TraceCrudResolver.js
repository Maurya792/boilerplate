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
exports.TraceCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateTraceArgs_1 = require("./args/AggregateTraceArgs");
const CreateManyTraceArgs_1 = require("./args/CreateManyTraceArgs");
const CreateOneTraceArgs_1 = require("./args/CreateOneTraceArgs");
const DeleteManyTraceArgs_1 = require("./args/DeleteManyTraceArgs");
const DeleteOneTraceArgs_1 = require("./args/DeleteOneTraceArgs");
const FindFirstTraceArgs_1 = require("./args/FindFirstTraceArgs");
const FindFirstTraceOrThrowArgs_1 = require("./args/FindFirstTraceOrThrowArgs");
const FindManyTraceArgs_1 = require("./args/FindManyTraceArgs");
const FindUniqueTraceArgs_1 = require("./args/FindUniqueTraceArgs");
const FindUniqueTraceOrThrowArgs_1 = require("./args/FindUniqueTraceOrThrowArgs");
const GroupByTraceArgs_1 = require("./args/GroupByTraceArgs");
const UpdateManyTraceArgs_1 = require("./args/UpdateManyTraceArgs");
const UpdateOneTraceArgs_1 = require("./args/UpdateOneTraceArgs");
const UpsertOneTraceArgs_1 = require("./args/UpsertOneTraceArgs");
const helpers_1 = require("../../../helpers");
const Trace_1 = require("../../../models/Trace");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTrace_1 = require("../../outputs/AggregateTrace");
const TraceGroupBy_1 = require("../../outputs/TraceGroupBy");
let TraceCrudResolver = class TraceCrudResolver {
    async aggregateTrace(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstTraceOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async traces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async trace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByTrace(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneTrace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trace.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.TraceCrudResolver = TraceCrudResolver;
__decorate([
    TypeGraphQL.Query((_returns) => AggregateTrace_1.AggregateTrace, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTraceArgs_1.AggregateTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "aggregateTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyTraceArgs_1.CreateManyTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "createManyTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Trace_1.Trace, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneTraceArgs_1.CreateOneTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "createOneTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTraceArgs_1.DeleteManyTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "deleteManyTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneTraceArgs_1.DeleteOneTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "deleteOneTrace", null);
__decorate([
    TypeGraphQL.Query((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTraceArgs_1.FindFirstTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "findFirstTrace", null);
__decorate([
    TypeGraphQL.Query((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTraceOrThrowArgs_1.FindFirstTraceOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "findFirstTraceOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [Trace_1.Trace], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTraceArgs_1.FindManyTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "traces", null);
__decorate([
    TypeGraphQL.Query((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTraceArgs_1.FindUniqueTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "trace", null);
__decorate([
    TypeGraphQL.Query((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTraceOrThrowArgs_1.FindUniqueTraceOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "getTrace", null);
__decorate([
    TypeGraphQL.Query((_returns) => [TraceGroupBy_1.TraceGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTraceArgs_1.GroupByTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "groupByTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTraceArgs_1.UpdateManyTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "updateManyTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Trace_1.Trace, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneTraceArgs_1.UpdateOneTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "updateOneTrace", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => Trace_1.Trace, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneTraceArgs_1.UpsertOneTraceArgs]),
    __metadata("design:returntype", Promise)
], TraceCrudResolver.prototype, "upsertOneTrace", null);
exports.TraceCrudResolver = TraceCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => Trace_1.Trace)
], TraceCrudResolver);
//# sourceMappingURL=TraceCrudResolver.js.map