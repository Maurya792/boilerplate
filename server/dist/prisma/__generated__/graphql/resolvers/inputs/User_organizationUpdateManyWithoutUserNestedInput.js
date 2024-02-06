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
exports.User_organizationUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationCreateManyUserInputEnvelope_1 = require("../inputs/User_organizationCreateManyUserInputEnvelope");
const User_organizationCreateOrConnectWithoutUserInput_1 = require("../inputs/User_organizationCreateOrConnectWithoutUserInput");
const User_organizationCreateWithoutUserInput_1 = require("../inputs/User_organizationCreateWithoutUserInput");
const User_organizationScalarWhereInput_1 = require("../inputs/User_organizationScalarWhereInput");
const User_organizationUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/User_organizationUpdateManyWithWhereWithoutUserInput");
const User_organizationUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/User_organizationUpdateWithWhereUniqueWithoutUserInput");
const User_organizationUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/User_organizationUpsertWithWhereUniqueWithoutUserInput");
const User_organizationWhereUniqueInput_1 = require("../inputs/User_organizationWhereUniqueInput");
let User_organizationUpdateManyWithoutUserNestedInput = class User_organizationUpdateManyWithoutUserNestedInput {
};
exports.User_organizationUpdateManyWithoutUserNestedInput = User_organizationUpdateManyWithoutUserNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationCreateWithoutUserInput_1.User_organizationCreateWithoutUserInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationCreateOrConnectWithoutUserInput_1.User_organizationCreateOrConnectWithoutUserInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpsertWithWhereUniqueWithoutUserInput_1.User_organizationUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCreateManyUserInputEnvelope_1.User_organizationCreateManyUserInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpdateWithWhereUniqueWithoutUserInput_1.User_organizationUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpdateManyWithWhereWithoutUserInput_1.User_organizationUpdateManyWithWhereWithoutUserInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput_1.User_organizationScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.User_organizationUpdateManyWithoutUserNestedInput = User_organizationUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("User_organizationUpdateManyWithoutUserNestedInput", {})
], User_organizationUpdateManyWithoutUserNestedInput);
//# sourceMappingURL=User_organizationUpdateManyWithoutUserNestedInput.js.map