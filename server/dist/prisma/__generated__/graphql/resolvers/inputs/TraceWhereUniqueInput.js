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
exports.TraceWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssetListRelationFilter_1 = require("../inputs/AssetListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DecimalFilter_1 = require("../inputs/DecimalFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const LogListRelationFilter_1 = require("../inputs/LogListRelationFilter");
const PartListRelationFilter_1 = require("../inputs/PartListRelationFilter");
const TraceWhereInput_1 = require("../inputs/TraceWhereInput");
const User_organizationNullableRelationFilter_1 = require("../inputs/User_organizationNullableRelationFilter");
const traceIdUser_organization_idDateCompoundUniqueInput_1 = require("../inputs/traceIdUser_organization_idDateCompoundUniqueInput");
const traceUser_organization_idDateCompoundUniqueInput_1 = require("../inputs/traceUser_organization_idDateCompoundUniqueInput");
let TraceWhereUniqueInput = class TraceWhereUniqueInput {
};
exports.TraceWhereUniqueInput = TraceWhereUniqueInput;
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => traceUser_organization_idDateCompoundUniqueInput_1.traceUser_organization_idDateCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "user_organization_id_date", void 0);
__decorate([
    TypeGraphQL.Field((_type) => traceIdUser_organization_idDateCompoundUniqueInput_1.traceIdUser_organization_idDateCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "id_user_organization_id_date", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TraceWhereInput_1.TraceWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TraceWhereInput_1.TraceWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TraceWhereInput_1.TraceWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DecimalFilter_1.DecimalFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DecimalFilter_1.DecimalFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "in_active_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DecimalFilter_1.DecimalFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "all_time", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "date", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "user_organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => AssetListRelationFilter_1.AssetListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "images", void 0);
__decorate([
    TypeGraphQL.Field((_type) => LogListRelationFilter_1.LogListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "logs", void 0);
__decorate([
    TypeGraphQL.Field((_type) => PartListRelationFilter_1.PartListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "parts", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationNullableRelationFilter_1.User_organizationNullableRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceWhereUniqueInput.prototype, "user_organization", void 0);
exports.TraceWhereUniqueInput = TraceWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("TraceWhereUniqueInput", {})
], TraceWhereUniqueInput);
//# sourceMappingURL=TraceWhereUniqueInput.js.map