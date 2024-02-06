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
exports.ResponseError = exports.FieldError = exports.UsernamePassWordInput = void 0;
const type_graphql_1 = require("type-graphql");
let UsernamePassWordInput = class UsernamePassWordInput {
};
exports.UsernamePassWordInput = UsernamePassWordInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UsernamePassWordInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UsernamePassWordInput.prototype, "password", void 0);
exports.UsernamePassWordInput = UsernamePassWordInput = __decorate([
    (0, type_graphql_1.InputType)()
], UsernamePassWordInput);
let FieldError = class FieldError {
};
exports.FieldError = FieldError;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
exports.FieldError = FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let ResponseError = class ResponseError {
};
exports.ResponseError = ResponseError;
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], ResponseError.prototype, "errors", void 0);
exports.ResponseError = ResponseError = __decorate([
    (0, type_graphql_1.ObjectType)()
], ResponseError);
//# sourceMappingURL=types.js.map