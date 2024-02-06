import {
  RelationResolversEnhanceMap,
  ResolversEnhanceMap,
  applyRelationResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "../../../prisma/__generated__/graphql";
import { organizationActionsConfig } from "./orgs";
import { teamActionsConfig } from "./team";
import { userActionsConfig, userRelationsConfig } from "./user";
import { userOrganizationActionsConfig } from "./user-org";
import { userOrgTeamActionsConfig } from "./user-org-team";
export const enhanceResolvers = () => {
  // join the actions config into a single resolvers enhance object
  const resolversEnhanceMap: ResolversEnhanceMap = {
    User: userActionsConfig,
    Organization : organizationActionsConfig,
    User_organization : userOrganizationActionsConfig,
    Team : teamActionsConfig,
    User_organization_team : userOrgTeamActionsConfig
  };
  const relationResolversEnhanceMap: RelationResolversEnhanceMap = {
    User: userRelationsConfig,
  };
  applyResolversEnhanceMap(resolversEnhanceMap);
  applyRelationResolversEnhanceMap(relationResolversEnhanceMap)
  return
};

