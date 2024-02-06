"use server";

import { revalidatePath } from "next/cache";
import { _apolloClient } from "../lib/apollo/apollo-client/client";
import {
  CreateOrgDocument,
  DeleteOneUser_OrganizationDocument,
  OrganizationCreateInput,
  UpdateUserOrgDocument,
  User_OrganizationDocument,
  User_OrganizationUpdateInput,
  User_OrganizationWhereUniqueInput,
} from "../__generated__/graphql/graphql";

export const createOrg = async (values: OrganizationCreateInput) => {
  const org = await _apolloClient.mutate({
    mutation: CreateOrgDocument,
    variables: { data: values },
  });
  revalidatePath("/(dashboard)/");
  return org;
};

export const userOrg = async (value: User_OrganizationWhereUniqueInput) => {
  const org = await _apolloClient.query({
    query: User_OrganizationDocument,
    variables: { data: value },
  });
  return org.data;
};

export const updateUserOrg = async (
  id: number,
  updates: User_OrganizationUpdateInput
) => {
  const org = await _apolloClient.mutate({
    mutation: UpdateUserOrgDocument,
    variables: { data: updates, where: { id } },
  });
  return org.data;
};

export const deleteUserOrg = async (
  value: User_OrganizationWhereUniqueInput
) => {
  const org = await _apolloClient.mutate({
    mutation: DeleteOneUser_OrganizationDocument,
    variables: { data: value },
  });
  return org;
};
