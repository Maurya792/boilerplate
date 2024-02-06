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
exports.Organization = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let Organization = class Organization {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.members = new core_1.Collection(this);
        this.admins = new core_1.Collection(this);
    }
};
exports.Organization = Organization;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Organization.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Object)
], Organization.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Organization.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Organization.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User], { nullable: true }),
    (0, core_1.ManyToMany)(() => User_1.User),
    __metadata("design:type", Object)
], Organization.prototype, "members", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User], { nullable: true }),
    (0, core_1.ManyToMany)(() => User_1.User),
    __metadata("design:type", Object)
], Organization.prototype, "admins", void 0);
exports.Organization = Organization = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Organization);
//# sourceMappingURL=Organization.js.map