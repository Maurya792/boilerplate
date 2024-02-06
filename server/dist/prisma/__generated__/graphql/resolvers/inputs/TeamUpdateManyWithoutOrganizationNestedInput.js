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
exports.TeamUpdateManyWithoutOrganizationNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TeamCreateManyOrganizationInputEnvelope_1 = require("../inputs/TeamCreateManyOrganizationInputEnvelope");
const TeamCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/TeamCreateOrConnectWithoutOrganizationInput");
const TeamCreateWithoutOrganizationInput_1 = require("../inputs/TeamCreateWithoutOrganizationInput");
const TeamScalarWhereInput_1 = require("../inputs/TeamScalarWhereInput");
const TeamUpdateManyWithWhereWithoutOrganizationInput_1 = require("../inputs/TeamUpdateManyWithWhereWithoutOrganizationInput");
const TeamUpdateWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/TeamUpdateWithWhereUniqueWithoutOrganizationInput");
const TeamUpsertWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/TeamUpsertWithWhereUniqueWithoutOrganizationInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamUpdateManyWithoutOrganizationNestedInput = class TeamUpdateManyWithoutOrganizationNestedInput {
};
exports.TeamUpdateManyWithoutOrganizationNestedInput = TeamUpdateManyWithoutOrganizationNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [TeamCreateWithoutOrganizationInput_1.TeamCreateWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamCreateOrConnectWithoutOrganizationInput_1.TeamCreateOrConnectWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamUpsertWithWhereUniqueWithoutOrganizationInput_1.TeamUpsertWithWhereUniqueWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamCreateManyOrganizationInputEnvelope_1.TeamCreateManyOrganizationInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamWhereUniqueInput_1.TeamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamWhereUniqueInput_1.TeamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamWhereUniqueInput_1.TeamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamWhereUniqueInput_1.TeamWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamUpdateWithWhereUniqueWithoutOrganizationInput_1.TeamUpdateWithWhereUniqueWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamUpdateManyWithWhereWithoutOrganizationInput_1.TeamUpdateManyWithWhereWithoutOrganizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TeamScalarWhereInput_1.TeamScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TeamUpdateManyWithoutOrganizationNestedInput.prototype, "deleteMany", void 0);
exports.TeamUpdateManyWithoutOrganizationNestedInput = TeamUpdateManyWithoutOrganizationNestedInput = __decorate([
    TypeGraphQL.InputType("TeamUpdateManyWithoutOrganizationNestedInput", {})
], TeamUpdateManyWithoutOrganizationNestedInput);
//# sourceMappingURL=TeamUpdateManyWithoutOrganizationNestedInput.js.map