"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enhanceResolvers = void 0;
const graphql_1 = require("../../../prisma/__generated__/graphql");
const user_1 = require("./user");
const enhanceResolvers = () => {
    const resolversEnhanceMap = {
        User: user_1.userActionsConfig,
    };
    (0, graphql_1.applyResolversEnhanceMap)(resolversEnhanceMap);
    return;
};
exports.enhanceResolvers = enhanceResolvers;
//# sourceMappingURL=index.js.map