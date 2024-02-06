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
exports.User_organization_teamUpdateManyWithoutTeamNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organization_teamCreateManyTeamInputEnvelope_1 = require("../inputs/User_organization_teamCreateManyTeamInputEnvelope");
const User_organization_teamCreateOrConnectWithoutTeamInput_1 = require("../inputs/User_organization_teamCreateOrConnectWithoutTeamInput");
const User_organization_teamCreateWithoutTeamInput_1 = require("../inputs/User_organization_teamCreateWithoutTeamInput");
const User_organization_teamScalarWhereInput_1 = require("../inputs/User_organization_teamScalarWhereInput");
const User_organization_teamUpdateManyWithWhereWithoutTeamInput_1 = require("../inputs/User_organization_teamUpdateManyWithWhereWithoutTeamInput");
const User_organization_teamUpdateWithWhereUniqueWithoutTeamInput_1 = require("../inputs/User_organization_teamUpdateWithWhereUniqueWithoutTeamInput");
const User_organization_teamUpsertWithWhereUniqueWithoutTeamInput_1 = require("../inputs/User_organization_teamUpsertWithWhereUniqueWithoutTeamInput");
const User_organization_teamWhereUniqueInput_1 = require("../inputs/User_organization_teamWhereUniqueInput");
let User_organization_teamUpdateManyWithoutTeamNestedInput = class User_organization_teamUpdateManyWithoutTeamNestedInput {
};
exports.User_organization_teamUpdateManyWithoutTeamNestedInput = User_organization_teamUpdateManyWithoutTeamNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamCreateWithoutTeamInput_1.User_organization_teamCreateWithoutTeamInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamCreateOrConnectWithoutTeamInput_1.User_organization_teamCreateOrConnectWithoutTeamInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamUpsertWithWhereUniqueWithoutTeamInput_1.User_organization_teamUpsertWithWhereUniqueWithoutTeamInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => User_organization_teamCreateManyTeamInputEnvelope_1.User_organization_teamCreateManyTeamInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput_1.User_organization_teamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput_1.User_organization_teamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput_1.User_organization_teamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamWhereUniqueInput_1.User_organization_teamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamUpdateWithWhereUniqueWithoutTeamInput_1.User_organization_teamUpdateWithWhereUniqueWithoutTeamInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamUpdateManyWithWhereWithoutTeamInput_1.User_organization_teamUpdateManyWithWhereWithoutTeamInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [User_organization_teamScalarWhereInput_1.User_organization_teamScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], User_organization_teamUpdateManyWithoutTeamNestedInput.prototype, "deleteMany", void 0);
exports.User_organization_teamUpdateManyWithoutTeamNestedInput = User_organization_teamUpdateManyWithoutTeamNestedInput = __decorate([
    TypeGraphQL.InputType("User_organization_teamUpdateManyWithoutTeamNestedInput", {})
], User_organization_teamUpdateManyWithoutTeamNestedInput);
//# sourceMappingURL=User_organization_teamUpdateManyWithoutTeamNestedInput.js.map