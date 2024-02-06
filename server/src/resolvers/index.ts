import * as authResolverImport from './auth/resolver'
import * as userOrgResolverImport from './user-org-actions/resolver'
const authResolvers = Object.values(authResolverImport)
const userOrgResolvers = Object.values(userOrgResolverImport)
export const customResolvers = [...authResolvers, ...userOrgResolvers]