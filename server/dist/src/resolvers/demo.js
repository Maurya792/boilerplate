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
exports.CustomUserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("../../prisma/__generated__/graphql");
const types_1 = require("./auth/types");
let RegisterResponse = class RegisterResponse extends types_1.ResponseError {
};
__decorate([
    (0, type_graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], RegisterResponse.prototype, "isSuccess", void 0);
RegisterResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], RegisterResponse);
let CustomUserResolver = class CustomUserResolver {
    async me({ prisma, user }) {
        if (!user) {
            return null;
        }
        const userFound = await prisma.user.findUnique({
            where: { id: user.userId },
        });
        return userFound;
    }
    async register({ prisma }) {
        return {
            errors: [
                {
                    field: "null",
                    message: "Server error.",
                },
            ],
        };
    }
};
exports.CustomUserResolver = CustomUserResolver;
__decorate([
    (0, type_graphql_1.Query)(() => graphql_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomUserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => RegisterResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomUserResolver.prototype, "register", null);
exports.CustomUserResolver = CustomUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CustomUserResolver);
//# sourceMappingURL=demo.js.map