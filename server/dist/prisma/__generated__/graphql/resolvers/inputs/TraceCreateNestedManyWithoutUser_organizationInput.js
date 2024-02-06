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
exports.TraceCreateNestedManyWithoutUser_organizationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TraceCreateManyUser_organizationInputEnvelope_1 = require("../inputs/TraceCreateManyUser_organizationInputEnvelope");
const TraceCreateOrConnectWithoutUser_organizationInput_1 = require("../inputs/TraceCreateOrConnectWithoutUser_organizationInput");
const TraceCreateWithoutUser_organizationInput_1 = require("../inputs/TraceCreateWithoutUser_organizationInput");
const TraceWhereUniqueInput_1 = require("../inputs/TraceWhereUniqueInput");
let TraceCreateNestedManyWithoutUser_organizationInput = class TraceCreateNestedManyWithoutUser_organizationInput {
};
exports.TraceCreateNestedManyWithoutUser_organizationInput = TraceCreateNestedManyWithoutUser_organizationInput;
__decorate([
    TypeGraphQL.Field((_type) => [TraceCreateWithoutUser_organizationInput_1.TraceCreateWithoutUser_organizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceCreateNestedManyWithoutUser_organizationInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TraceCreateOrConnectWithoutUser_organizationInput_1.TraceCreateOrConnectWithoutUser_organizationInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceCreateNestedManyWithoutUser_organizationInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TraceCreateManyUser_organizationInputEnvelope_1.TraceCreateManyUser_organizationInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceCreateNestedManyWithoutUser_organizationInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [TraceWhereUniqueInput_1.TraceWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], TraceCreateNestedManyWithoutUser_organizationInput.prototype, "connect", void 0);
exports.TraceCreateNestedManyWithoutUser_organizationInput = TraceCreateNestedManyWithoutUser_organizationInput = __decorate([
    TypeGraphQL.InputType("TraceCreateNestedManyWithoutUser_organizationInput", {})
], TraceCreateNestedManyWithoutUser_organizationInput);
//# sourceMappingURL=TraceCreateNestedManyWithoutUser_organizationInput.js.map