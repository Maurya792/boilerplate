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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_organizationCount = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationCountTracesArgs_1 = require("./args/User_organizationCountTracesArgs");
const User_organizationCountUser_organization_teamsArgs_1 = require("./args/User_organizationCountUser_organization_teamsArgs");
let User_organizationCount = class User_organizationCount {
    getTraces(root, args) {
        return root.traces;
    }
    getUser_organization_teams(root, args) {
        return root.user_organization_teams;
    }
};
exports.User_organizationCount = User_organizationCount;
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        name: "traces",
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organizationCount,
        User_organizationCountTracesArgs_1.User_organizationCountTracesArgs]),
    __metadata("design:returntype", Number)
], User_organizationCount.prototype, "getTraces", null);
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        name: "user_organization_teams",
        nullable: false,
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_organizationCount,
        User_organizationCountUser_organization_teamsArgs_1.User_organizationCountUser_organization_teamsArgs]),
    __metadata("design:returntype", Number)
], User_organizationCount.prototype, "getUser_organization_teams", null);
exports.User_organizationCount = User_organizationCount = __decorate([
    TypeGraphQL.ObjectType("User_organizationCount", {
        simpleResolvers: true,
    })
], User_organizationCount);
//# sourceMappingURL=User_organizationCount.js.map