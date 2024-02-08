import * as authResolverImport from "./auth/resolver";
const authResolvers = Object.values(authResolverImport);
export const customResolvers = [...authResolvers];
