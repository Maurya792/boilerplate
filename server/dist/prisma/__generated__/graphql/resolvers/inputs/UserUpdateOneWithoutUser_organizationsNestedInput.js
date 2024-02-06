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
exports.UserUpdateOneWithoutUser_organizationsNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutUser_organizationsInput_1 = require("../inputs/UserCreateOrConnectWithoutUser_organizationsInput");
const UserCreateWithoutUser_organizationsInput_1 = require("../inputs/UserCreateWithoutUser_organizationsInput");
const UserUpdateToOneWithWhereWithoutUser_organizationsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutUser_organizationsInput");
const UserUpsertWithoutUser_organizationsInput_1 = require("../inputs/UserUpsertWithoutUser_organizationsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutUser_organizationsNestedInput = class UserUpdateOneWithoutUser_organizationsNestedInput {
};
exports.UserUpdateOneWithoutUser_organizationsNestedInput = UserUpdateOneWithoutUser_organizationsNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => UserCreateWithoutUser_organizationsInput_1.UserCreateWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutUser_organizationsInput_1.UserCreateOrConnectWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserUpsertWithoutUser_organizationsInput_1.UserUpsertWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserWhereInput_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserWhereInput_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutUser_organizationsInput_1.UserUpdateToOneWithWhereWithoutUser_organizationsInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateOneWithoutUser_organizationsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutUser_organizationsNestedInput = UserUpdateOneWithoutUser_organizationsNestedInput = __decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutUser_organizationsNestedInput", {})
], UserUpdateOneWithoutUser_organizationsNestedInput);
//# sourceMappingURL=UserUpdateOneWithoutUser_organizationsNestedInput.js.map