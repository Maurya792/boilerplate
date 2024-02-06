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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const PartAvgAggregate_1 = require("../outputs/PartAvgAggregate");
const PartCountAggregate_1 = require("../outputs/PartCountAggregate");
const PartMaxAggregate_1 = require("../outputs/PartMaxAggregate");
const PartMinAggregate_1 = require("../outputs/PartMinAggregate");
const PartSumAggregate_1 = require("../outputs/PartSumAggregate");
let PartGroupBy = class PartGroupBy {
};
exports.PartGroupBy = PartGroupBy;
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], PartGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], PartGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], PartGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => scalars_1.DecimalJSScalar, {
        nullable: false,
    }),
    __metadata("design:type", client_1.Prisma.Decimal)
], PartGroupBy.prototype, "active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => scalars_1.DecimalJSScalar, {
        nullable: false,
    }),
    __metadata("design:type", client_1.Prisma.Decimal)
], PartGroupBy.prototype, "in_active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], PartGroupBy.prototype, "trace_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartCountAggregate_1.PartCountAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartAvgAggregate_1.PartAvgAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartSumAggregate_1.PartSumAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartMinAggregate_1.PartMinAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartMaxAggregate_1.PartMaxAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartGroupBy.prototype, "_max", void 0);
exports.PartGroupBy = PartGroupBy = __decorate([
    TypeGraphQL.ObjectType("PartGroupBy", {
        simpleResolvers: true,
    })
], PartGroupBy);
//# sourceMappingURL=PartGroupBy.js.map