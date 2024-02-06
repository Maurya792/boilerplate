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
exports.user_invitation_status = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var user_invitation_status;
(function (user_invitation_status) {
    user_invitation_status["notConnected"] = "notConnected";
    user_invitation_status["invited"] = "invited";
    user_invitation_status["connected"] = "connected";
})(user_invitation_status || (exports.user_invitation_status = user_invitation_status = {}));
TypeGraphQL.registerEnumType(user_invitation_status, {
    name: "user_invitation_status",
    description: undefined,
});
//# sourceMappingURL=user_invitation_status.js.map