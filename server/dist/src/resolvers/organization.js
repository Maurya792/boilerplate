"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgResolver = void 0;
const User_1 = require("../entities/User");
const authChecker_1 = require("../graphql/auth/authChecker");
const type_graphql_1 = require("type-graphql");
let OrgResolver = class OrgResolver {
    async users({ em }) {
        return em.find(User_1.User, {}, {
            orderBy: { createdAt: "ASC" },
            populate: ["trace"],
        });
    }
};
exports.OrgResolver = OrgResolver;
__decorate([
    (0, authChecker_1.Authed)([User_1.USER_ROLE.admin]),
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrgResolver.prototype, "users", null);
exports.OrgResolver = OrgResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], OrgResolver);
//# sourceMappingURL=organization.js.map