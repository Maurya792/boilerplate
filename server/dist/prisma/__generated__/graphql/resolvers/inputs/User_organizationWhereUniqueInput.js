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
exports.User_organizationWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const Enumuser_invitation_statusNullableFilter_1 = require("../inputs/Enumuser_invitation_statusNullableFilter");
const Enumuser_roleFilter_1 = require("../inputs/Enumuser_roleFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrganizationNullableRelationFilter_1 = require("../inputs/OrganizationNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TraceListRelationFilter_1 = require("../inputs/TraceListRelationFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
const User_organizationWhereInput_1 = require("../inputs/User_organizationWhereInput");
const User_organization_teamListRelationFilter_1 = require("../inputs/User_organization_teamListRelationFilter");
const user_organizationIdUser_idOrganization_idCompoundUniqueInput_1 = require("../inputs/user_organizationIdUser_idOrganization_idCompoundUniqueInput");
const user_organizationUser_idOrganization_idCompoundUniqueInput_1 = require("../inputs/user_organizationUser_idOrganization_idCompoundUniqueInput");
const user_organizationUser_idOrganization_idRoleCompoundUniqueInput_1 = require("../inputs/user_organizationUser_idOrganization_idRoleCompoundUniqueInput");
const user_organizationUser_idSlugCompoundUniqueInput_1 = require("../inputs/user_organizationUser_idSlugCompoundUniqueInput");
let User_organizationWhereUniqueInput = class User_organizationWhereUniqueInput {
};
exports.User_organizationWhereUniqueInput = User_organizationWhereUniqueInput;
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_organizationUser_idOrganization_idCompoundUniqueInput_1.user_organizationUser_idOrganization_idCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user_id_organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_organizationUser_idSlugCompoundUniqueInput_1.user_organizationUser_idSlugCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user_id_slug", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_organizationUser_idOrganization_idRoleCompoundUniqueInput_1.user_organizationUser_idOrganization_idRoleCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user_id_organization_id_role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_organizationIdUser_idOrganization_idCompoundUniqueInput_1.user_organizationIdUser_idOrganization_idCompoundUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "id_user_id_organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput_1.User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput_1.User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereInput_1.User_organizationWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Enumuser_roleFilter_1.Enumuser_roleFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "organization_id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Enumuser_invitation_statusNullableFilter_1.Enumuser_invitation_statusNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "invitation_status", void 0);
__decorate([
    TypeGraphQL.Field((_type) => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "last_invited", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TraceListRelationFilter_1.TraceListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "traces", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationNullableRelationFilter_1.OrganizationNullableRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "organization", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamListRelationFilter_1.User_organization_teamListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationWhereUniqueInput.prototype, "user_organization_teams", void 0);
exports.User_organizationWhereUniqueInput = User_organizationWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("User_organizationWhereUniqueInput", {})
], User_organizationWhereUniqueInput);
//# sourceMappingURL=User_organizationWhereUniqueInput.js.map