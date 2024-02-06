import * as exOrganizationResolverImport from './organization'
import * as exUserResolverImport from './user'
import * as exTeamResolverImport from './team'
const exOrganizationResolvers = Object.values(exOrganizationResolverImport)
const exUserResolvers = Object.values(exUserResolverImport)
const exTeamResolvers = Object.values(exTeamResolverImport)
export const fieldResolvers = [...exOrganizationResolvers, ...exUserResolvers, ...exTeamResolvers]