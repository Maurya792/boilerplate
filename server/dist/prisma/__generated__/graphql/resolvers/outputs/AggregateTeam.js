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
exports.AggregateTeam = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TeamAvgAggregate_1 = require("../outputs/TeamAvgAggregate");
const TeamCountAggregate_1 = require("../outputs/TeamCountAggregate");
const TeamMaxAggregate_1 = require("../outputs/TeamMaxAggregate");
const TeamMinAggregate_1 = require("../outputs/TeamMinAggregate");
const TeamSumAggregate_1 = require("../outputs/TeamSumAggregate");
let AggregateTeam = class AggregateTeam {
};
exports.AggregateTeam = AggregateTeam;
__decorate([
    TypeGraphQL.Field((_type) => TeamCountAggregate_1.TeamCountAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateTeam.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamAvgAggregate_1.TeamAvgAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateTeam.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamSumAggregate_1.TeamSumAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateTeam.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamMinAggregate_1.TeamMinAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateTeam.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TeamMaxAggregate_1.TeamMaxAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateTeam.prototype, "_max", void 0);
exports.AggregateTeam = AggregateTeam = __decorate([
    TypeGraphQL.ObjectType("AggregateTeam", {
        simpleResolvers: true,
    })
], AggregateTeam);
//# sourceMappingURL=AggregateTeam.js.map