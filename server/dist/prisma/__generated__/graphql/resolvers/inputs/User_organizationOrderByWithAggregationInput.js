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
exports.User_organizationOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const User_organizationAvgOrderByAggregateInput_1 = require("../inputs/User_organizationAvgOrderByAggregateInput");
const User_organizationCountOrderByAggregateInput_1 = require("../inputs/User_organizationCountOrderByAggregateInput");
const User_organizationMaxOrderByAggregateInput_1 = require("../inputs/User_organizationMaxOrderByAggregateInput");
const User_organizationMinOrderByAggregateInput_1 = require("../inputs/User_organizationMinOrderByAggregateInput");
const User_organizationSumOrderByAggregateInput_1 = require("../inputs/User_organizationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let User_organizationOrderByWithAggregationInput = class User_organizationOrderByWithAggregationInput {
};
exports.User_organizationOrderByWithAggregationInput = User_organizationOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrderInput_1.SortOrderInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "invitation_status", void 0);
__decorate([
    TypeGraphQL.Field((_type) => SortOrderInput_1.SortOrderInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "last_invited", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCountOrderByAggregateInput_1.User_organizationCountOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationAvgOrderByAggregateInput_1.User_organizationAvgOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationMaxOrderByAggregateInput_1.User_organizationMaxOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationMinOrderByAggregateInput_1.User_organizationMinOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationSumOrderByAggregateInput_1.User_organizationSumOrderByAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.User_organizationOrderByWithAggregationInput = User_organizationOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("User_organizationOrderByWithAggregationInput", {})
], User_organizationOrderByWithAggregationInput);
//# sourceMappingURL=User_organizationOrderByWithAggregationInput.js.map