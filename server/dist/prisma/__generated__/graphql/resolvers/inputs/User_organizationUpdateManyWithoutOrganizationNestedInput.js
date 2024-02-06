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
exports.User_organizationUpdateManyWithoutOrganizationNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationCreateManyOrganizationInputEnvelope_1 = require("../inputs/User_organizationCreateManyOrganizationInputEnvelope");
const User_organizationCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/User_organizationCreateOrConnectWithoutOrganizationInput");
const User_organizationCreateWithoutOrganizationInput_1 = require("../inputs/User_organizationCreateWithoutOrganizationInput");
const User_organizationScalarWhereInput_1 = require("../inputs/User_organizationScalarWhereInput");
const User_organizationUpdateManyWithWhereWithoutOrganizationInput_1 = require("../inputs/User_organizationUpdateManyWithWhereWithoutOrganizationInput");
const User_organizationUpdateWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/User_organizationUpdateWithWhereUniqueWithoutOrganizationInput");
const User_organizationUpsertWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/User_organizationUpsertWithWhereUniqueWithoutOrganizationInput");
const User_organizationWhereUniqueInput_1 = require("../inputs/User_organizationWhereUniqueInput");
let User_organizationUpdateManyWithoutOrganizationNestedInput = class User_organizationUpdateManyWithoutOrganizationNestedInput {
};
exports.User_organizationUpdateManyWithoutOrganizationNestedInput = User_organizationUpdateManyWithoutOrganizationNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationCreateWithoutOrganizationInput_1.User_organizationCreateWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationCreateOrConnectWithoutOrganizationInput_1.User_organizationCreateOrConnectWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpsertWithWhereUniqueWithoutOrganizationInput_1.User_organizationUpsertWithWhereUniqueWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organizationCreateManyOrganizationInputEnvelope_1.User_organizationCreateManyOrganizationInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationWhereUniqueInput_1.User_organizationWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpdateWithWhereUniqueWithoutOrganizationInput_1.User_organizationUpdateWithWhereUniqueWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationUpdateManyWithWhereWithoutOrganizationInput_1.User_organizationUpdateManyWithWhereWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organizationScalarWhereInput_1.User_organizationScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organizationUpdateManyWithoutOrganizationNestedInput.prototype, "deleteMany", void 0);
exports.User_organizationUpdateManyWithoutOrganizationNestedInput = User_organizationUpdateManyWithoutOrganizationNestedInput = __decorate([
    TypeGraphQL.InputType("User_organizationUpdateManyWithoutOrganizationNestedInput", {})
], User_organizationUpdateManyWithoutOrganizationNestedInput);
//# sourceMappingURL=User_organizationUpdateManyWithoutOrganizationNestedInput.js.map