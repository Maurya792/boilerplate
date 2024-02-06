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
exports.UserResolver = exports.BaseResponse = void 0;
const core_1 = require("@mikro-orm/core");
const User_1 = require("../entities/User");
const authChecker_1 = require("../graphql/auth/authChecker");
const type_graphql_1 = require("type-graphql");
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let BaseResponse = class BaseResponse {
};
exports.BaseResponse = BaseResponse;
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], BaseResponse.prototype, "errors", void 0);
exports.BaseResponse = BaseResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], BaseResponse);
let UserResponse = class UserResponse extends BaseResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "name", void 0);
UpdateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateUserInput);
let UserResolver = class UserResolver {
    async users({ em }) {
        return em.find(User_1.User, {}, {
            orderBy: { createdAt: "ASC" },
            populate: ["trace"],
        });
    }
    async user(username, { em }) {
        if (!username) {
            return {
                errors: [{ field: "username", message: "Please provide a username!" }],
            };
        }
        const user = await em.findOne(User_1.User, { username }, { populate: ["trace"] });
        if (!user) {
            return {
                errors: [
                    { field: "username", message: "Please provide a valid username!" },
                ],
            };
        }
        return { user };
    }
    async updateUser(id, updates, { em }) {
        if (!id) {
            return {
                errors: [{ field: "id", message: "Please provide a user id!" }],
            };
        }
        const user = await em.findOne(User_1.User, { id }, { populate: ["trace"] });
        if (!user) {
            return {
                errors: [
                    { field: "username", message: "Please provide a valid username!" },
                ],
            };
        }
        (0, core_1.wrap)(user).assign(updates);
        await em.persistAndFlush(user);
        return { user };
    }
    async deleteUser(id, { em }) {
        try {
            const user = await em.findOne(User_1.User, { id });
            if (user) {
                await em.removeAndFlush(user);
                return true;
            }
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, authChecker_1.Authed)([User_1.USER_ROLE.admin]),
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, authChecker_1.Authed)([User_1.USER_ROLE.admin]),
    (0, type_graphql_1.Query)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("username", { nullable: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, authChecker_1.Authed)([User_1.USER_ROLE.admin]),
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("updates")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, authChecker_1.Authed)([User_1.USER_ROLE.admin]),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
//# sourceMappingURL=user.js.map