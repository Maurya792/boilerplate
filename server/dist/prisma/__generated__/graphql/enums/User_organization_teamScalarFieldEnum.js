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
exports.User_organization_teamScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var User_organization_teamScalarFieldEnum;
(function (User_organization_teamScalarFieldEnum) {
    User_organization_teamScalarFieldEnum["id"] = "id";
    User_organization_teamScalarFieldEnum["team_id"] = "team_id";
    User_organization_teamScalarFieldEnum["user_organization_id"] = "user_organization_id";
    User_organization_teamScalarFieldEnum["role"] = "role";
})(User_organization_teamScalarFieldEnum || (exports.User_organization_teamScalarFieldEnum = User_organization_teamScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(User_organization_teamScalarFieldEnum, {
    name: "User_organization_teamScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=User_organization_teamScalarFieldEnum.js.map