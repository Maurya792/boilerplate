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
exports.User_organizationUpdateOneWithoutTracesNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationCreateOrConnectWithoutTracesInput_1 = require("../inputs/User_organizationCreateOrConnectWithoutTracesInput");
const User_organizationCreateWithoutTracesInput_1 = require("../inputs/User_organizationCreateWithoutTracesInput");
const User_organizationUpdateToOneWithWhereWithoutTracesInput_1 = require("../inputs/User_organizationUpdateToOneWithWhereWithoutTracesInput");
const User_organizationUpsertWithoutTracesInput_1 = require("../inputs/User_organizationUpsertWithoutTracesInput");
const User_organizationWhereInput_1 = require("../inputs/User_organizationWhereInput");
const User_organizationWhereUniqueInput_1 = require("../inputs/User_organizationWhereUniqueInput");
let User_organizationUpdateOneWithoutTracesNestedInput = class User_organizationUpdateOneWithoutTracesNestedInput {
};
exports.User_organizationUpdateOneWithoutTracesNestedInput = User_organizationUpdateOneWithoutTracesNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCreateWithoutTracesInput_1.User_organizationCreateWithoutTracesInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCreateOrConnectWithoutTracesInput_1.User_organizationCreateOrConnectWithoutTracesInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationUpsertWithoutTracesInput_1.User_organizationUpsertWithoutTracesInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationWhereInput_1.User_organizationWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationWhereInput_1.User_organizationWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationUpdateToOneWithWhereWithoutTracesInput_1.User_organizationUpdateToOneWithWhereWithoutTracesInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateOneWithoutTracesNestedInput.prototype, "update", void 0);
exports.User_organizationUpdateOneWithoutTracesNestedInput = User_organizationUpdateOneWithoutTracesNestedInput = __decorate([
    TypeGraphQL.InputType("User_organizationUpdateOneWithoutTracesNestedInput", {})
], User_organizationUpdateOneWithoutTracesNestedInput);
//# sourceMappingURL=User_organizationUpdateOneWithoutTracesNestedInput.js.map