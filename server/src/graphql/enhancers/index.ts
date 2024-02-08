import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "../../../prisma/__generated__/graphql";
import { userActionsConfig } from "./user";

export const enhanceResolvers = () => {
  // join the actions config into a single resolvers enhance object
  const resolversEnhanceMap: ResolversEnhanceMap = {
    User: userActionsConfig,
  };
  applyResolversEnhanceMap(resolversEnhanceMap);

  return;
};
