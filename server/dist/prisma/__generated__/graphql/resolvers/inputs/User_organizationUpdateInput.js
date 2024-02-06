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
exports.User_organizationUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrganizationUpdateOneWithoutUser_organizationsNestedInput_1 = require("../inputs/OrganizationUpdateOneWithoutUser_organizationsNestedInput");
const TraceUpdateManyWithoutUser_organizationNestedInput_1 = require("../inputs/TraceUpdateManyWithoutUser_organizationNestedInput");
const UserUpdateOneWithoutUser_organizationsNestedInput_1 = require("../inputs/UserUpdateOneWithoutUser_organizationsNestedInput");
const User_organization_teamUpdateManyWithoutUser_organizationNestedInput_1 = require("../inputs/User_organization_teamUpdateManyWithoutUser_organizationNestedInput");
const user_invitation_status_1 = require("../../enums/user_invitation_status");
const user_role_1 = require("../../enums/user_role");
let User_organizationUpdateInput = class User_organizationUpdateInput {
};
exports.User_organizationUpdateInput = User_organizationUpdateInput;
__decorate([
    TypeGraphQL.Field((_type) => user_role_1.user_role, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field((_type) => user_invitation_status_1.user_invitation_status, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "invitation_status", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Date, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "last_invited", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserUpdateOneWithoutUser_organizationsNestedInput_1.UserUpdateOneWithoutUser_organizationsNestedInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TraceUpdateManyWithoutUser_organizationNestedInput_1.TraceUpdateManyWithoutUser_organizationNestedInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "traces", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationUpdateOneWithoutUser_organizationsNestedInput_1.OrganizationUpdateOneWithoutUser_organizationsNestedInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "organization", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamUpdateManyWithoutUser_organizationNestedInput_1.User_organization_teamUpdateManyWithoutUser_organizationNestedInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateInput.prototype, "user_organization_teams", void 0);
exports.User_organizationUpdateInput = User_organizationUpdateInput = __decorate([
    TypeGraphQL.InputType("User_organizationUpdateInput", {})
], User_organizationUpdateInput);
//# sourceMappingURL=User_organizationUpdateInput.js.map