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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.USER_ROLE = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Trace_1 = require("./Trace");
const Organization_1 = require("./Organization");
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["admin"] = "admin";
    USER_ROLE["user"] = "user";
})(USER_ROLE || (exports.USER_ROLE = USER_ROLE = {}));
(0, type_graphql_1.registerEnumType)(USER_ROLE, {
    name: "USER_ROLE",
    description: "Possible roles for a user",
});
let User = class User {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.trace = new core_1.Collection(this);
        this.organizations = new core_1.Collection(this);
    }
};
exports.User = User;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.Property)({ type: "text", unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Trace_1.Trace], { nullable: true }),
    (0, core_1.OneToMany)(() => Trace_1.Trace, "user"),
    __metadata("design:type", Object)
], User.prototype, "trace", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => USER_ROLE, { nullable: true }),
    (0, core_1.Enum)({ items: () => USER_ROLE, default: USER_ROLE.user }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Organization_1.Organization], { nullable: true }),
    (0, core_1.ManyToMany)(() => Organization_1.Organization, org => org.members),
    __metadata("design:type", Object)
], User.prototype, "organizations", void 0);
exports.User = User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], User);
//# sourceMappingURL=User.js.map