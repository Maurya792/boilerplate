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
exports.PartOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PartAvgOrderByAggregateInput_1 = require("../inputs/PartAvgOrderByAggregateInput");
const PartCountOrderByAggregateInput_1 = require("../inputs/PartCountOrderByAggregateInput");
const PartMaxOrderByAggregateInput_1 = require("../inputs/PartMaxOrderByAggregateInput");
const PartMinOrderByAggregateInput_1 = require("../inputs/PartMinOrderByAggregateInput");
const PartSumOrderByAggregateInput_1 = require("../inputs/PartSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PartOrderByWithAggregationInput = class PartOrderByWithAggregationInput {
};
exports.PartOrderByWithAggregationInput = PartOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "in_active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "trace_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartCountOrderByAggregateInput_1.PartCountOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartAvgOrderByAggregateInput_1.PartAvgOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartMaxOrderByAggregateInput_1.PartMaxOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartMinOrderByAggregateInput_1.PartMinOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartSumOrderByAggregateInput_1.PartSumOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PartOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.PartOrderByWithAggregationInput = PartOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("PartOrderByWithAggregationInput", {})
], PartOrderByWithAggregationInput);
//# sourceMappingURL=PartOrderByWithAggregationInput.js.map