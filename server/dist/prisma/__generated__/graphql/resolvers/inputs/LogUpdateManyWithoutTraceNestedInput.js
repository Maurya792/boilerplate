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
exports.LogUpdateManyWithoutTraceNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LogCreateManyTraceInputEnvelope_1 = require("../inputs/LogCreateManyTraceInputEnvelope");
const LogCreateOrConnectWithoutTraceInput_1 = require("../inputs/LogCreateOrConnectWithoutTraceInput");
const LogCreateWithoutTraceInput_1 = require("../inputs/LogCreateWithoutTraceInput");
const LogScalarWhereInput_1 = require("../inputs/LogScalarWhereInput");
const LogUpdateManyWithWhereWithoutTraceInput_1 = require("../inputs/LogUpdateManyWithWhereWithoutTraceInput");
const LogUpdateWithWhereUniqueWithoutTraceInput_1 = require("../inputs/LogUpdateWithWhereUniqueWithoutTraceInput");
const LogUpsertWithWhereUniqueWithoutTraceInput_1 = require("../inputs/LogUpsertWithWhereUniqueWithoutTraceInput");
const LogWhereUniqueInput_1 = require("../inputs/LogWhereUniqueInput");
let LogUpdateManyWithoutTraceNestedInput = class LogUpdateManyWithoutTraceNestedInput {
};
exports.LogUpdateManyWithoutTraceNestedInput = LogUpdateManyWithoutTraceNestedInput;
__decorate([
    TypeGraphQL.Field((_type) => [LogCreateWithoutTraceInput_1.LogCreateWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogCreateOrConnectWithoutTraceInput_1.LogCreateOrConnectWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogUpsertWithWhereUniqueWithoutTraceInput_1.LogUpsertWithWhereUniqueWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field((_type) => LogCreateManyTraceInputEnvelope_1.LogCreateManyTraceInputEnvelope, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogWhereUniqueInput_1.LogWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogWhereUniqueInput_1.LogWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogWhereUniqueInput_1.LogWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogWhereUniqueInput_1.LogWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogUpdateWithWhereUniqueWithoutTraceInput_1.LogUpdateWithWhereUniqueWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogUpdateManyWithWhereWithoutTraceInput_1.LogUpdateManyWithWhereWithoutTraceInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field((_type) => [LogScalarWhereInput_1.LogScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], LogUpdateManyWithoutTraceNestedInput.prototype, "deleteMany", void 0);
exports.LogUpdateManyWithoutTraceNestedInput = LogUpdateManyWithoutTraceNestedInput = __decorate([
    TypeGraphQL.InputType("LogUpdateManyWithoutTraceNestedInput", {})
], LogUpdateManyWithoutTraceNestedInput);
//# sourceMappingURL=LogUpdateManyWithoutTraceNestedInput.js.map