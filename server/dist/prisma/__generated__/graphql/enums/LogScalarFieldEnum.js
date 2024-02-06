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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var LogScalarFieldEnum;
(function (LogScalarFieldEnum) {
    LogScalarFieldEnum["id"] = "id";
    LogScalarFieldEnum["created_at"] = "created_at";
    LogScalarFieldEnum["updated_at"] = "updated_at";
    LogScalarFieldEnum["start_time"] = "start_time";
    LogScalarFieldEnum["end_time"] = "end_time";
    LogScalarFieldEnum["is_active"] = "is_active";
    LogScalarFieldEnum["status"] = "status";
    LogScalarFieldEnum["trace_id"] = "trace_id";
})(LogScalarFieldEnum || (exports.LogScalarFieldEnum = LogScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LogScalarFieldEnum, {
    name: "LogScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=LogScalarFieldEnum.js.map