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
exports.AggregateUser_organization = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationAvgAggregate_1 = require("../outputs/User_organizationAvgAggregate");
const User_organizationCountAggregate_1 = require("../outputs/User_organizationCountAggregate");
const User_organizationMaxAggregate_1 = require("../outputs/User_organizationMaxAggregate");
const User_organizationMinAggregate_1 = require("../outputs/User_organizationMinAggregate");
const User_organizationSumAggregate_1 = require("../outputs/User_organizationSumAggregate");
let AggregateUser_organization = class AggregateUser_organization {
};
exports.AggregateUser_organization = AggregateUser_organization;
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCountAggregate_1.User_organizationCountAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUser_organization.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationAvgAggregate_1.User_organizationAvgAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUser_organization.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationSumAggregate_1.User_organizationSumAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUser_organization.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationMinAggregate_1.User_organizationMinAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUser_organization.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationMaxAggregate_1.User_organizationMaxAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUser_organization.prototype, "_max", void 0);
exports.AggregateUser_organization = AggregateUser_organization = __decorate([
    TypeGraphQL.ObjectType("AggregateUser_organization", {
        simpleResolvers: true,
    })
], AggregateUser_organization);
//# sourceMappingURL=AggregateUser_organization.js.map