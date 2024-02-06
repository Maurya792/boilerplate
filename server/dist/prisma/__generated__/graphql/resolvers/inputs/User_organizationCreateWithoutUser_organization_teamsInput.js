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
exports.User_organizationCreateWithoutUser_organization_teamsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrganizationCreateNestedOneWithoutUser_organizationsInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutUser_organizationsInput");
const TraceCreateNestedManyWithoutUser_organizationInput_1 = require("../inputs/TraceCreateNestedManyWithoutUser_organizationInput");
const UserCreateNestedOneWithoutUser_organizationsInput_1 = require("../inputs/UserCreateNestedOneWithoutUser_organizationsInput");
const user_invitation_status_1 = require("../../enums/user_invitation_status");
const user_role_1 = require("../../enums/user_role");
let User_organizationCreateWithoutUser_organization_teamsInput = class User_organizationCreateWithoutUser_organization_teamsInput {
};
exports.User_organizationCreateWithoutUser_organization_teamsInput = User_organizationCreateWithoutUser_organization_teamsInput;
__decorate([
    TypeGraphQL.Field((_type) => user_role_1.user_role, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_invitation_status_1.user_invitation_status, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "invitation_status", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Date, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "last_invited", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutUser_organizationsInput_1.UserCreateNestedOneWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TraceCreateNestedManyWithoutUser_organizationInput_1.TraceCreateNestedManyWithoutUser_organizationInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "traces", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationCreateNestedOneWithoutUser_organizationsInput_1.OrganizationCreateNestedOneWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationCreateWithoutUser_organization_teamsInput.prototype, "organization", void 0);
exports.User_organizationCreateWithoutUser_organization_teamsInput = User_organizationCreateWithoutUser_organization_teamsInput = __decorate([
    TypeGraphQL.InputType("User_organizationCreateWithoutUser_organization_teamsInput", {})
], User_organizationCreateWithoutUser_organization_teamsInput);
//# sourceMappingURL=User_organizationCreateWithoutUser_organization_teamsInput.js.map