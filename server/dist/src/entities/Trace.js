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
exports.Trace = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Asset_1 = require("./Asset");
const User_1 = require("./User");
const Part_1 = require("./Part");
const Log_1 = require("./Log");
let Trace = class Trace {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.images = new core_1.Collection(this);
        this.parts = new core_1.Collection(this);
        this.logs = new core_1.Collection(this);
    }
};
exports.Trace = Trace;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Trace.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Object)
], Trace.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Trace.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Asset_1.Asset]),
    (0, core_1.OneToMany)(() => Asset_1.Asset, "trace", { orphanRemoval: true, orderBy: { date: "DESC" } }),
    __metadata("design:type", Object)
], Trace.prototype, "images", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    (0, core_1.Property)({ type: "numeric" }),
    __metadata("design:type", Number)
], Trace.prototype, "activeTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    (0, core_1.Property)({ type: "numeric" }),
    __metadata("design:type", Number)
], Trace.prototype, "inActiveTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    (0, core_1.Property)({ type: "numeric" }),
    __metadata("design:type", Number)
], Trace.prototype, "allTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Date)
], Trace.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, core_1.ManyToOne)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Trace.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Part_1.Part], { nullable: true }),
    (0, core_1.OneToMany)(() => Part_1.Part, "trace", { orphanRemoval: true }),
    __metadata("design:type", Object)
], Trace.prototype, "parts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Log_1.Log], { nullable: true }),
    (0, core_1.OneToMany)(() => Log_1.Log, "trace", { orphanRemoval: true }),
    __metadata("design:type", Object)
], Trace.prototype, "logs", void 0);
exports.Trace = Trace = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Trace);
//# sourceMappingURL=Trace.js.map