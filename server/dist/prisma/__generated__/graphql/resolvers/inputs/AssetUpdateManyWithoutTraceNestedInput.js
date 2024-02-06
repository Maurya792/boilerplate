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
exports.AssetUpdateManyWithoutTraceNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AssetCreateManyTraceInputEnvelope_1 = require("../inputs/AssetCreateManyTraceInputEnvelope");
const AssetCreateOrConnectWithoutTraceInput_1 = require("../inputs/AssetCreateOrConnectWithoutTraceInput");
const AssetCreateWithoutTraceInput_1 = require("../inputs/AssetCreateWithoutTraceInput");
const AssetScalarWhereInput_1 = require("../inputs/AssetScalarWhereInput");
const AssetUpdateManyWithWhereWithoutTraceInput_1 = require("../inputs/AssetUpdateManyWithWhereWithoutTraceInput");
const AssetUpdateWithWhereUniqueWithoutTraceInput_1 = require("../inputs/AssetUpdateWithWhereUniqueWithoutTraceInput");
const AssetUpsertWithWhereUniqueWithoutTraceInput_1 = require("../inputs/AssetUpsertWithWhereUniqueWithoutTraceInput");
const AssetWhereUniqueInput_1 = require("../inputs/AssetWhereUniqueInput");
let AssetUpdateManyWithoutTraceNestedInput = class AssetUpdateManyWithoutTraceNestedInput {
};
exports.AssetUpdateManyWithoutTraceNestedInput = AssetUpdateManyWithoutTraceNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [AssetCreateWithoutTraceInput_1.AssetCreateWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetCreateOrConnectWithoutTraceInput_1.AssetCreateOrConnectWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetUpsertWithWhereUniqueWithoutTraceInput_1.AssetUpsertWithWhereUniqueWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => AssetCreateManyTraceInputEnvelope_1.AssetCreateManyTraceInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetWhereUniqueInput_1.AssetWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetWhereUniqueInput_1.AssetWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetWhereUniqueInput_1.AssetWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetWhereUniqueInput_1.AssetWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetUpdateWithWhereUniqueWithoutTraceInput_1.AssetUpdateWithWhereUniqueWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetUpdateManyWithWhereWithoutTraceInput_1.AssetUpdateManyWithWhereWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [AssetScalarWhereInput_1.AssetScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AssetUpdateManyWithoutTraceNestedInput.prototype, "deleteMany", void 0);
exports.AssetUpdateManyWithoutTraceNestedInput = AssetUpdateManyWithoutTraceNestedInput = __decorate([
    TypeGraphQL.InputType("AssetUpdateManyWithoutTraceNestedInput", {})
], AssetUpdateManyWithoutTraceNestedInput);
//# sourceMappingURL=AssetUpdateManyWithoutTraceNestedInput.js.map