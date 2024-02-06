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
exports.User_organizationWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const Enumuser_invitation_statusNullableFilter_1 = require("../inputs/Enumuser_invitation_statusNullableFilter");
const Enumuser_roleFilter_1 = require("../inputs/Enumuser_roleFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrganizationNullableRelationFilter_1 = require("../inputs/OrganizationNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TraceListRelationFilter_1 = require("../inputs/TraceListRelationFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
const User_organization_teamListRelationFilter_1 = require("../inputs/User_organization_teamListRelationFilter");
let User_organizationWhereInput = class User_organizationWhereInput {
};
exports.User_organizationWhereInput = User_organizationWhereInput;
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Enumuser_roleFilter_1.Enumuser_roleFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Enumuser_invitation_statusNullableFilter_1.Enumuser_invitation_statusNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "invitation_status", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "last_invited", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TraceListRelationFilter_1.TraceListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "traces", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationNullableRelationFilter_1.OrganizationNullableRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "organization", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamListRelationFilter_1.User_organization_teamListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereInput.prototype, "user_organization_teams", void 0);
exports.User_organizationWhereInput = User_organizationWhereInput = __decorate([
    TypeGraphQL.InputType("User_organizationWhereInput", {})
], User_organizationWhereInput);
//# sourceMappingURL=User_organizationWhereInput.js.map