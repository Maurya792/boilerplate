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
exports.Log = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Trace_1 = require("./Trace");
let Log = class Log {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
exports.Log = Log;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Object)
], Log.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Log.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Date)
], Log.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Date)
], Log.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, core_1.Property)(),
    __metadata("design:type", Boolean)
], Log.prototype, "isActive", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Log.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Trace_1.Trace, { nullable: true }),
    (0, core_1.ManyToOne)(() => Trace_1.Trace),
    __metadata("design:type", Trace_1.Trace)
], Log.prototype, "trace", void 0);
exports.Log = Log = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Log);
//# sourceMappingURL=Log.js.map