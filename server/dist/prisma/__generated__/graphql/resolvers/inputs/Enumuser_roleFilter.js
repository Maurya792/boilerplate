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
exports.Enumuser_roleFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumuser_roleFilter_1 = require("../inputs/NestedEnumuser_roleFilter");
const user_role_1 = require("../../enums/user_role");
let Enumuser_roleFilter = class Enumuser_roleFilter {
};
exports.Enumuser_roleFilter = Enumuser_roleFilter;
__decorate([
    TypeGraphQL.Field((_type) => user_role_1.user_role, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Enumuser_roleFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [user_role_1.user_role], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Enumuser_roleFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [user_role_1.user_role], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Enumuser_roleFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field((_type) => NestedEnumuser_roleFilter_1.NestedEnumuser_roleFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Enumuser_roleFilter.prototype, "not", void 0);
exports.Enumuser_roleFilter = Enumuser_roleFilter = __decorate([
    TypeGraphQL.InputType("Enumuser_roleFilter", {})
], Enumuser_roleFilter);
//# sourceMappingURL=Enumuser_roleFilter.js.map