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
exports.User_organization_teamGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organization_teamAvgAggregate_1 = require("../outputs/User_organization_teamAvgAggregate");
const User_organization_teamCountAggregate_1 = require("../outputs/User_organization_teamCountAggregate");
const User_organization_teamMaxAggregate_1 = require("../outputs/User_organization_teamMaxAggregate");
const User_organization_teamMinAggregate_1 = require("../outputs/User_organization_teamMinAggregate");
const User_organization_teamSumAggregate_1 = require("../outputs/User_organization_teamSumAggregate");
const team_role_1 = require("../../enums/team_role");
let User_organization_teamGroupBy = class User_organization_teamGroupBy {
};
exports.User_organization_teamGroupBy = User_organization_teamGroupBy;
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], User_organization_teamGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], User_organization_teamGroupBy.prototype, "team_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "user_organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => team_role_1.team_role, {
        nullable: false,
    }),
    __metadata("design:type", String)
], User_organization_teamGroupBy.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamCountAggregate_1.User_organization_teamCountAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamAvgAggregate_1.User_organization_teamAvgAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamSumAggregate_1.User_organization_teamSumAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamMinAggregate_1.User_organization_teamMinAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamMaxAggregate_1.User_organization_teamMaxAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamGroupBy.prototype, "_max", void 0);
exports.User_organization_teamGroupBy = User_organization_teamGroupBy = __decorate([
    TypeGraphQL.ObjectType("User_organization_teamGroupBy", {
        simpleResolvers: true,
    })
], User_organization_teamGroupBy);
//# sourceMappingURL=User_organization_teamGroupBy.js.map