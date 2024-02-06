/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Error on FieldError {\n  field\n  message\n}": types.ErrorFragmentDoc,
    "fragment CoreOrganization on Organization {\n  id\n  slug\n  name\n}": types.CoreOrganizationFragmentDoc,
    "fragment DetailOrganization on Organization {\n  id\n  slug\n  name\n  users {\n    ...DetailUser\n  }\n  teams {\n    ...DetailTeam\n  }\n}": types.DetailOrganizationFragmentDoc,
    "fragment CoreDetailTeam on Team {\n  id\n  name\n  organization_id\n}": types.CoreDetailTeamFragmentDoc,
    "fragment DetailTeam on Team {\n  id\n  name\n  organization_id\n  users {\n    ...DetailUser\n  }\n}": types.DetailTeamFragmentDoc,
    "fragment CoreUserOrganizationTeam on User_organization_team {\n  id\n  role\n  user_organization {\n    user_id\n  }\n  team_id\n}": types.CoreUserOrganizationTeamFragmentDoc,
    "fragment CoreUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  invitation_status\n  last_invited\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n}": types.CoreUserOrganizationFragmentDoc,
    "fragment DetailUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  organization {\n    ...DetailOrganization\n  }\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n  invitation_status\n  last_invited\n}": types.DetailUserOrganizationFragmentDoc,
    "fragment User on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}": types.UserFragmentDoc,
    "fragment DetailUser on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  user_organization(orgId: $orgId) {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}": types.DetailUserFragmentDoc,
    "mutation joinTeam($data: User_organization_teamCreateInput!) {\n  createOneUser_organization_team(data: $data) {\n    id\n  }\n}": types.JoinTeamDocument,
    "mutation CreateOrg($data: OrganizationCreateInput!) {\n  createOneOrganization(data: $data) {\n    ...CoreOrganization\n    user_organizations {\n      ...CoreUserOrganization\n    }\n  }\n}": types.CreateOrgDocument,
    "mutation createTeam($data: TeamCreateInput!, $orgId: Float) {\n  createOneTeam(data: $data) {\n    ...DetailTeam\n  }\n}": types.CreateTeamDocument,
    "mutation deleteOneUser_organization($data: User_organizationWhereUniqueInput!) {\n  deleteOneUser_organization(where: $data) {\n    user {\n      ...User\n    }\n    user_id\n  }\n}": types.DeleteOneUser_OrganizationDocument,
    "mutation deleteOneTeam($where: TeamWhereUniqueInput!) {\n  deleteOneTeam(where: $where) {\n    users {\n      ...User\n    }\n    id\n  }\n}": types.DeleteOneTeamDocument,
    "mutation forgotPassword($data: ForgotPasswordInput!) {\n  forgotPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}": types.ForgotPasswordDocument,
    "mutation inviteUser($data: InviteUserInput!) {\n  inviteUser(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}": types.InviteUserDocument,
    "mutation joinOrg($data: JoinOrgInput!) {\n  joinOrg(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n    isNewUser\n  }\n}": types.JoinOrgDocument,
    "mutation login($data: LoginInput!) {\n  login(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}": types.LoginDocument,
    "mutation register($data: RegisterInput!) {\n  register(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}": types.RegisterDocument,
    "mutation removeUserFromTeam($where: User_organization_teamWhereUniqueInput!) {\n  deleteOneUser_organization_team(where: $where) {\n    id\n  }\n}": types.RemoveUserFromTeamDocument,
    "mutation resetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}": types.ResetPasswordDocument,
    "mutation updateUserOrg($data: User_organizationUpdateInput!, $where: User_organizationWhereUniqueInput!) {\n  updateOneUser_organization(data: $data, where: $where) {\n    ...CoreUserOrganization\n  }\n}": types.UpdateUserOrgDocument,
    "mutation updateOneUser_organization_team($data: User_organization_teamUpdateInput!, $where: User_organization_teamWhereUniqueInput!) {\n  updateOneUser_organization_team(data: $data, where: $where) {\n    ...CoreUserOrganizationTeam\n  }\n}": types.UpdateOneUser_Organization_TeamDocument,
    "mutation verifyAccount($data: VerifyAccountInput!) {\n  verifyAccount(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}": types.VerifyAccountDocument,
    "query user_organization($data: User_organizationWhereUniqueInput!, $orgId: Float) {\n  user_organization(where: $data) {\n    ...DetailUserOrganization\n  }\n}": types.User_OrganizationDocument,
    "query getUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    ...User\n  }\n}": types.GetUserDocument,
    "query Users {\n  users {\n    ...User\n  }\n}": types.UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Error on FieldError {\n  field\n  message\n}"): (typeof documents)["fragment Error on FieldError {\n  field\n  message\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CoreOrganization on Organization {\n  id\n  slug\n  name\n}"): (typeof documents)["fragment CoreOrganization on Organization {\n  id\n  slug\n  name\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DetailOrganization on Organization {\n  id\n  slug\n  name\n  users {\n    ...DetailUser\n  }\n  teams {\n    ...DetailTeam\n  }\n}"): (typeof documents)["fragment DetailOrganization on Organization {\n  id\n  slug\n  name\n  users {\n    ...DetailUser\n  }\n  teams {\n    ...DetailTeam\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CoreDetailTeam on Team {\n  id\n  name\n  organization_id\n}"): (typeof documents)["fragment CoreDetailTeam on Team {\n  id\n  name\n  organization_id\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DetailTeam on Team {\n  id\n  name\n  organization_id\n  users {\n    ...DetailUser\n  }\n}"): (typeof documents)["fragment DetailTeam on Team {\n  id\n  name\n  organization_id\n  users {\n    ...DetailUser\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CoreUserOrganizationTeam on User_organization_team {\n  id\n  role\n  user_organization {\n    user_id\n  }\n  team_id\n}"): (typeof documents)["fragment CoreUserOrganizationTeam on User_organization_team {\n  id\n  role\n  user_organization {\n    user_id\n  }\n  team_id\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CoreUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  invitation_status\n  last_invited\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n}"): (typeof documents)["fragment CoreUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  invitation_status\n  last_invited\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DetailUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  organization {\n    ...DetailOrganization\n  }\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n  invitation_status\n  last_invited\n}"): (typeof documents)["fragment DetailUserOrganization on User_organization {\n  id\n  role\n  user_id\n  slug\n  organization_id\n  organization {\n    ...DetailOrganization\n  }\n  user_organization_teams {\n    ...CoreUserOrganizationTeam\n  }\n  invitation_status\n  last_invited\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment User on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}"): (typeof documents)["fragment User on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DetailUser on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  user_organization(orgId: $orgId) {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}"): (typeof documents)["fragment DetailUser on User {\n  id\n  username\n  name\n  status\n  user_organizations {\n    ...CoreUserOrganization\n  }\n  user_organization(orgId: $orgId) {\n    ...CoreUserOrganization\n  }\n  organizations {\n    ...CoreOrganization\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation joinTeam($data: User_organization_teamCreateInput!) {\n  createOneUser_organization_team(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation joinTeam($data: User_organization_teamCreateInput!) {\n  createOneUser_organization_team(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrg($data: OrganizationCreateInput!) {\n  createOneOrganization(data: $data) {\n    ...CoreOrganization\n    user_organizations {\n      ...CoreUserOrganization\n    }\n  }\n}"): (typeof documents)["mutation CreateOrg($data: OrganizationCreateInput!) {\n  createOneOrganization(data: $data) {\n    ...CoreOrganization\n    user_organizations {\n      ...CoreUserOrganization\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createTeam($data: TeamCreateInput!, $orgId: Float) {\n  createOneTeam(data: $data) {\n    ...DetailTeam\n  }\n}"): (typeof documents)["mutation createTeam($data: TeamCreateInput!, $orgId: Float) {\n  createOneTeam(data: $data) {\n    ...DetailTeam\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation deleteOneUser_organization($data: User_organizationWhereUniqueInput!) {\n  deleteOneUser_organization(where: $data) {\n    user {\n      ...User\n    }\n    user_id\n  }\n}"): (typeof documents)["mutation deleteOneUser_organization($data: User_organizationWhereUniqueInput!) {\n  deleteOneUser_organization(where: $data) {\n    user {\n      ...User\n    }\n    user_id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation deleteOneTeam($where: TeamWhereUniqueInput!) {\n  deleteOneTeam(where: $where) {\n    users {\n      ...User\n    }\n    id\n  }\n}"): (typeof documents)["mutation deleteOneTeam($where: TeamWhereUniqueInput!) {\n  deleteOneTeam(where: $where) {\n    users {\n      ...User\n    }\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation forgotPassword($data: ForgotPasswordInput!) {\n  forgotPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"): (typeof documents)["mutation forgotPassword($data: ForgotPasswordInput!) {\n  forgotPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation inviteUser($data: InviteUserInput!) {\n  inviteUser(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"): (typeof documents)["mutation inviteUser($data: InviteUserInput!) {\n  inviteUser(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation joinOrg($data: JoinOrgInput!) {\n  joinOrg(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n    isNewUser\n  }\n}"): (typeof documents)["mutation joinOrg($data: JoinOrgInput!) {\n  joinOrg(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n    isNewUser\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation login($data: LoginInput!) {\n  login(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}"): (typeof documents)["mutation login($data: LoginInput!) {\n  login(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation register($data: RegisterInput!) {\n  register(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"): (typeof documents)["mutation register($data: RegisterInput!) {\n  register(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation removeUserFromTeam($where: User_organization_teamWhereUniqueInput!) {\n  deleteOneUser_organization_team(where: $where) {\n    id\n  }\n}"): (typeof documents)["mutation removeUserFromTeam($where: User_organization_teamWhereUniqueInput!) {\n  deleteOneUser_organization_team(where: $where) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation resetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}"): (typeof documents)["mutation resetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data) {\n    errors {\n      ...Error\n    }\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateUserOrg($data: User_organizationUpdateInput!, $where: User_organizationWhereUniqueInput!) {\n  updateOneUser_organization(data: $data, where: $where) {\n    ...CoreUserOrganization\n  }\n}"): (typeof documents)["mutation updateUserOrg($data: User_organizationUpdateInput!, $where: User_organizationWhereUniqueInput!) {\n  updateOneUser_organization(data: $data, where: $where) {\n    ...CoreUserOrganization\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateOneUser_organization_team($data: User_organization_teamUpdateInput!, $where: User_organization_teamWhereUniqueInput!) {\n  updateOneUser_organization_team(data: $data, where: $where) {\n    ...CoreUserOrganizationTeam\n  }\n}"): (typeof documents)["mutation updateOneUser_organization_team($data: User_organization_teamUpdateInput!, $where: User_organization_teamWhereUniqueInput!) {\n  updateOneUser_organization_team(data: $data, where: $where) {\n    ...CoreUserOrganizationTeam\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation verifyAccount($data: VerifyAccountInput!) {\n  verifyAccount(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"): (typeof documents)["mutation verifyAccount($data: VerifyAccountInput!) {\n  verifyAccount(data: $data) {\n    errors {\n      ...Error\n    }\n    isSuccess\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query user_organization($data: User_organizationWhereUniqueInput!, $orgId: Float) {\n  user_organization(where: $data) {\n    ...DetailUserOrganization\n  }\n}"): (typeof documents)["query user_organization($data: User_organizationWhereUniqueInput!, $orgId: Float) {\n  user_organization(where: $data) {\n    ...DetailUserOrganization\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    ...User\n  }\n}"): (typeof documents)["query getUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    ...User\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Users {\n  users {\n    ...User\n  }\n}"): (typeof documents)["query Users {\n  users {\n    ...User\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;