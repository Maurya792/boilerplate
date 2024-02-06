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
exports.User_organizationScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var User_organizationScalarFieldEnum;
(function (User_organizationScalarFieldEnum) {
    User_organizationScalarFieldEnum["id"] = "id";
    User_organizationScalarFieldEnum["role"] = "role";
    User_organizationScalarFieldEnum["user_id"] = "user_id";
    User_organizationScalarFieldEnum["slug"] = "slug";
    User_organizationScalarFieldEnum["organization_id"] = "organization_id";
    User_organizationScalarFieldEnum["invitation_status"] = "invitation_status";
    User_organizationScalarFieldEnum["last_invited"] = "last_invited";
})(User_organizationScalarFieldEnum || (exports.User_organizationScalarFieldEnum = User_organizationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(User_organizationScalarFieldEnum, {
    name: "User_organizationScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=User_organizationScalarFieldEnum.js.map