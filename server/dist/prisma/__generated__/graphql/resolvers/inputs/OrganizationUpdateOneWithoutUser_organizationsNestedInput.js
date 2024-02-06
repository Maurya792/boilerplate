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
exports.OrganizationUpdateOneWithoutUser_organizationsNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrganizationCreateOrConnectWithoutUser_organizationsInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutUser_organizationsInput");
const OrganizationCreateWithoutUser_organizationsInput_1 = require("../inputs/OrganizationCreateWithoutUser_organizationsInput");
const OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput_1 = require("../inputs/OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput");
const OrganizationUpsertWithoutUser_organizationsInput_1 = require("../inputs/OrganizationUpsertWithoutUser_organizationsInput");
const OrganizationWhereInput_1 = require("../inputs/OrganizationWhereInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateOneWithoutUser_organizationsNestedInput = class OrganizationUpdateOneWithoutUser_organizationsNestedInput {
};
exports.OrganizationUpdateOneWithoutUser_organizationsNestedInput = OrganizationUpdateOneWithoutUser_organizationsNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => OrganizationCreateWithoutUser_organizationsInput_1.OrganizationCreateWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationCreateOrConnectWithoutUser_organizationsInput_1.OrganizationCreateOrConnectWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationUpsertWithoutUser_organizationsInput_1.OrganizationUpsertWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput_1.OrganizationUpdateToOneWithWhereWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrganizationUpdateOneWithoutUser_organizationsNestedInput.prototype, "update", void 0);
exports.OrganizationUpdateOneWithoutUser_organizationsNestedInput = OrganizationUpdateOneWithoutUser_organizationsNestedInput = __decorate([
    TypeGraphQL.InputType("OrganizationUpdateOneWithoutUser_organizationsNestedInput", {})
], OrganizationUpdateOneWithoutUser_organizationsNestedInput);
//# sourceMappingURL=OrganizationUpdateOneWithoutUser_organizationsNestedInput.js.map