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
exports.User_organization_teamOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const User_organization_teamAvgOrderByAggregateInput_1 = require("../inputs/User_organization_teamAvgOrderByAggregateInput");
const User_organization_teamCountOrderByAggregateInput_1 = require("../inputs/User_organization_teamCountOrderByAggregateInput");
const User_organization_teamMaxOrderByAggregateInput_1 = require("../inputs/User_organization_teamMaxOrderByAggregateInput");
const User_organization_teamMinOrderByAggregateInput_1 = require("../inputs/User_organization_teamMinOrderByAggregateInput");
const User_organization_teamSumOrderByAggregateInput_1 = require("../inputs/User_organization_teamSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let User_organization_teamOrderByWithAggregationInput = class User_organization_teamOrderByWithAggregationInput {
};
exports.User_organization_teamOrderByWithAggregationInput = User_organization_teamOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "team_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrderInput_1.SortOrderInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "user_organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamCountOrderByAggregateInput_1.User_organization_teamCountOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamAvgOrderByAggregateInput_1.User_organization_teamAvgOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamMaxOrderByAggregateInput_1.User_organization_teamMaxOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamMinOrderByAggregateInput_1.User_organization_teamMinOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamSumOrderByAggregateInput_1.User_organization_teamSumOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.User_organization_teamOrderByWithAggregationInput = User_organization_teamOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("User_organization_teamOrderByWithAggregationInput", {})
], User_organization_teamOrderByWithAggregationInput);
//# sourceMappingURL=User_organization_teamOrderByWithAggregationInput.js.map