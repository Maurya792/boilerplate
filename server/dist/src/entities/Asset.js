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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Trace_1 = require("./Trace");
let Asset = class Asset {
};
exports.Asset = Asset;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Asset.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Date)
], Asset.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Trace_1.Trace),
    (0, core_1.ManyToOne)(() => Trace_1.Trace),
    __metadata("design:type", typeof (_a = typeof Trace_1.Trace !== "undefined" && Trace_1.Trace) === "function" ? _a : Object)
], Asset.prototype, "trace", void 0);
exports.Asset = Asset = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Asset);
//# sourceMappingURL=Asset.js.map