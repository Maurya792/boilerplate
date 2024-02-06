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
exports.GroupByUser_organization_teamResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GroupByUser_organization_teamArgs_1 = require("./args/GroupByUser_organization_teamArgs");
const User_organization_team_1 = require("../../../models/User_organization_team");
const User_organization_teamGroupBy_1 = require("../../outputs/User_organization_teamGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUser_organization_teamResolver = class GroupByUser_organization_teamResolver {
    async groupByUser_organization_team(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user_organization_team.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
exports.GroupByUser_organization_teamResolver = GroupByUser_organization_teamResolver;
__decorate([
    TypeGraphQL.Query((_returns) => [User_organization_teamGroupBy_1.User_organization_teamGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUser_organization_teamArgs_1.GroupByUser_organization_teamArgs]),
    __metadata("design:returntype", Promise)
], GroupByUser_organization_teamResolver.prototype, "groupByUser_organization_team", null);
exports.GroupByUser_organization_teamResolver = GroupByUser_organization_teamResolver = __decorate([
    TypeGraphQL.Resolver((_of) => User_organization_team_1.User_organization_team)
], GroupByUser_organization_teamResolver);
//# sourceMappingURL=GroupByUser_organization_teamResolver.js.map