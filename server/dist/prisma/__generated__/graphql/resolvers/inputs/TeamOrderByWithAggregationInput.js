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
exports.TeamOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TeamAvgOrderByAggregateInput_1 = require("../inputs/TeamAvgOrderByAggregateInput");
const TeamCountOrderByAggregateInput_1 = require("../inputs/TeamCountOrderByAggregateInput");
const TeamMaxOrderByAggregateInput_1 = require("../inputs/TeamMaxOrderByAggregateInput");
const TeamMinOrderByAggregateInput_1 = require("../inputs/TeamMinOrderByAggregateInput");
const TeamSumOrderByAggregateInput_1 = require("../inputs/TeamSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamOrderByWithAggregationInput = class TeamOrderByWithAggregationInput {
};
exports.TeamOrderByWithAggregationInput = TeamOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamCountOrderByAggregateInput_1.TeamCountOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamAvgOrderByAggregateInput_1.TeamAvgOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamMaxOrderByAggregateInput_1.TeamMaxOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamMinOrderByAggregateInput_1.TeamMinOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamSumOrderByAggregateInput_1.TeamSumOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.TeamOrderByWithAggregationInput = TeamOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("TeamOrderByWithAggregationInput", {})
], TeamOrderByWithAggregationInput);
//# sourceMappingURL=TeamOrderByWithAggregationInput.js.map