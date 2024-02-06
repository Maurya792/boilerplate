"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enhanceResolvers = void 0;
const graphql_1 = require("../../../prisma/__generated__/graphql");
const orgs_1 = require("./orgs");
const team_1 = require("./team");
const user_1 = require("./user");
const user_org_1 = require("./user-org");
const user_org_team_1 = require("./user-org-team");
const enhanceResolvers = () => {
    const resolversEnhanceMap = {
        User: user_1.userActionsConfig,
        Organization: orgs_1.organizationActionsConfig,
        User_organization: user_org_1.userOrganizationActionsConfig,
        Team: team_1.teamActionsConfig,
        User_organization_team: user_org_team_1.userOrgTeamActionsConfig
    };
    const relationResolversEnhanceMap = {
        User: user_1.userRelationsConfig,
    };
    (0, graphql_1.applyResolversEnhanceMap)(resolversEnhanceMap);
    (0, graphql_1.applyRelationResolversEnhanceMap)(relationResolversEnhanceMap);
    return;
};
exports.enhanceResolvers = enhanceResolvers;
//# sourceMappingURL=index.js.map