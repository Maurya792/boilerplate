/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAsset = {
  __typename?: 'AggregateAsset';
  _avg?: Maybe<AssetAvgAggregate>;
  _count?: Maybe<AssetCountAggregate>;
  _max?: Maybe<AssetMaxAggregate>;
  _min?: Maybe<AssetMinAggregate>;
  _sum?: Maybe<AssetSumAggregate>;
};

export type AggregateLog = {
  __typename?: 'AggregateLog';
  _avg?: Maybe<LogAvgAggregate>;
  _count?: Maybe<LogCountAggregate>;
  _max?: Maybe<LogMaxAggregate>;
  _min?: Maybe<LogMinAggregate>;
  _sum?: Maybe<LogSumAggregate>;
};

export type AggregateOrganization = {
  __typename?: 'AggregateOrganization';
  _avg?: Maybe<OrganizationAvgAggregate>;
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  _sum?: Maybe<OrganizationSumAggregate>;
};

export type AggregatePart = {
  __typename?: 'AggregatePart';
  _avg?: Maybe<PartAvgAggregate>;
  _count?: Maybe<PartCountAggregate>;
  _max?: Maybe<PartMaxAggregate>;
  _min?: Maybe<PartMinAggregate>;
  _sum?: Maybe<PartSumAggregate>;
};

export type AggregateTeam = {
  __typename?: 'AggregateTeam';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
};

export type AggregateTrace = {
  __typename?: 'AggregateTrace';
  _avg?: Maybe<TraceAvgAggregate>;
  _count?: Maybe<TraceCountAggregate>;
  _max?: Maybe<TraceMaxAggregate>;
  _min?: Maybe<TraceMinAggregate>;
  _sum?: Maybe<TraceSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUser_Organization = {
  __typename?: 'AggregateUser_organization';
  _avg?: Maybe<User_OrganizationAvgAggregate>;
  _count?: Maybe<User_OrganizationCountAggregate>;
  _max?: Maybe<User_OrganizationMaxAggregate>;
  _min?: Maybe<User_OrganizationMinAggregate>;
  _sum?: Maybe<User_OrganizationSumAggregate>;
};

export type AggregateUser_Organization_Team = {
  __typename?: 'AggregateUser_organization_team';
  _avg?: Maybe<User_Organization_TeamAvgAggregate>;
  _count?: Maybe<User_Organization_TeamCountAggregate>;
  _max?: Maybe<User_Organization_TeamMaxAggregate>;
  _min?: Maybe<User_Organization_TeamMinAggregate>;
  _sum?: Maybe<User_Organization_TeamSumAggregate>;
};

export type Asset = {
  __typename?: 'Asset';
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  trace: Trace;
  trace_id: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type AssetAvgAggregate = {
  __typename?: 'AssetAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  trace_id?: Maybe<Scalars['Float']['output']>;
};

export type AssetAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type AssetCountAggregate = {
  __typename?: 'AssetCountAggregate';
  _all: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  trace_id: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
};

export type AssetCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type AssetCreateInput = {
  date: Scalars['DateTime']['input'];
  trace: TraceCreateNestedOneWithoutImagesInput;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateManyInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  trace_id: Scalars['Int']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateManyTraceInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateManyTraceInputEnvelope = {
  data: Array<AssetCreateManyTraceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCreateNestedManyWithoutTraceInput = {
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssetCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<AssetCreateWithoutTraceInput>>;
  createMany?: InputMaybe<AssetCreateManyTraceInputEnvelope>;
};

export type AssetCreateOrConnectWithoutTraceInput = {
  create: AssetCreateWithoutTraceInput;
  where: AssetWhereUniqueInput;
};

export type AssetCreateWithoutTraceInput = {
  date: Scalars['DateTime']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetGroupBy = {
  __typename?: 'AssetGroupBy';
  _avg?: Maybe<AssetAvgAggregate>;
  _count?: Maybe<AssetCountAggregate>;
  _max?: Maybe<AssetMaxAggregate>;
  _min?: Maybe<AssetMinAggregate>;
  _sum?: Maybe<AssetSumAggregate>;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  trace_id: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type AssetListRelationFilter = {
  every?: InputMaybe<AssetWhereInput>;
  none?: InputMaybe<AssetWhereInput>;
  some?: InputMaybe<AssetWhereInput>;
};

export type AssetMaxAggregate = {
  __typename?: 'AssetMaxAggregate';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AssetMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type AssetMinAggregate = {
  __typename?: 'AssetMinAggregate';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AssetMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type AssetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AssetOrderByWithAggregationInput = {
  _avg?: InputMaybe<AssetAvgOrderByAggregateInput>;
  _count?: InputMaybe<AssetCountOrderByAggregateInput>;
  _max?: InputMaybe<AssetMaxOrderByAggregateInput>;
  _min?: InputMaybe<AssetMinOrderByAggregateInput>;
  _sum?: InputMaybe<AssetSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrderInput>;
};

export type AssetOrderByWithRelationInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  trace?: InputMaybe<TraceOrderByWithRelationInput>;
  trace_id?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrderInput>;
};

export enum AssetScalarFieldEnum {
  Date = 'date',
  Id = 'id',
  TraceId = 'trace_id',
  Url = 'url'
}

export type AssetScalarWhereInput = {
  AND?: InputMaybe<Array<AssetScalarWhereInput>>;
  NOT?: InputMaybe<Array<AssetScalarWhereInput>>;
  OR?: InputMaybe<Array<AssetScalarWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  trace_id?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type AssetScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AssetScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AssetScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AssetScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  trace_id?: InputMaybe<IntWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type AssetSumAggregate = {
  __typename?: 'AssetSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
};

export type AssetSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type AssetUpdateInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  trace?: InputMaybe<TraceUpdateOneRequiredWithoutImagesNestedInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyMutationInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithWhereWithoutTraceInput = {
  data: AssetUpdateManyMutationInput;
  where: AssetScalarWhereInput;
};

export type AssetUpdateManyWithoutTraceNestedInput = {
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssetCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<AssetCreateWithoutTraceInput>>;
  createMany?: InputMaybe<AssetCreateManyTraceInputEnvelope>;
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AssetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  update?: InputMaybe<Array<AssetUpdateWithWhereUniqueWithoutTraceInput>>;
  updateMany?: InputMaybe<Array<AssetUpdateManyWithWhereWithoutTraceInput>>;
  upsert?: InputMaybe<Array<AssetUpsertWithWhereUniqueWithoutTraceInput>>;
};

export type AssetUpdateWithWhereUniqueWithoutTraceInput = {
  data: AssetUpdateWithoutTraceInput;
  where: AssetWhereUniqueInput;
};

export type AssetUpdateWithoutTraceInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpsertWithWhereUniqueWithoutTraceInput = {
  create: AssetCreateWithoutTraceInput;
  update: AssetUpdateWithoutTraceInput;
  where: AssetWhereUniqueInput;
};

export type AssetWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type AssetWhereUniqueInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type Enumaccount_StatusFilter = {
  equals?: InputMaybe<Account_Status>;
  in?: InputMaybe<Array<Account_Status>>;
  not?: InputMaybe<NestedEnumaccount_StatusFilter>;
  notIn?: InputMaybe<Array<Account_Status>>;
};

export type Enumaccount_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumaccount_StatusFilter>;
  _min?: InputMaybe<NestedEnumaccount_StatusFilter>;
  equals?: InputMaybe<Account_Status>;
  in?: InputMaybe<Array<Account_Status>>;
  not?: InputMaybe<NestedEnumaccount_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Account_Status>>;
};

export type Enumteam_RoleFilter = {
  equals?: InputMaybe<Team_Role>;
  in?: InputMaybe<Array<Team_Role>>;
  not?: InputMaybe<NestedEnumteam_RoleFilter>;
  notIn?: InputMaybe<Array<Team_Role>>;
};

export type Enumteam_RoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumteam_RoleFilter>;
  _min?: InputMaybe<NestedEnumteam_RoleFilter>;
  equals?: InputMaybe<Team_Role>;
  in?: InputMaybe<Array<Team_Role>>;
  not?: InputMaybe<NestedEnumteam_RoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Team_Role>>;
};

export type Enumuser_Invitation_StatusNullableFilter = {
  equals?: InputMaybe<User_Invitation_Status>;
  in?: InputMaybe<Array<User_Invitation_Status>>;
  not?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  notIn?: InputMaybe<Array<User_Invitation_Status>>;
};

export type Enumuser_Invitation_StatusNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  _min?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  equals?: InputMaybe<User_Invitation_Status>;
  in?: InputMaybe<Array<User_Invitation_Status>>;
  not?: InputMaybe<NestedEnumuser_Invitation_StatusNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Invitation_Status>>;
};

export type Enumuser_RoleFilter = {
  equals?: InputMaybe<User_Role>;
  in?: InputMaybe<Array<User_Role>>;
  not?: InputMaybe<NestedEnumuser_RoleFilter>;
  notIn?: InputMaybe<Array<User_Role>>;
};

export type Enumuser_RoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumuser_RoleFilter>;
  _min?: InputMaybe<NestedEnumuser_RoleFilter>;
  equals?: InputMaybe<User_Role>;
  in?: InputMaybe<Array<User_Role>>;
  not?: InputMaybe<NestedEnumuser_RoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Role>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  redirectUrl: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ForgotPasswordRes = {
  __typename?: 'ForgotPasswordRes';
  errors?: Maybe<Array<FieldError>>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InviteUserInput = {
  orgId: Scalars['Float']['input'];
  redirectUrl: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type InviteUserResponse = {
  __typename?: 'InviteUserResponse';
  errors?: Maybe<Array<FieldError>>;
  isNewUser?: Maybe<Scalars['Boolean']['output']>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type JoinOrgInput = {
  token: Scalars['String']['input'];
};

export type Log = {
  __typename?: 'Log';
  created_at: Scalars['DateTime']['output'];
  end_time: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  is_active: Scalars['Boolean']['output'];
  start_time: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  trace: Trace;
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type LogAvgAggregate = {
  __typename?: 'LogAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  trace_id?: Maybe<Scalars['Float']['output']>;
};

export type LogAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type LogCountAggregate = {
  __typename?: 'LogCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  end_time: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_active: Scalars['Int']['output'];
  start_time: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type LogCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type LogCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time: Scalars['DateTime']['input'];
  is_active: Scalars['Boolean']['input'];
  start_time: Scalars['DateTime']['input'];
  status: Scalars['String']['input'];
  trace: TraceCreateNestedOneWithoutLogsInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active: Scalars['Boolean']['input'];
  start_time: Scalars['DateTime']['input'];
  status: Scalars['String']['input'];
  trace_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogCreateManyTraceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active: Scalars['Boolean']['input'];
  start_time: Scalars['DateTime']['input'];
  status: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogCreateManyTraceInputEnvelope = {
  data: Array<LogCreateManyTraceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogCreateNestedManyWithoutTraceInput = {
  connect?: InputMaybe<Array<LogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<LogCreateWithoutTraceInput>>;
  createMany?: InputMaybe<LogCreateManyTraceInputEnvelope>;
};

export type LogCreateOrConnectWithoutTraceInput = {
  create: LogCreateWithoutTraceInput;
  where: LogWhereUniqueInput;
};

export type LogCreateWithoutTraceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time: Scalars['DateTime']['input'];
  is_active: Scalars['Boolean']['input'];
  start_time: Scalars['DateTime']['input'];
  status: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogGroupBy = {
  __typename?: 'LogGroupBy';
  _avg?: Maybe<LogAvgAggregate>;
  _count?: Maybe<LogCountAggregate>;
  _max?: Maybe<LogMaxAggregate>;
  _min?: Maybe<LogMinAggregate>;
  _sum?: Maybe<LogSumAggregate>;
  created_at: Scalars['DateTime']['output'];
  end_time: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  is_active: Scalars['Boolean']['output'];
  start_time: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type LogListRelationFilter = {
  every?: InputMaybe<LogWhereInput>;
  none?: InputMaybe<LogWhereInput>;
  some?: InputMaybe<LogWhereInput>;
};

export type LogMaxAggregate = {
  __typename?: 'LogMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  end_time?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type LogMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type LogMinAggregate = {
  __typename?: 'LogMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  end_time?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type LogMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type LogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LogOrderByWithAggregationInput = {
  _avg?: InputMaybe<LogAvgOrderByAggregateInput>;
  _count?: InputMaybe<LogCountOrderByAggregateInput>;
  _max?: InputMaybe<LogMaxOrderByAggregateInput>;
  _min?: InputMaybe<LogMinOrderByAggregateInput>;
  _sum?: InputMaybe<LogSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type LogOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trace?: InputMaybe<TraceOrderByWithRelationInput>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export enum LogScalarFieldEnum {
  CreatedAt = 'created_at',
  EndTime = 'end_time',
  Id = 'id',
  IsActive = 'is_active',
  StartTime = 'start_time',
  Status = 'status',
  TraceId = 'trace_id',
  UpdatedAt = 'updated_at'
}

export type LogScalarWhereInput = {
  AND?: InputMaybe<Array<LogScalarWhereInput>>;
  NOT?: InputMaybe<Array<LogScalarWhereInput>>;
  OR?: InputMaybe<Array<LogScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  is_active?: InputMaybe<BoolFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<StringFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type LogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LogScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  end_time?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  is_active?: InputMaybe<BoolWithAggregatesFilter>;
  start_time?: InputMaybe<DateTimeWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  trace_id?: InputMaybe<IntWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type LogSumAggregate = {
  __typename?: 'LogSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
};

export type LogSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type LogUpdateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time?: InputMaybe<Scalars['DateTime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  start_time?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trace?: InputMaybe<TraceUpdateOneRequiredWithoutLogsNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogUpdateManyMutationInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time?: InputMaybe<Scalars['DateTime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  start_time?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogUpdateManyWithWhereWithoutTraceInput = {
  data: LogUpdateManyMutationInput;
  where: LogScalarWhereInput;
};

export type LogUpdateManyWithoutTraceNestedInput = {
  connect?: InputMaybe<Array<LogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<LogCreateWithoutTraceInput>>;
  createMany?: InputMaybe<LogCreateManyTraceInputEnvelope>;
  delete?: InputMaybe<Array<LogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogWhereUniqueInput>>;
  set?: InputMaybe<Array<LogWhereUniqueInput>>;
  update?: InputMaybe<Array<LogUpdateWithWhereUniqueWithoutTraceInput>>;
  updateMany?: InputMaybe<Array<LogUpdateManyWithWhereWithoutTraceInput>>;
  upsert?: InputMaybe<Array<LogUpsertWithWhereUniqueWithoutTraceInput>>;
};

export type LogUpdateWithWhereUniqueWithoutTraceInput = {
  data: LogUpdateWithoutTraceInput;
  where: LogWhereUniqueInput;
};

export type LogUpdateWithoutTraceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  end_time?: InputMaybe<Scalars['DateTime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  start_time?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogUpsertWithWhereUniqueWithoutTraceInput = {
  create: LogCreateWithoutTraceInput;
  update: LogUpdateWithoutTraceInput;
  where: LogWhereUniqueInput;
};

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  is_active?: InputMaybe<BoolFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<StringFilter>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type LogWhereUniqueInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<BoolFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<StringFilter>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LoginRes = {
  __typename?: 'LoginRes';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<FieldError>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAsset: AffectedRowsOutput;
  createManyLog: AffectedRowsOutput;
  createManyOrganization: AffectedRowsOutput;
  createManyPart: AffectedRowsOutput;
  createManyTeam: AffectedRowsOutput;
  createManyTrace: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUser_organization: AffectedRowsOutput;
  createManyUser_organization_team: AffectedRowsOutput;
  createOneAsset: Asset;
  createOneLog: Log;
  createOneOrganization: Organization;
  createOnePart: Part;
  createOneTeam: Team;
  createOneTrace: Trace;
  createOneUser: User;
  createOneUser_organization: User_Organization;
  createOneUser_organization_team: User_Organization_Team;
  deleteManyAsset: AffectedRowsOutput;
  deleteManyLog: AffectedRowsOutput;
  deleteManyOrganization: AffectedRowsOutput;
  deleteManyPart: AffectedRowsOutput;
  deleteManyTeam: AffectedRowsOutput;
  deleteManyTrace: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUser_organization: AffectedRowsOutput;
  deleteManyUser_organization_team: AffectedRowsOutput;
  deleteOneAsset?: Maybe<Asset>;
  deleteOneLog?: Maybe<Log>;
  deleteOneOrganization?: Maybe<Organization>;
  deleteOnePart?: Maybe<Part>;
  deleteOneTeam?: Maybe<Team>;
  deleteOneTrace?: Maybe<Trace>;
  deleteOneUser?: Maybe<User>;
  deleteOneUser_organization?: Maybe<User_Organization>;
  deleteOneUser_organization_team?: Maybe<User_Organization_Team>;
  forgotPassword: ForgotPasswordRes;
  inviteUser: InviteUserResponse;
  joinOrg: InviteUserResponse;
  login: LoginRes;
  register: RegisterResponse;
  resetPassword: ResetPasswordRes;
  updateManyAsset: AffectedRowsOutput;
  updateManyLog: AffectedRowsOutput;
  updateManyOrganization: AffectedRowsOutput;
  updateManyPart: AffectedRowsOutput;
  updateManyTeam: AffectedRowsOutput;
  updateManyTrace: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUser_organization: AffectedRowsOutput;
  updateManyUser_organization_team: AffectedRowsOutput;
  updateOneAsset?: Maybe<Asset>;
  updateOneLog?: Maybe<Log>;
  updateOneOrganization?: Maybe<Organization>;
  updateOnePart?: Maybe<Part>;
  updateOneTeam?: Maybe<Team>;
  updateOneTrace?: Maybe<Trace>;
  updateOneUser?: Maybe<User>;
  updateOneUser_organization?: Maybe<User_Organization>;
  updateOneUser_organization_team?: Maybe<User_Organization_Team>;
  upsertOneAsset: Asset;
  upsertOneLog: Log;
  upsertOneOrganization: Organization;
  upsertOnePart: Part;
  upsertOneTeam: Team;
  upsertOneTrace: Trace;
  upsertOneUser: User;
  upsertOneUser_organization: User_Organization;
  upsertOneUser_organization_team: User_Organization_Team;
  verifyAccount: VerifyAccountRes;
};


export type MutationCreateManyAssetArgs = {
  data: Array<AssetCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyLogArgs = {
  data: Array<LogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOrganizationArgs = {
  data: Array<OrganizationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPartArgs = {
  data: Array<PartCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTeamArgs = {
  data: Array<TeamCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTraceArgs = {
  data: Array<TraceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUser_OrganizationArgs = {
  data: Array<User_OrganizationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUser_Organization_TeamArgs = {
  data: Array<User_Organization_TeamCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateOneLogArgs = {
  data: LogCreateInput;
};


export type MutationCreateOneOrganizationArgs = {
  data: OrganizationCreateInput;
};


export type MutationCreateOnePartArgs = {
  data: PartCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateOneTraceArgs = {
  data: TraceCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUser_OrganizationArgs = {
  data: User_OrganizationCreateInput;
};


export type MutationCreateOneUser_Organization_TeamArgs = {
  data: User_Organization_TeamCreateInput;
};


export type MutationDeleteManyAssetArgs = {
  where?: InputMaybe<AssetWhereInput>;
};


export type MutationDeleteManyLogArgs = {
  where?: InputMaybe<LogWhereInput>;
};


export type MutationDeleteManyOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationDeleteManyPartArgs = {
  where?: InputMaybe<PartWhereInput>;
};


export type MutationDeleteManyTeamArgs = {
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationDeleteManyTraceArgs = {
  where?: InputMaybe<TraceWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUser_OrganizationArgs = {
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type MutationDeleteManyUser_Organization_TeamArgs = {
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type MutationDeleteOneAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteOneLogArgs = {
  where: LogWhereUniqueInput;
};


export type MutationDeleteOneOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type MutationDeleteOnePartArgs = {
  where: PartWhereUniqueInput;
};


export type MutationDeleteOneTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteOneTraceArgs = {
  where: TraceWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUser_OrganizationArgs = {
  where: User_OrganizationWhereUniqueInput;
};


export type MutationDeleteOneUser_Organization_TeamArgs = {
  where: User_Organization_TeamWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  data: ForgotPasswordInput;
};


export type MutationInviteUserArgs = {
  data: InviteUserInput;
};


export type MutationJoinOrgArgs = {
  data: JoinOrgInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationUpdateManyAssetArgs = {
  data: AssetUpdateManyMutationInput;
  where?: InputMaybe<AssetWhereInput>;
};


export type MutationUpdateManyLogArgs = {
  data: LogUpdateManyMutationInput;
  where?: InputMaybe<LogWhereInput>;
};


export type MutationUpdateManyOrganizationArgs = {
  data: OrganizationUpdateManyMutationInput;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationUpdateManyPartArgs = {
  data: PartUpdateManyMutationInput;
  where?: InputMaybe<PartWhereInput>;
};


export type MutationUpdateManyTeamArgs = {
  data: TeamUpdateManyMutationInput;
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationUpdateManyTraceArgs = {
  data: TraceUpdateManyMutationInput;
  where?: InputMaybe<TraceWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUser_OrganizationArgs = {
  data: User_OrganizationUpdateManyMutationInput;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type MutationUpdateManyUser_Organization_TeamArgs = {
  data: User_Organization_TeamUpdateManyMutationInput;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type MutationUpdateOneAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateOneLogArgs = {
  data: LogUpdateInput;
  where: LogWhereUniqueInput;
};


export type MutationUpdateOneOrganizationArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpdateOnePartArgs = {
  data: PartUpdateInput;
  where: PartWhereUniqueInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateOneTraceArgs = {
  data: TraceUpdateInput;
  where: TraceWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUser_OrganizationArgs = {
  data: User_OrganizationUpdateInput;
  where: User_OrganizationWhereUniqueInput;
};


export type MutationUpdateOneUser_Organization_TeamArgs = {
  data: User_Organization_TeamUpdateInput;
  where: User_Organization_TeamWhereUniqueInput;
};


export type MutationUpsertOneAssetArgs = {
  create: AssetCreateInput;
  update: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertOneLogArgs = {
  create: LogCreateInput;
  update: LogUpdateInput;
  where: LogWhereUniqueInput;
};


export type MutationUpsertOneOrganizationArgs = {
  create: OrganizationCreateInput;
  update: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpsertOnePartArgs = {
  create: PartCreateInput;
  update: PartUpdateInput;
  where: PartWhereUniqueInput;
};


export type MutationUpsertOneTeamArgs = {
  create: TeamCreateInput;
  update: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpsertOneTraceArgs = {
  create: TraceCreateInput;
  update: TraceUpdateInput;
  where: TraceWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUser_OrganizationArgs = {
  create: User_OrganizationCreateInput;
  update: User_OrganizationUpdateInput;
  where: User_OrganizationWhereUniqueInput;
};


export type MutationUpsertOneUser_Organization_TeamArgs = {
  create: User_Organization_TeamCreateInput;
  update: User_Organization_TeamUpdateInput;
  where: User_Organization_TeamWhereUniqueInput;
};


export type MutationVerifyAccountArgs = {
  data: VerifyAccountInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedEnumaccount_StatusFilter = {
  equals?: InputMaybe<Account_Status>;
  in?: InputMaybe<Array<Account_Status>>;
  not?: InputMaybe<NestedEnumaccount_StatusFilter>;
  notIn?: InputMaybe<Array<Account_Status>>;
};

export type NestedEnumaccount_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumaccount_StatusFilter>;
  _min?: InputMaybe<NestedEnumaccount_StatusFilter>;
  equals?: InputMaybe<Account_Status>;
  in?: InputMaybe<Array<Account_Status>>;
  not?: InputMaybe<NestedEnumaccount_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Account_Status>>;
};

export type NestedEnumteam_RoleFilter = {
  equals?: InputMaybe<Team_Role>;
  in?: InputMaybe<Array<Team_Role>>;
  not?: InputMaybe<NestedEnumteam_RoleFilter>;
  notIn?: InputMaybe<Array<Team_Role>>;
};

export type NestedEnumteam_RoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumteam_RoleFilter>;
  _min?: InputMaybe<NestedEnumteam_RoleFilter>;
  equals?: InputMaybe<Team_Role>;
  in?: InputMaybe<Array<Team_Role>>;
  not?: InputMaybe<NestedEnumteam_RoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Team_Role>>;
};

export type NestedEnumuser_Invitation_StatusNullableFilter = {
  equals?: InputMaybe<User_Invitation_Status>;
  in?: InputMaybe<Array<User_Invitation_Status>>;
  not?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  notIn?: InputMaybe<Array<User_Invitation_Status>>;
};

export type NestedEnumuser_Invitation_StatusNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  _min?: InputMaybe<NestedEnumuser_Invitation_StatusNullableFilter>;
  equals?: InputMaybe<User_Invitation_Status>;
  in?: InputMaybe<Array<User_Invitation_Status>>;
  not?: InputMaybe<NestedEnumuser_Invitation_StatusNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Invitation_Status>>;
};

export type NestedEnumuser_RoleFilter = {
  equals?: InputMaybe<User_Role>;
  in?: InputMaybe<Array<User_Role>>;
  not?: InputMaybe<NestedEnumuser_RoleFilter>;
  notIn?: InputMaybe<Array<User_Role>>;
};

export type NestedEnumuser_RoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumuser_RoleFilter>;
  _min?: InputMaybe<NestedEnumuser_RoleFilter>;
  equals?: InputMaybe<User_Role>;
  in?: InputMaybe<Array<User_Role>>;
  not?: InputMaybe<NestedEnumuser_RoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Organization = {
  __typename?: 'Organization';
  _count?: Maybe<OrganizationCount>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  teams: Array<Team>;
  user_organizations: Array<User_Organization>;
  users?: Maybe<Array<User>>;
};


export type OrganizationTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type OrganizationUser_OrganizationsArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type OrganizationAvgAggregate = {
  __typename?: 'OrganizationAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type OrganizationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OrganizationCount = {
  __typename?: 'OrganizationCount';
  teams: Scalars['Int']['output'];
  user_organizations: Scalars['Int']['output'];
};


export type OrganizationCountTeamsArgs = {
  where?: InputMaybe<TeamWhereInput>;
};


export type OrganizationCountUser_OrganizationsArgs = {
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type OrganizationCountAggregate = {
  __typename?: 'OrganizationCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
};

export type OrganizationCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type OrganizationCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  teams?: InputMaybe<TeamCreateNestedManyWithoutOrganizationInput>;
  user_organizations?: InputMaybe<User_OrganizationCreateNestedManyWithoutOrganizationInput>;
};

export type OrganizationCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type OrganizationCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<OrganizationCreateWithoutTeamsInput>;
};

export type OrganizationCreateNestedOneWithoutUser_OrganizationsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutUser_OrganizationsInput>;
  create?: InputMaybe<OrganizationCreateWithoutUser_OrganizationsInput>;
};

export type OrganizationCreateOrConnectWithoutTeamsInput = {
  create: OrganizationCreateWithoutTeamsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutUser_OrganizationsInput = {
  create: OrganizationCreateWithoutUser_OrganizationsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateWithoutTeamsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  user_organizations?: InputMaybe<User_OrganizationCreateNestedManyWithoutOrganizationInput>;
};

export type OrganizationCreateWithoutUser_OrganizationsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  teams?: InputMaybe<TeamCreateNestedManyWithoutOrganizationInput>;
};

export type OrganizationGroupBy = {
  __typename?: 'OrganizationGroupBy';
  _avg?: Maybe<OrganizationAvgAggregate>;
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  _sum?: Maybe<OrganizationSumAggregate>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type OrganizationMaxAggregate = {
  __typename?: 'OrganizationMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type OrganizationMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type OrganizationMinAggregate = {
  __typename?: 'OrganizationMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type OrganizationMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type OrganizationNullableRelationFilter = {
  is?: InputMaybe<OrganizationWhereInput>;
  isNot?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrganizationAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrganizationCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrganizationSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  slug?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  slug?: InputMaybe<SortOrder>;
  teams?: InputMaybe<TeamOrderByRelationAggregateInput>;
  user_organizations?: InputMaybe<User_OrganizationOrderByRelationAggregateInput>;
};

export enum OrganizationScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug'
}

export type OrganizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
};

export type OrganizationSumAggregate = {
  __typename?: 'OrganizationSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OrganizationUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamUpdateManyWithoutOrganizationNestedInput>;
  user_organizations?: InputMaybe<User_OrganizationUpdateManyWithoutOrganizationNestedInput>;
};

export type OrganizationUpdateManyMutationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUpdateOneWithoutTeamsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<OrganizationCreateWithoutTeamsInput>;
  delete?: InputMaybe<OrganizationWhereInput>;
  disconnect?: InputMaybe<OrganizationWhereInput>;
  update?: InputMaybe<OrganizationUpdateToOneWithWhereWithoutTeamsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutTeamsInput>;
};

export type OrganizationUpdateOneWithoutUser_OrganizationsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutUser_OrganizationsInput>;
  create?: InputMaybe<OrganizationCreateWithoutUser_OrganizationsInput>;
  delete?: InputMaybe<OrganizationWhereInput>;
  disconnect?: InputMaybe<OrganizationWhereInput>;
  update?: InputMaybe<OrganizationUpdateToOneWithWhereWithoutUser_OrganizationsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutUser_OrganizationsInput>;
};

export type OrganizationUpdateToOneWithWhereWithoutTeamsInput = {
  data: OrganizationUpdateWithoutTeamsInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationUpdateToOneWithWhereWithoutUser_OrganizationsInput = {
  data: OrganizationUpdateWithoutUser_OrganizationsInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationUpdateWithoutTeamsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_organizations?: InputMaybe<User_OrganizationUpdateManyWithoutOrganizationNestedInput>;
};

export type OrganizationUpdateWithoutUser_OrganizationsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamUpdateManyWithoutOrganizationNestedInput>;
};

export type OrganizationUpsertWithoutTeamsInput = {
  create: OrganizationCreateWithoutTeamsInput;
  update: OrganizationUpdateWithoutTeamsInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationUpsertWithoutUser_OrganizationsInput = {
  create: OrganizationCreateWithoutUser_OrganizationsInput;
  update: OrganizationUpdateWithoutUser_OrganizationsInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationWhereInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  teams?: InputMaybe<TeamListRelationFilter>;
  user_organizations?: InputMaybe<User_OrganizationListRelationFilter>;
};

export type OrganizationWhereUniqueInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_slug?: InputMaybe<OrganizationIdSlugCompoundUniqueInput>;
  name?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamListRelationFilter>;
  user_organizations?: InputMaybe<User_OrganizationListRelationFilter>;
};

export type Part = {
  __typename?: 'Part';
  active_time: Scalars['Decimal']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  in_active_time: Scalars['Decimal']['output'];
  trace: Trace;
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type PartAvgAggregate = {
  __typename?: 'PartAvgAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  trace_id?: Maybe<Scalars['Float']['output']>;
};

export type PartAvgOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type PartCountAggregate = {
  __typename?: 'PartCountAggregate';
  _all: Scalars['Int']['output'];
  active_time: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  in_active_time: Scalars['Int']['output'];
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type PartCountOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type PartCreateInput = {
  active_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  trace: TraceCreateNestedOneWithoutPartsInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartCreateManyInput = {
  active_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  trace_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartCreateManyTraceInput = {
  active_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartCreateManyTraceInputEnvelope = {
  data: Array<PartCreateManyTraceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PartCreateNestedManyWithoutTraceInput = {
  connect?: InputMaybe<Array<PartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<PartCreateWithoutTraceInput>>;
  createMany?: InputMaybe<PartCreateManyTraceInputEnvelope>;
};

export type PartCreateOrConnectWithoutTraceInput = {
  create: PartCreateWithoutTraceInput;
  where: PartWhereUniqueInput;
};

export type PartCreateWithoutTraceInput = {
  active_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartGroupBy = {
  __typename?: 'PartGroupBy';
  _avg?: Maybe<PartAvgAggregate>;
  _count?: Maybe<PartCountAggregate>;
  _max?: Maybe<PartMaxAggregate>;
  _min?: Maybe<PartMinAggregate>;
  _sum?: Maybe<PartSumAggregate>;
  active_time: Scalars['Decimal']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  in_active_time: Scalars['Decimal']['output'];
  trace_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type PartListRelationFilter = {
  every?: InputMaybe<PartWhereInput>;
  none?: InputMaybe<PartWhereInput>;
  some?: InputMaybe<PartWhereInput>;
};

export type PartMaxAggregate = {
  __typename?: 'PartMaxAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PartMaxOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type PartMinAggregate = {
  __typename?: 'PartMinAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PartMinOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type PartOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PartOrderByWithAggregationInput = {
  _avg?: InputMaybe<PartAvgOrderByAggregateInput>;
  _count?: InputMaybe<PartCountOrderByAggregateInput>;
  _max?: InputMaybe<PartMaxOrderByAggregateInput>;
  _min?: InputMaybe<PartMinOrderByAggregateInput>;
  _sum?: InputMaybe<PartSumOrderByAggregateInput>;
  active_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type PartOrderByWithRelationInput = {
  active_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace?: InputMaybe<TraceOrderByWithRelationInput>;
  trace_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export enum PartScalarFieldEnum {
  ActiveTime = 'active_time',
  CreatedAt = 'created_at',
  Id = 'id',
  InActiveTime = 'in_active_time',
  TraceId = 'trace_id',
  UpdatedAt = 'updated_at'
}

export type PartScalarWhereInput = {
  AND?: InputMaybe<Array<PartScalarWhereInput>>;
  NOT?: InputMaybe<Array<PartScalarWhereInput>>;
  OR?: InputMaybe<Array<PartScalarWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  in_active_time?: InputMaybe<DecimalFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type PartScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PartScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PartScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PartScalarWhereWithAggregatesInput>>;
  active_time?: InputMaybe<DecimalWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  in_active_time?: InputMaybe<DecimalWithAggregatesFilter>;
  trace_id?: InputMaybe<IntWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PartSumAggregate = {
  __typename?: 'PartSumAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  trace_id?: Maybe<Scalars['Int']['output']>;
};

export type PartSumOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  trace_id?: InputMaybe<SortOrder>;
};

export type PartUpdateInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  trace?: InputMaybe<TraceUpdateOneRequiredWithoutPartsNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartUpdateManyMutationInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartUpdateManyWithWhereWithoutTraceInput = {
  data: PartUpdateManyMutationInput;
  where: PartScalarWhereInput;
};

export type PartUpdateManyWithoutTraceNestedInput = {
  connect?: InputMaybe<Array<PartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartCreateOrConnectWithoutTraceInput>>;
  create?: InputMaybe<Array<PartCreateWithoutTraceInput>>;
  createMany?: InputMaybe<PartCreateManyTraceInputEnvelope>;
  delete?: InputMaybe<Array<PartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PartWhereUniqueInput>>;
  set?: InputMaybe<Array<PartWhereUniqueInput>>;
  update?: InputMaybe<Array<PartUpdateWithWhereUniqueWithoutTraceInput>>;
  updateMany?: InputMaybe<Array<PartUpdateManyWithWhereWithoutTraceInput>>;
  upsert?: InputMaybe<Array<PartUpsertWithWhereUniqueWithoutTraceInput>>;
};

export type PartUpdateWithWhereUniqueWithoutTraceInput = {
  data: PartUpdateWithoutTraceInput;
  where: PartWhereUniqueInput;
};

export type PartUpdateWithoutTraceInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartUpsertWithWhereUniqueWithoutTraceInput = {
  create: PartCreateWithoutTraceInput;
  update: PartUpdateWithoutTraceInput;
  where: PartWhereUniqueInput;
};

export type PartWhereInput = {
  AND?: InputMaybe<Array<PartWhereInput>>;
  NOT?: InputMaybe<Array<PartWhereInput>>;
  OR?: InputMaybe<Array<PartWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  in_active_time?: InputMaybe<DecimalFilter>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type PartWhereUniqueInput = {
  AND?: InputMaybe<Array<PartWhereInput>>;
  NOT?: InputMaybe<Array<PartWhereInput>>;
  OR?: InputMaybe<Array<PartWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in_active_time?: InputMaybe<DecimalFilter>;
  trace?: InputMaybe<TraceRelationFilter>;
  trace_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAsset: AggregateAsset;
  aggregateLog: AggregateLog;
  aggregateOrganization: AggregateOrganization;
  aggregatePart: AggregatePart;
  aggregateTeam: AggregateTeam;
  aggregateTrace: AggregateTrace;
  aggregateUser: AggregateUser;
  aggregateUser_organization: AggregateUser_Organization;
  aggregateUser_organization_team: AggregateUser_Organization_Team;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  findFirstAsset?: Maybe<Asset>;
  findFirstAssetOrThrow?: Maybe<Asset>;
  findFirstLog?: Maybe<Log>;
  findFirstLogOrThrow?: Maybe<Log>;
  findFirstOrganization?: Maybe<Organization>;
  findFirstOrganizationOrThrow?: Maybe<Organization>;
  findFirstPart?: Maybe<Part>;
  findFirstPartOrThrow?: Maybe<Part>;
  findFirstTeam?: Maybe<Team>;
  findFirstTeamOrThrow?: Maybe<Team>;
  findFirstTrace?: Maybe<Trace>;
  findFirstTraceOrThrow?: Maybe<Trace>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUser_organization?: Maybe<User_Organization>;
  findFirstUser_organizationOrThrow?: Maybe<User_Organization>;
  findFirstUser_organization_team?: Maybe<User_Organization_Team>;
  findFirstUser_organization_teamOrThrow?: Maybe<User_Organization_Team>;
  getAsset?: Maybe<Asset>;
  getLog?: Maybe<Log>;
  getOrganization?: Maybe<Organization>;
  getPart?: Maybe<Part>;
  getTeam?: Maybe<Team>;
  getTrace?: Maybe<Trace>;
  getUser?: Maybe<User>;
  getUser_organization?: Maybe<User_Organization>;
  getUser_organization_team?: Maybe<User_Organization_Team>;
  groupByAsset: Array<AssetGroupBy>;
  groupByLog: Array<LogGroupBy>;
  groupByOrganization: Array<OrganizationGroupBy>;
  groupByPart: Array<PartGroupBy>;
  groupByTeam: Array<TeamGroupBy>;
  groupByTrace: Array<TraceGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUser_organization: Array<User_OrganizationGroupBy>;
  groupByUser_organization_team: Array<User_Organization_TeamGroupBy>;
  log?: Maybe<Log>;
  logs: Array<Log>;
  me?: Maybe<User>;
  organization?: Maybe<Organization>;
  organizations: Array<Organization>;
  part?: Maybe<Part>;
  parts: Array<Part>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  trace?: Maybe<Trace>;
  traces: Array<Trace>;
  user?: Maybe<User>;
  user_organization?: Maybe<User_Organization>;
  user_organization_team?: Maybe<User_Organization_Team>;
  user_organization_teams: Array<User_Organization_Team>;
  user_organizations: Array<User_Organization>;
  users: Array<User>;
};


export type QueryAggregateAssetArgs = {
  cursor?: InputMaybe<AssetWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AssetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAggregateLogArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryAggregateOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryAggregatePartArgs = {
  cursor?: InputMaybe<PartWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryAggregateTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryAggregateTraceArgs = {
  cursor?: InputMaybe<TraceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TraceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUser_OrganizationArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type QueryAggregateUser_Organization_TeamArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type QueryAssetsArgs = {
  cursor?: InputMaybe<AssetWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryFindFirstAssetArgs = {
  cursor?: InputMaybe<AssetWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryFindFirstAssetOrThrowArgs = {
  cursor?: InputMaybe<AssetWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryFindFirstLogArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryFindFirstLogOrThrowArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryFindFirstOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryFindFirstOrganizationOrThrowArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryFindFirstPartArgs = {
  cursor?: InputMaybe<PartWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryFindFirstPartOrThrowArgs = {
  cursor?: InputMaybe<PartWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryFindFirstTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstTeamOrThrowArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstTraceArgs = {
  cursor?: InputMaybe<TraceWhereUniqueInput>;
  distinct?: InputMaybe<Array<TraceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TraceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type QueryFindFirstTraceOrThrowArgs = {
  cursor?: InputMaybe<TraceWhereUniqueInput>;
  distinct?: InputMaybe<Array<TraceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TraceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUser_OrganizationArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type QueryFindFirstUser_OrganizationOrThrowArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type QueryFindFirstUser_Organization_TeamArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_Organization_TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type QueryFindFirstUser_Organization_TeamOrThrowArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_Organization_TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type QueryGetAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type QueryGetLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryGetOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryGetPartArgs = {
  where: PartWhereUniqueInput;
};


export type QueryGetTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryGetTraceArgs = {
  where: TraceWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetUser_OrganizationArgs = {
  where: User_OrganizationWhereUniqueInput;
};


export type QueryGetUser_Organization_TeamArgs = {
  where: User_Organization_TeamWhereUniqueInput;
};


export type QueryGroupByAssetArgs = {
  by: Array<AssetScalarFieldEnum>;
  having?: InputMaybe<AssetScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AssetOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryGroupByLogArgs = {
  by: Array<LogScalarFieldEnum>;
  having?: InputMaybe<LogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryGroupByOrganizationArgs = {
  by: Array<OrganizationScalarFieldEnum>;
  having?: InputMaybe<OrganizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryGroupByPartArgs = {
  by: Array<PartScalarFieldEnum>;
  having?: InputMaybe<PartScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PartOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryGroupByTeamArgs = {
  by: Array<TeamScalarFieldEnum>;
  having?: InputMaybe<TeamScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryGroupByTraceArgs = {
  by: Array<TraceScalarFieldEnum>;
  having?: InputMaybe<TraceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TraceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUser_OrganizationArgs = {
  by: Array<User_OrganizationScalarFieldEnum>;
  having?: InputMaybe<User_OrganizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type QueryGroupByUser_Organization_TeamArgs = {
  by: Array<User_Organization_TeamScalarFieldEnum>;
  having?: InputMaybe<User_Organization_TeamScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryPartArgs = {
  where: PartWhereUniqueInput;
};


export type QueryPartsArgs = {
  cursor?: InputMaybe<PartWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryTraceArgs = {
  where: TraceWhereUniqueInput;
};


export type QueryTracesArgs = {
  cursor?: InputMaybe<TraceWhereUniqueInput>;
  distinct?: InputMaybe<Array<TraceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TraceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUser_OrganizationArgs = {
  where: User_OrganizationWhereUniqueInput;
};


export type QueryUser_Organization_TeamArgs = {
  where: User_Organization_TeamWhereUniqueInput;
};


export type QueryUser_Organization_TeamsArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_Organization_TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};


export type QueryUser_OrganizationsArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RegisterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  preJoinedOrgs?: InputMaybe<Array<Scalars['Int']['input']>>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<FieldError>>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResetPasswordRes = {
  __typename?: 'ResetPasswordRes';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<FieldError>>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename?: 'Team';
  _count?: Maybe<TeamCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organization_id: Scalars['Int']['output'];
  user_organization_teams: Array<User_Organization_Team>;
  users?: Maybe<Array<User>>;
};


export type TeamOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type TeamUser_Organization_TeamsArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_Organization_TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};

export type TeamAvgAggregate = {
  __typename?: 'TeamAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

export type TeamAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  user_organization_teams: Scalars['Int']['output'];
};


export type TeamCountUser_Organization_TeamsArgs = {
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};

export type TeamCountAggregate = {
  __typename?: 'TeamCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  organization_id: Scalars['Int']['output'];
};

export type TeamCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamCreateInput = {
  name: Scalars['String']['input'];
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutTeamsInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutTeamInput>;
};

export type TeamCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  organization_id: Scalars['Int']['input'];
};

export type TeamCreateManyOrganizationInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type TeamCreateManyOrganizationInputEnvelope = {
  data: Array<TeamCreateManyOrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<TeamCreateManyOrganizationInputEnvelope>;
};

export type TeamCreateNestedOneWithoutUser_Organization_TeamsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutUser_Organization_TeamsInput>;
  create?: InputMaybe<TeamCreateWithoutUser_Organization_TeamsInput>;
};

export type TeamCreateOrConnectWithoutOrganizationInput = {
  create: TeamCreateWithoutOrganizationInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutUser_Organization_TeamsInput = {
  create: TeamCreateWithoutUser_Organization_TeamsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutOrganizationInput = {
  name: Scalars['String']['input'];
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutTeamInput>;
};

export type TeamCreateWithoutUser_Organization_TeamsInput = {
  name: Scalars['String']['input'];
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutTeamsInput>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organization_id: Scalars['Int']['output'];
};

export type TeamListRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamMaxAggregate = {
  __typename?: 'TeamMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TeamMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamMinAggregate = {
  __typename?: 'TeamMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TeamMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamNullableRelationFilter = {
  is?: InputMaybe<TeamWhereInput>;
  isNot?: InputMaybe<TeamWhereInput>;
};

export type TeamOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithAggregationInput = {
  _avg?: InputMaybe<TeamAvgOrderByAggregateInput>;
  _count?: InputMaybe<TeamCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamMinOrderByAggregateInput>;
  _sum?: InputMaybe<TeamSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organization_id?: InputMaybe<SortOrder>;
  user_organization_teams?: InputMaybe<User_Organization_TeamOrderByRelationAggregateInput>;
};

export enum TeamScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  OrganizationId = 'organization_id'
}

export type TeamScalarWhereInput = {
  AND?: InputMaybe<Array<TeamScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  organization_id?: InputMaybe<IntFilter>;
};

export type TeamScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  organization_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type TeamSumAggregate = {
  __typename?: 'TeamSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TeamSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
};

export type TeamUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutTeamsNestedInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutTeamNestedInput>;
};

export type TeamUpdateManyMutationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TeamUpdateManyWithWhereWithoutOrganizationInput = {
  data: TeamUpdateManyMutationInput;
  where: TeamScalarWhereInput;
};

export type TeamUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<TeamCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<TeamUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<TeamUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type TeamUpdateOneWithoutUser_Organization_TeamsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutUser_Organization_TeamsInput>;
  create?: InputMaybe<TeamCreateWithoutUser_Organization_TeamsInput>;
  delete?: InputMaybe<TeamWhereInput>;
  disconnect?: InputMaybe<TeamWhereInput>;
  update?: InputMaybe<TeamUpdateToOneWithWhereWithoutUser_Organization_TeamsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutUser_Organization_TeamsInput>;
};

export type TeamUpdateToOneWithWhereWithoutUser_Organization_TeamsInput = {
  data: TeamUpdateWithoutUser_Organization_TeamsInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: TeamUpdateWithoutOrganizationInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateWithoutOrganizationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutTeamNestedInput>;
};

export type TeamUpdateWithoutUser_Organization_TeamsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutTeamsNestedInput>;
};

export type TeamUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: TeamCreateWithoutOrganizationInput;
  update: TeamUpdateWithoutOrganizationInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithoutUser_Organization_TeamsInput = {
  create: TeamCreateWithoutUser_Organization_TeamsInput;
  update: TeamUpdateWithoutUser_Organization_TeamsInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationNullableRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  user_organization_teams?: InputMaybe<User_Organization_TeamListRelationFilter>;
};

export type TeamWhereUniqueInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  name_organization_id?: InputMaybe<TeamNameOrganization_IdCompoundUniqueInput>;
  organization?: InputMaybe<OrganizationNullableRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  user_organization_teams?: InputMaybe<User_Organization_TeamListRelationFilter>;
};

export type Trace = {
  __typename?: 'Trace';
  _count?: Maybe<TraceCount>;
  active_time: Scalars['Decimal']['output'];
  all_time: Scalars['Decimal']['output'];
  created_at: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  images: Array<Asset>;
  in_active_time: Scalars['Decimal']['output'];
  logs: Array<Log>;
  organization_id: Scalars['Int']['output'];
  parts: Array<Part>;
  updated_at: Scalars['DateTime']['output'];
  user_id: Scalars['Int']['output'];
  user_organization?: Maybe<User_Organization>;
  user_organization_id: Scalars['Int']['output'];
};


export type TraceImagesArgs = {
  cursor?: InputMaybe<AssetWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type TraceLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type TracePartsArgs = {
  cursor?: InputMaybe<PartWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartWhereInput>;
};


export type TraceUser_OrganizationArgs = {
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type TraceAvgAggregate = {
  __typename?: 'TraceAvgAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  all_time?: Maybe<Scalars['Decimal']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  user_organization_id?: Maybe<Scalars['Float']['output']>;
};

export type TraceAvgOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceCount = {
  __typename?: 'TraceCount';
  images: Scalars['Int']['output'];
  logs: Scalars['Int']['output'];
  parts: Scalars['Int']['output'];
};


export type TraceCountImagesArgs = {
  where?: InputMaybe<AssetWhereInput>;
};


export type TraceCountLogsArgs = {
  where?: InputMaybe<LogWhereInput>;
};


export type TraceCountPartsArgs = {
  where?: InputMaybe<PartWhereInput>;
};

export type TraceCountAggregate = {
  __typename?: 'TraceCountAggregate';
  _all: Scalars['Int']['output'];
  active_time: Scalars['Int']['output'];
  all_time: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  in_active_time: Scalars['Int']['output'];
  organization_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  user_organization_id: Scalars['Int']['output'];
};

export type TraceCountOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceCreateInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  images?: InputMaybe<AssetCreateNestedManyWithoutTraceInput>;
  in_active_time: Scalars['Decimal']['input'];
  logs?: InputMaybe<LogCreateNestedManyWithoutTraceInput>;
  parts?: InputMaybe<PartCreateNestedManyWithoutTraceInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutTracesInput>;
};

export type TraceCreateManyInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  organization_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_id: Scalars['Int']['input'];
  user_organization_id: Scalars['Int']['input'];
};

export type TraceCreateManyUser_OrganizationInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  in_active_time: Scalars['Decimal']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TraceCreateManyUser_OrganizationInputEnvelope = {
  data: Array<TraceCreateManyUser_OrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TraceCreateNestedManyWithoutUser_OrganizationInput = {
  connect?: InputMaybe<Array<TraceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TraceCreateOrConnectWithoutUser_OrganizationInput>>;
  create?: InputMaybe<Array<TraceCreateWithoutUser_OrganizationInput>>;
  createMany?: InputMaybe<TraceCreateManyUser_OrganizationInputEnvelope>;
};

export type TraceCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<TraceCreateWithoutImagesInput>;
};

export type TraceCreateNestedOneWithoutLogsInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<TraceCreateWithoutLogsInput>;
};

export type TraceCreateNestedOneWithoutPartsInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutPartsInput>;
  create?: InputMaybe<TraceCreateWithoutPartsInput>;
};

export type TraceCreateOrConnectWithoutImagesInput = {
  create: TraceCreateWithoutImagesInput;
  where: TraceWhereUniqueInput;
};

export type TraceCreateOrConnectWithoutLogsInput = {
  create: TraceCreateWithoutLogsInput;
  where: TraceWhereUniqueInput;
};

export type TraceCreateOrConnectWithoutPartsInput = {
  create: TraceCreateWithoutPartsInput;
  where: TraceWhereUniqueInput;
};

export type TraceCreateOrConnectWithoutUser_OrganizationInput = {
  create: TraceCreateWithoutUser_OrganizationInput;
  where: TraceWhereUniqueInput;
};

export type TraceCreateWithoutImagesInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  in_active_time: Scalars['Decimal']['input'];
  logs?: InputMaybe<LogCreateNestedManyWithoutTraceInput>;
  parts?: InputMaybe<PartCreateNestedManyWithoutTraceInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutTracesInput>;
};

export type TraceCreateWithoutLogsInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  images?: InputMaybe<AssetCreateNestedManyWithoutTraceInput>;
  in_active_time: Scalars['Decimal']['input'];
  parts?: InputMaybe<PartCreateNestedManyWithoutTraceInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutTracesInput>;
};

export type TraceCreateWithoutPartsInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  images?: InputMaybe<AssetCreateNestedManyWithoutTraceInput>;
  in_active_time: Scalars['Decimal']['input'];
  logs?: InputMaybe<LogCreateNestedManyWithoutTraceInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutTracesInput>;
};

export type TraceCreateWithoutUser_OrganizationInput = {
  active_time: Scalars['Decimal']['input'];
  all_time: Scalars['Decimal']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  images?: InputMaybe<AssetCreateNestedManyWithoutTraceInput>;
  in_active_time: Scalars['Decimal']['input'];
  logs?: InputMaybe<LogCreateNestedManyWithoutTraceInput>;
  parts?: InputMaybe<PartCreateNestedManyWithoutTraceInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TraceGroupBy = {
  __typename?: 'TraceGroupBy';
  _avg?: Maybe<TraceAvgAggregate>;
  _count?: Maybe<TraceCountAggregate>;
  _max?: Maybe<TraceMaxAggregate>;
  _min?: Maybe<TraceMinAggregate>;
  _sum?: Maybe<TraceSumAggregate>;
  active_time: Scalars['Decimal']['output'];
  all_time: Scalars['Decimal']['output'];
  created_at: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  in_active_time: Scalars['Decimal']['output'];
  organization_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_id: Scalars['Int']['output'];
  user_organization_id: Scalars['Int']['output'];
};

export type TraceListRelationFilter = {
  every?: InputMaybe<TraceWhereInput>;
  none?: InputMaybe<TraceWhereInput>;
  some?: InputMaybe<TraceWhereInput>;
};

export type TraceMaxAggregate = {
  __typename?: 'TraceMaxAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  all_time?: Maybe<Scalars['Decimal']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TraceMaxOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceMinAggregate = {
  __typename?: 'TraceMinAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  all_time?: Maybe<Scalars['Decimal']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TraceMinOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TraceOrderByWithAggregationInput = {
  _avg?: InputMaybe<TraceAvgOrderByAggregateInput>;
  _count?: InputMaybe<TraceCountOrderByAggregateInput>;
  _max?: InputMaybe<TraceMaxOrderByAggregateInput>;
  _min?: InputMaybe<TraceMinOrderByAggregateInput>;
  _sum?: InputMaybe<TraceSumOrderByAggregateInput>;
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceOrderByWithRelationInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<AssetOrderByRelationAggregateInput>;
  in_active_time?: InputMaybe<SortOrder>;
  logs?: InputMaybe<LogOrderByRelationAggregateInput>;
  organization_id?: InputMaybe<SortOrder>;
  parts?: InputMaybe<PartOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization?: InputMaybe<User_OrganizationOrderByWithRelationInput>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceRelationFilter = {
  is?: InputMaybe<TraceWhereInput>;
  isNot?: InputMaybe<TraceWhereInput>;
};

export enum TraceScalarFieldEnum {
  ActiveTime = 'active_time',
  AllTime = 'all_time',
  CreatedAt = 'created_at',
  Date = 'date',
  Id = 'id',
  InActiveTime = 'in_active_time',
  OrganizationId = 'organization_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  UserOrganizationId = 'user_organization_id'
}

export type TraceScalarWhereInput = {
  AND?: InputMaybe<Array<TraceScalarWhereInput>>;
  NOT?: InputMaybe<Array<TraceScalarWhereInput>>;
  OR?: InputMaybe<Array<TraceScalarWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  all_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  in_active_time?: InputMaybe<DecimalFilter>;
  organization_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
  user_organization_id?: InputMaybe<IntFilter>;
};

export type TraceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TraceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TraceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TraceScalarWhereWithAggregatesInput>>;
  active_time?: InputMaybe<DecimalWithAggregatesFilter>;
  all_time?: InputMaybe<DecimalWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  in_active_time?: InputMaybe<DecimalWithAggregatesFilter>;
  organization_id?: InputMaybe<IntWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
  user_organization_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type TraceSumAggregate = {
  __typename?: 'TraceSumAggregate';
  active_time?: Maybe<Scalars['Decimal']['output']>;
  all_time?: Maybe<Scalars['Decimal']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  in_active_time?: Maybe<Scalars['Decimal']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type TraceSumOrderByAggregateInput = {
  active_time?: InputMaybe<SortOrder>;
  all_time?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_active_time?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type TraceUpdateInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  images?: InputMaybe<AssetUpdateManyWithoutTraceNestedInput>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  logs?: InputMaybe<LogUpdateManyWithoutTraceNestedInput>;
  parts?: InputMaybe<PartUpdateManyWithoutTraceNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutTracesNestedInput>;
};

export type TraceUpdateManyMutationInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TraceUpdateManyWithWhereWithoutUser_OrganizationInput = {
  data: TraceUpdateManyMutationInput;
  where: TraceScalarWhereInput;
};

export type TraceUpdateManyWithoutUser_OrganizationNestedInput = {
  connect?: InputMaybe<Array<TraceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TraceCreateOrConnectWithoutUser_OrganizationInput>>;
  create?: InputMaybe<Array<TraceCreateWithoutUser_OrganizationInput>>;
  createMany?: InputMaybe<TraceCreateManyUser_OrganizationInputEnvelope>;
  delete?: InputMaybe<Array<TraceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TraceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TraceWhereUniqueInput>>;
  set?: InputMaybe<Array<TraceWhereUniqueInput>>;
  update?: InputMaybe<Array<TraceUpdateWithWhereUniqueWithoutUser_OrganizationInput>>;
  updateMany?: InputMaybe<Array<TraceUpdateManyWithWhereWithoutUser_OrganizationInput>>;
  upsert?: InputMaybe<Array<TraceUpsertWithWhereUniqueWithoutUser_OrganizationInput>>;
};

export type TraceUpdateOneRequiredWithoutImagesNestedInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<TraceCreateWithoutImagesInput>;
  update?: InputMaybe<TraceUpdateToOneWithWhereWithoutImagesInput>;
  upsert?: InputMaybe<TraceUpsertWithoutImagesInput>;
};

export type TraceUpdateOneRequiredWithoutLogsNestedInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<TraceCreateWithoutLogsInput>;
  update?: InputMaybe<TraceUpdateToOneWithWhereWithoutLogsInput>;
  upsert?: InputMaybe<TraceUpsertWithoutLogsInput>;
};

export type TraceUpdateOneRequiredWithoutPartsNestedInput = {
  connect?: InputMaybe<TraceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TraceCreateOrConnectWithoutPartsInput>;
  create?: InputMaybe<TraceCreateWithoutPartsInput>;
  update?: InputMaybe<TraceUpdateToOneWithWhereWithoutPartsInput>;
  upsert?: InputMaybe<TraceUpsertWithoutPartsInput>;
};

export type TraceUpdateToOneWithWhereWithoutImagesInput = {
  data: TraceUpdateWithoutImagesInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceUpdateToOneWithWhereWithoutLogsInput = {
  data: TraceUpdateWithoutLogsInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceUpdateToOneWithWhereWithoutPartsInput = {
  data: TraceUpdateWithoutPartsInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceUpdateWithWhereUniqueWithoutUser_OrganizationInput = {
  data: TraceUpdateWithoutUser_OrganizationInput;
  where: TraceWhereUniqueInput;
};

export type TraceUpdateWithoutImagesInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  logs?: InputMaybe<LogUpdateManyWithoutTraceNestedInput>;
  parts?: InputMaybe<PartUpdateManyWithoutTraceNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutTracesNestedInput>;
};

export type TraceUpdateWithoutLogsInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  images?: InputMaybe<AssetUpdateManyWithoutTraceNestedInput>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  parts?: InputMaybe<PartUpdateManyWithoutTraceNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutTracesNestedInput>;
};

export type TraceUpdateWithoutPartsInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  images?: InputMaybe<AssetUpdateManyWithoutTraceNestedInput>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  logs?: InputMaybe<LogUpdateManyWithoutTraceNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutTracesNestedInput>;
};

export type TraceUpdateWithoutUser_OrganizationInput = {
  active_time?: InputMaybe<Scalars['Decimal']['input']>;
  all_time?: InputMaybe<Scalars['Decimal']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  images?: InputMaybe<AssetUpdateManyWithoutTraceNestedInput>;
  in_active_time?: InputMaybe<Scalars['Decimal']['input']>;
  logs?: InputMaybe<LogUpdateManyWithoutTraceNestedInput>;
  parts?: InputMaybe<PartUpdateManyWithoutTraceNestedInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TraceUpsertWithWhereUniqueWithoutUser_OrganizationInput = {
  create: TraceCreateWithoutUser_OrganizationInput;
  update: TraceUpdateWithoutUser_OrganizationInput;
  where: TraceWhereUniqueInput;
};

export type TraceUpsertWithoutImagesInput = {
  create: TraceCreateWithoutImagesInput;
  update: TraceUpdateWithoutImagesInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceUpsertWithoutLogsInput = {
  create: TraceCreateWithoutLogsInput;
  update: TraceUpdateWithoutLogsInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceUpsertWithoutPartsInput = {
  create: TraceCreateWithoutPartsInput;
  update: TraceUpdateWithoutPartsInput;
  where?: InputMaybe<TraceWhereInput>;
};

export type TraceWhereInput = {
  AND?: InputMaybe<Array<TraceWhereInput>>;
  NOT?: InputMaybe<Array<TraceWhereInput>>;
  OR?: InputMaybe<Array<TraceWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  all_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<AssetListRelationFilter>;
  in_active_time?: InputMaybe<DecimalFilter>;
  logs?: InputMaybe<LogListRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  parts?: InputMaybe<PartListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
  user_organization?: InputMaybe<User_OrganizationNullableRelationFilter>;
  user_organization_id?: InputMaybe<IntFilter>;
};

export type TraceWhereUniqueInput = {
  AND?: InputMaybe<Array<TraceWhereInput>>;
  NOT?: InputMaybe<Array<TraceWhereInput>>;
  OR?: InputMaybe<Array<TraceWhereInput>>;
  active_time?: InputMaybe<DecimalFilter>;
  all_time?: InputMaybe<DecimalFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_user_organization_id_date?: InputMaybe<TraceIdUser_Organization_IdDateCompoundUniqueInput>;
  images?: InputMaybe<AssetListRelationFilter>;
  in_active_time?: InputMaybe<DecimalFilter>;
  logs?: InputMaybe<LogListRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  parts?: InputMaybe<PartListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
  user_organization?: InputMaybe<User_OrganizationNullableRelationFilter>;
  user_organization_id?: InputMaybe<IntFilter>;
  user_organization_id_date?: InputMaybe<TraceUser_Organization_IdDateCompoundUniqueInput>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Array<Organization>>;
  status: Account_Status;
  updated_at: Scalars['DateTime']['output'];
  user_organization?: Maybe<User_Organization>;
  user_organizations: Array<User_Organization>;
  username: Scalars['String']['output'];
};


export type UserOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type UserUser_OrganizationArgs = {
  orgId?: InputMaybe<Scalars['Float']['input']>;
};


export type UserUser_OrganizationsArgs = {
  cursor?: InputMaybe<User_OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  user_organizations: Scalars['Int']['output'];
};


export type UserCountUser_OrganizationsArgs = {
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organizations?: InputMaybe<User_OrganizationCreateNestedManyWithoutUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutUser_OrganizationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_OrganizationsInput>;
  create?: InputMaybe<UserCreateWithoutUser_OrganizationsInput>;
};

export type UserCreateOrConnectWithoutUser_OrganizationsInput = {
  create: UserCreateWithoutUser_OrganizationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutUser_OrganizationsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  status: Account_Status;
  updated_at: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Account_Status>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Account_Status>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_organizations?: InputMaybe<User_OrganizationOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Status = 'status',
  UpdatedAt = 'updated_at',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<Enumaccount_StatusWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_organizations?: InputMaybe<User_OrganizationUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyMutationInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateOneWithoutUser_OrganizationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_OrganizationsInput>;
  create?: InputMaybe<UserCreateWithoutUser_OrganizationsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUser_OrganizationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUser_OrganizationsInput>;
};

export type UserUpdateToOneWithWhereWithoutUser_OrganizationsInput = {
  data: UserUpdateWithoutUser_OrganizationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutUser_OrganizationsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Account_Status>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithoutUser_OrganizationsInput = {
  create: UserCreateWithoutUser_OrganizationsInput;
  update: UserUpdateWithoutUser_OrganizationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumaccount_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_organizations?: InputMaybe<User_OrganizationListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumaccount_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_organizations?: InputMaybe<User_OrganizationListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User_Organization = {
  __typename?: 'User_organization';
  _count?: Maybe<User_OrganizationCount>;
  id: Scalars['Int']['output'];
  invitation_status?: Maybe<User_Invitation_Status>;
  last_invited?: Maybe<Scalars['DateTime']['output']>;
  organization?: Maybe<Organization>;
  organization_id: Scalars['Int']['output'];
  role: User_Role;
  slug: Scalars['String']['output'];
  traces: Array<Trace>;
  user?: Maybe<User>;
  user_id: Scalars['Int']['output'];
  user_organization_teams: Array<User_Organization_Team>;
};


export type User_OrganizationOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type User_OrganizationTracesArgs = {
  cursor?: InputMaybe<TraceWhereUniqueInput>;
  distinct?: InputMaybe<Array<TraceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TraceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TraceWhereInput>;
};


export type User_OrganizationUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type User_OrganizationUser_Organization_TeamsArgs = {
  cursor?: InputMaybe<User_Organization_TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_Organization_TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_Organization_TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};

export type User_OrganizationAvgAggregate = {
  __typename?: 'User_organizationAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type User_OrganizationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationCount = {
  __typename?: 'User_organizationCount';
  traces: Scalars['Int']['output'];
  user_organization_teams: Scalars['Int']['output'];
};


export type User_OrganizationCountTracesArgs = {
  where?: InputMaybe<TraceWhereInput>;
};


export type User_OrganizationCountUser_Organization_TeamsArgs = {
  where?: InputMaybe<User_Organization_TeamWhereInput>;
};

export type User_OrganizationCountAggregate = {
  __typename?: 'User_organizationCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  invitation_status: Scalars['Int']['output'];
  last_invited: Scalars['Int']['output'];
  organization_id: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type User_OrganizationCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  invitation_status?: InputMaybe<SortOrder>;
  last_invited?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationCreateInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutUser_OrganizationsInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceCreateNestedManyWithoutUser_OrganizationInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutUser_OrganizationsInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutUser_OrganizationInput>;
};

export type User_OrganizationCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization_id: Scalars['Int']['input'];
  role?: InputMaybe<User_Role>;
  slug: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};

export type User_OrganizationCreateManyOrganizationInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<User_Role>;
  user_id: Scalars['Int']['input'];
};

export type User_OrganizationCreateManyOrganizationInputEnvelope = {
  data: Array<User_OrganizationCreateManyOrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_OrganizationCreateManyUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization_id: Scalars['Int']['input'];
  role?: InputMaybe<User_Role>;
  slug: Scalars['String']['input'];
};

export type User_OrganizationCreateManyUserInputEnvelope = {
  data: Array<User_OrganizationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_OrganizationCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_OrganizationCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<User_OrganizationCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<User_OrganizationCreateManyOrganizationInputEnvelope>;
};

export type User_OrganizationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_OrganizationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<User_OrganizationCreateWithoutUserInput>>;
  createMany?: InputMaybe<User_OrganizationCreateManyUserInputEnvelope>;
};

export type User_OrganizationCreateNestedOneWithoutTracesInput = {
  connect?: InputMaybe<User_OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OrganizationCreateOrConnectWithoutTracesInput>;
  create?: InputMaybe<User_OrganizationCreateWithoutTracesInput>;
};

export type User_OrganizationCreateNestedOneWithoutUser_Organization_TeamsInput = {
  connect?: InputMaybe<User_OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OrganizationCreateOrConnectWithoutUser_Organization_TeamsInput>;
  create?: InputMaybe<User_OrganizationCreateWithoutUser_Organization_TeamsInput>;
};

export type User_OrganizationCreateOrConnectWithoutOrganizationInput = {
  create: User_OrganizationCreateWithoutOrganizationInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationCreateOrConnectWithoutTracesInput = {
  create: User_OrganizationCreateWithoutTracesInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationCreateOrConnectWithoutUserInput = {
  create: User_OrganizationCreateWithoutUserInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationCreateOrConnectWithoutUser_Organization_TeamsInput = {
  create: User_OrganizationCreateWithoutUser_Organization_TeamsInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationCreateWithoutOrganizationInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceCreateNestedManyWithoutUser_OrganizationInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutUser_OrganizationsInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutUser_OrganizationInput>;
};

export type User_OrganizationCreateWithoutTracesInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutUser_OrganizationsInput>;
  role?: InputMaybe<User_Role>;
  user?: InputMaybe<UserCreateNestedOneWithoutUser_OrganizationsInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutUser_OrganizationInput>;
};

export type User_OrganizationCreateWithoutUserInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutUser_OrganizationsInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceCreateNestedManyWithoutUser_OrganizationInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamCreateNestedManyWithoutUser_OrganizationInput>;
};

export type User_OrganizationCreateWithoutUser_Organization_TeamsInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationCreateNestedOneWithoutUser_OrganizationsInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceCreateNestedManyWithoutUser_OrganizationInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutUser_OrganizationsInput>;
};

export type User_OrganizationGroupBy = {
  __typename?: 'User_organizationGroupBy';
  _avg?: Maybe<User_OrganizationAvgAggregate>;
  _count?: Maybe<User_OrganizationCountAggregate>;
  _max?: Maybe<User_OrganizationMaxAggregate>;
  _min?: Maybe<User_OrganizationMinAggregate>;
  _sum?: Maybe<User_OrganizationSumAggregate>;
  id: Scalars['Int']['output'];
  invitation_status?: Maybe<User_Invitation_Status>;
  last_invited?: Maybe<Scalars['DateTime']['output']>;
  organization_id: Scalars['Int']['output'];
  role: User_Role;
  slug: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
};

export type User_OrganizationListRelationFilter = {
  every?: InputMaybe<User_OrganizationWhereInput>;
  none?: InputMaybe<User_OrganizationWhereInput>;
  some?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationMaxAggregate = {
  __typename?: 'User_organizationMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  invitation_status?: Maybe<User_Invitation_Status>;
  last_invited?: Maybe<Scalars['DateTime']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<User_Role>;
  slug?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type User_OrganizationMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  invitation_status?: InputMaybe<SortOrder>;
  last_invited?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationMinAggregate = {
  __typename?: 'User_organizationMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  invitation_status?: Maybe<User_Invitation_Status>;
  last_invited?: Maybe<Scalars['DateTime']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<User_Role>;
  slug?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type User_OrganizationMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  invitation_status?: InputMaybe<SortOrder>;
  last_invited?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationNullableRelationFilter = {
  is?: InputMaybe<User_OrganizationWhereInput>;
  isNot?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type User_OrganizationOrderByWithAggregationInput = {
  _avg?: InputMaybe<User_OrganizationAvgOrderByAggregateInput>;
  _count?: InputMaybe<User_OrganizationCountOrderByAggregateInput>;
  _max?: InputMaybe<User_OrganizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<User_OrganizationMinOrderByAggregateInput>;
  _sum?: InputMaybe<User_OrganizationSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  invitation_status?: InputMaybe<SortOrderInput>;
  last_invited?: InputMaybe<SortOrderInput>;
  organization_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  invitation_status?: InputMaybe<SortOrderInput>;
  last_invited?: InputMaybe<SortOrderInput>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organization_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  traces?: InputMaybe<TraceOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
  user_organization_teams?: InputMaybe<User_Organization_TeamOrderByRelationAggregateInput>;
};

export enum User_OrganizationScalarFieldEnum {
  Id = 'id',
  InvitationStatus = 'invitation_status',
  LastInvited = 'last_invited',
  OrganizationId = 'organization_id',
  Role = 'role',
  Slug = 'slug',
  UserId = 'user_id'
}

export type User_OrganizationScalarWhereInput = {
  AND?: InputMaybe<Array<User_OrganizationScalarWhereInput>>;
  NOT?: InputMaybe<Array<User_OrganizationScalarWhereInput>>;
  OR?: InputMaybe<Array<User_OrganizationScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  invitation_status?: InputMaybe<Enumuser_Invitation_StatusNullableFilter>;
  last_invited?: InputMaybe<DateTimeNullableFilter>;
  organization_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<Enumuser_RoleFilter>;
  slug?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type User_OrganizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<User_OrganizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<User_OrganizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<User_OrganizationScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  invitation_status?: InputMaybe<Enumuser_Invitation_StatusNullableWithAggregatesFilter>;
  last_invited?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  organization_id?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<Enumuser_RoleWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type User_OrganizationSumAggregate = {
  __typename?: 'User_organizationSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type User_OrganizationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type User_OrganizationUpdateInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutUser_OrganizationsNestedInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceUpdateManyWithoutUser_OrganizationNestedInput>;
  user?: InputMaybe<UserUpdateOneWithoutUser_OrganizationsNestedInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutUser_OrganizationNestedInput>;
};

export type User_OrganizationUpdateManyMutationInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<User_Role>;
};

export type User_OrganizationUpdateManyWithWhereWithoutOrganizationInput = {
  data: User_OrganizationUpdateManyMutationInput;
  where: User_OrganizationScalarWhereInput;
};

export type User_OrganizationUpdateManyWithWhereWithoutUserInput = {
  data: User_OrganizationUpdateManyMutationInput;
  where: User_OrganizationScalarWhereInput;
};

export type User_OrganizationUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_OrganizationCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<User_OrganizationCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<User_OrganizationCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_OrganizationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  set?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  update?: InputMaybe<Array<User_OrganizationUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<User_OrganizationUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<User_OrganizationUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type User_OrganizationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_OrganizationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<User_OrganizationCreateWithoutUserInput>>;
  createMany?: InputMaybe<User_OrganizationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_OrganizationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  set?: InputMaybe<Array<User_OrganizationWhereUniqueInput>>;
  update?: InputMaybe<Array<User_OrganizationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<User_OrganizationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<User_OrganizationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type User_OrganizationUpdateOneWithoutTracesNestedInput = {
  connect?: InputMaybe<User_OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OrganizationCreateOrConnectWithoutTracesInput>;
  create?: InputMaybe<User_OrganizationCreateWithoutTracesInput>;
  delete?: InputMaybe<User_OrganizationWhereInput>;
  disconnect?: InputMaybe<User_OrganizationWhereInput>;
  update?: InputMaybe<User_OrganizationUpdateToOneWithWhereWithoutTracesInput>;
  upsert?: InputMaybe<User_OrganizationUpsertWithoutTracesInput>;
};

export type User_OrganizationUpdateOneWithoutUser_Organization_TeamsNestedInput = {
  connect?: InputMaybe<User_OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OrganizationCreateOrConnectWithoutUser_Organization_TeamsInput>;
  create?: InputMaybe<User_OrganizationCreateWithoutUser_Organization_TeamsInput>;
  delete?: InputMaybe<User_OrganizationWhereInput>;
  disconnect?: InputMaybe<User_OrganizationWhereInput>;
  update?: InputMaybe<User_OrganizationUpdateToOneWithWhereWithoutUser_Organization_TeamsInput>;
  upsert?: InputMaybe<User_OrganizationUpsertWithoutUser_Organization_TeamsInput>;
};

export type User_OrganizationUpdateToOneWithWhereWithoutTracesInput = {
  data: User_OrganizationUpdateWithoutTracesInput;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationUpdateToOneWithWhereWithoutUser_Organization_TeamsInput = {
  data: User_OrganizationUpdateWithoutUser_Organization_TeamsInput;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: User_OrganizationUpdateWithoutOrganizationInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationUpdateWithWhereUniqueWithoutUserInput = {
  data: User_OrganizationUpdateWithoutUserInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationUpdateWithoutOrganizationInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceUpdateManyWithoutUser_OrganizationNestedInput>;
  user?: InputMaybe<UserUpdateOneWithoutUser_OrganizationsNestedInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutUser_OrganizationNestedInput>;
};

export type User_OrganizationUpdateWithoutTracesInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutUser_OrganizationsNestedInput>;
  role?: InputMaybe<User_Role>;
  user?: InputMaybe<UserUpdateOneWithoutUser_OrganizationsNestedInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutUser_OrganizationNestedInput>;
};

export type User_OrganizationUpdateWithoutUserInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutUser_OrganizationsNestedInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceUpdateManyWithoutUser_OrganizationNestedInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamUpdateManyWithoutUser_OrganizationNestedInput>;
};

export type User_OrganizationUpdateWithoutUser_Organization_TeamsInput = {
  invitation_status?: InputMaybe<User_Invitation_Status>;
  last_invited?: InputMaybe<Scalars['DateTime']['input']>;
  organization?: InputMaybe<OrganizationUpdateOneWithoutUser_OrganizationsNestedInput>;
  role?: InputMaybe<User_Role>;
  traces?: InputMaybe<TraceUpdateManyWithoutUser_OrganizationNestedInput>;
  user?: InputMaybe<UserUpdateOneWithoutUser_OrganizationsNestedInput>;
};

export type User_OrganizationUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: User_OrganizationCreateWithoutOrganizationInput;
  update: User_OrganizationUpdateWithoutOrganizationInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationUpsertWithWhereUniqueWithoutUserInput = {
  create: User_OrganizationCreateWithoutUserInput;
  update: User_OrganizationUpdateWithoutUserInput;
  where: User_OrganizationWhereUniqueInput;
};

export type User_OrganizationUpsertWithoutTracesInput = {
  create: User_OrganizationCreateWithoutTracesInput;
  update: User_OrganizationUpdateWithoutTracesInput;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationUpsertWithoutUser_Organization_TeamsInput = {
  create: User_OrganizationCreateWithoutUser_Organization_TeamsInput;
  update: User_OrganizationUpdateWithoutUser_Organization_TeamsInput;
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_OrganizationWhereInput = {
  AND?: InputMaybe<Array<User_OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<User_OrganizationWhereInput>>;
  OR?: InputMaybe<Array<User_OrganizationWhereInput>>;
  id?: InputMaybe<IntFilter>;
  invitation_status?: InputMaybe<Enumuser_Invitation_StatusNullableFilter>;
  last_invited?: InputMaybe<DateTimeNullableFilter>;
  organization?: InputMaybe<OrganizationNullableRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<Enumuser_RoleFilter>;
  slug?: InputMaybe<StringFilter>;
  traces?: InputMaybe<TraceListRelationFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
  user_organization_teams?: InputMaybe<User_Organization_TeamListRelationFilter>;
};

export type User_OrganizationWhereUniqueInput = {
  AND?: InputMaybe<Array<User_OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<User_OrganizationWhereInput>>;
  OR?: InputMaybe<Array<User_OrganizationWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_user_id_organization_id?: InputMaybe<User_OrganizationIdUser_IdOrganization_IdCompoundUniqueInput>;
  invitation_status?: InputMaybe<Enumuser_Invitation_StatusNullableFilter>;
  last_invited?: InputMaybe<DateTimeNullableFilter>;
  organization?: InputMaybe<OrganizationNullableRelationFilter>;
  organization_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<Enumuser_RoleFilter>;
  slug?: InputMaybe<StringFilter>;
  traces?: InputMaybe<TraceListRelationFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
  user_id_organization_id?: InputMaybe<User_OrganizationUser_IdOrganization_IdCompoundUniqueInput>;
  user_id_organization_id_role?: InputMaybe<User_OrganizationUser_IdOrganization_IdRoleCompoundUniqueInput>;
  user_id_slug?: InputMaybe<User_OrganizationUser_IdSlugCompoundUniqueInput>;
  user_organization_teams?: InputMaybe<User_Organization_TeamListRelationFilter>;
};

export type User_Organization_Team = {
  __typename?: 'User_organization_team';
  id: Scalars['Int']['output'];
  role: Team_Role;
  team?: Maybe<Team>;
  team_id: Scalars['Int']['output'];
  user_organization?: Maybe<User_Organization>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};


export type User_Organization_TeamTeamArgs = {
  where?: InputMaybe<TeamWhereInput>;
};


export type User_Organization_TeamUser_OrganizationArgs = {
  where?: InputMaybe<User_OrganizationWhereInput>;
};

export type User_Organization_TeamAvgAggregate = {
  __typename?: 'User_organization_teamAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_organization_id?: Maybe<Scalars['Float']['output']>;
};

export type User_Organization_TeamAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamCountAggregate = {
  __typename?: 'User_organization_teamCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  team_id: Scalars['Int']['output'];
  user_organization_id: Scalars['Int']['output'];
};

export type User_Organization_TeamCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamCreateInput = {
  role?: InputMaybe<Team_Role>;
  team?: InputMaybe<TeamCreateNestedOneWithoutUser_Organization_TeamsInput>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutUser_Organization_TeamsInput>;
};

export type User_Organization_TeamCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Team_Role>;
  team_id: Scalars['Int']['input'];
  user_organization_id?: InputMaybe<Scalars['Int']['input']>;
};

export type User_Organization_TeamCreateManyTeamInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Team_Role>;
  user_organization_id?: InputMaybe<Scalars['Int']['input']>;
};

export type User_Organization_TeamCreateManyTeamInputEnvelope = {
  data: Array<User_Organization_TeamCreateManyTeamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Organization_TeamCreateManyUser_OrganizationInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Team_Role>;
  team_id: Scalars['Int']['input'];
};

export type User_Organization_TeamCreateManyUser_OrganizationInputEnvelope = {
  data: Array<User_Organization_TeamCreateManyUser_OrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Organization_TeamCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_Organization_TeamCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<User_Organization_TeamCreateWithoutTeamInput>>;
  createMany?: InputMaybe<User_Organization_TeamCreateManyTeamInputEnvelope>;
};

export type User_Organization_TeamCreateNestedManyWithoutUser_OrganizationInput = {
  connect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_Organization_TeamCreateOrConnectWithoutUser_OrganizationInput>>;
  create?: InputMaybe<Array<User_Organization_TeamCreateWithoutUser_OrganizationInput>>;
  createMany?: InputMaybe<User_Organization_TeamCreateManyUser_OrganizationInputEnvelope>;
};

export type User_Organization_TeamCreateOrConnectWithoutTeamInput = {
  create: User_Organization_TeamCreateWithoutTeamInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamCreateOrConnectWithoutUser_OrganizationInput = {
  create: User_Organization_TeamCreateWithoutUser_OrganizationInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamCreateWithoutTeamInput = {
  role?: InputMaybe<Team_Role>;
  user_organization?: InputMaybe<User_OrganizationCreateNestedOneWithoutUser_Organization_TeamsInput>;
};

export type User_Organization_TeamCreateWithoutUser_OrganizationInput = {
  role?: InputMaybe<Team_Role>;
  team?: InputMaybe<TeamCreateNestedOneWithoutUser_Organization_TeamsInput>;
};

export type User_Organization_TeamGroupBy = {
  __typename?: 'User_organization_teamGroupBy';
  _avg?: Maybe<User_Organization_TeamAvgAggregate>;
  _count?: Maybe<User_Organization_TeamCountAggregate>;
  _max?: Maybe<User_Organization_TeamMaxAggregate>;
  _min?: Maybe<User_Organization_TeamMinAggregate>;
  _sum?: Maybe<User_Organization_TeamSumAggregate>;
  id: Scalars['Int']['output'];
  role: Team_Role;
  team_id: Scalars['Int']['output'];
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type User_Organization_TeamListRelationFilter = {
  every?: InputMaybe<User_Organization_TeamWhereInput>;
  none?: InputMaybe<User_Organization_TeamWhereInput>;
  some?: InputMaybe<User_Organization_TeamWhereInput>;
};

export type User_Organization_TeamMaxAggregate = {
  __typename?: 'User_organization_teamMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Team_Role>;
  team_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type User_Organization_TeamMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamMinAggregate = {
  __typename?: 'User_organization_teamMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Team_Role>;
  team_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type User_Organization_TeamMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamOrderByWithAggregationInput = {
  _avg?: InputMaybe<User_Organization_TeamAvgOrderByAggregateInput>;
  _count?: InputMaybe<User_Organization_TeamCountOrderByAggregateInput>;
  _max?: InputMaybe<User_Organization_TeamMaxOrderByAggregateInput>;
  _min?: InputMaybe<User_Organization_TeamMinOrderByAggregateInput>;
  _sum?: InputMaybe<User_Organization_TeamSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrderInput>;
};

export type User_Organization_TeamOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  team_id?: InputMaybe<SortOrder>;
  user_organization?: InputMaybe<User_OrganizationOrderByWithRelationInput>;
  user_organization_id?: InputMaybe<SortOrderInput>;
};

export enum User_Organization_TeamScalarFieldEnum {
  Id = 'id',
  Role = 'role',
  TeamId = 'team_id',
  UserOrganizationId = 'user_organization_id'
}

export type User_Organization_TeamScalarWhereInput = {
  AND?: InputMaybe<Array<User_Organization_TeamScalarWhereInput>>;
  NOT?: InputMaybe<Array<User_Organization_TeamScalarWhereInput>>;
  OR?: InputMaybe<Array<User_Organization_TeamScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<Enumteam_RoleFilter>;
  team_id?: InputMaybe<IntFilter>;
  user_organization_id?: InputMaybe<IntNullableFilter>;
};

export type User_Organization_TeamScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<User_Organization_TeamScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<User_Organization_TeamScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<User_Organization_TeamScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<Enumteam_RoleWithAggregatesFilter>;
  team_id?: InputMaybe<IntWithAggregatesFilter>;
  user_organization_id?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type User_Organization_TeamSumAggregate = {
  __typename?: 'User_organization_teamSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['Int']['output']>;
  user_organization_id?: Maybe<Scalars['Int']['output']>;
};

export type User_Organization_TeamSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  user_organization_id?: InputMaybe<SortOrder>;
};

export type User_Organization_TeamUpdateInput = {
  role?: InputMaybe<Team_Role>;
  team?: InputMaybe<TeamUpdateOneWithoutUser_Organization_TeamsNestedInput>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutUser_Organization_TeamsNestedInput>;
};

export type User_Organization_TeamUpdateManyMutationInput = {
  role?: InputMaybe<Team_Role>;
};

export type User_Organization_TeamUpdateManyWithWhereWithoutTeamInput = {
  data: User_Organization_TeamUpdateManyMutationInput;
  where: User_Organization_TeamScalarWhereInput;
};

export type User_Organization_TeamUpdateManyWithWhereWithoutUser_OrganizationInput = {
  data: User_Organization_TeamUpdateManyMutationInput;
  where: User_Organization_TeamScalarWhereInput;
};

export type User_Organization_TeamUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_Organization_TeamCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<User_Organization_TeamCreateWithoutTeamInput>>;
  createMany?: InputMaybe<User_Organization_TeamCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_Organization_TeamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  update?: InputMaybe<Array<User_Organization_TeamUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<User_Organization_TeamUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<User_Organization_TeamUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type User_Organization_TeamUpdateManyWithoutUser_OrganizationNestedInput = {
  connect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_Organization_TeamCreateOrConnectWithoutUser_OrganizationInput>>;
  create?: InputMaybe<Array<User_Organization_TeamCreateWithoutUser_OrganizationInput>>;
  createMany?: InputMaybe<User_Organization_TeamCreateManyUser_OrganizationInputEnvelope>;
  delete?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_Organization_TeamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<User_Organization_TeamWhereUniqueInput>>;
  update?: InputMaybe<Array<User_Organization_TeamUpdateWithWhereUniqueWithoutUser_OrganizationInput>>;
  updateMany?: InputMaybe<Array<User_Organization_TeamUpdateManyWithWhereWithoutUser_OrganizationInput>>;
  upsert?: InputMaybe<Array<User_Organization_TeamUpsertWithWhereUniqueWithoutUser_OrganizationInput>>;
};

export type User_Organization_TeamUpdateWithWhereUniqueWithoutTeamInput = {
  data: User_Organization_TeamUpdateWithoutTeamInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamUpdateWithWhereUniqueWithoutUser_OrganizationInput = {
  data: User_Organization_TeamUpdateWithoutUser_OrganizationInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamUpdateWithoutTeamInput = {
  role?: InputMaybe<Team_Role>;
  user_organization?: InputMaybe<User_OrganizationUpdateOneWithoutUser_Organization_TeamsNestedInput>;
};

export type User_Organization_TeamUpdateWithoutUser_OrganizationInput = {
  role?: InputMaybe<Team_Role>;
  team?: InputMaybe<TeamUpdateOneWithoutUser_Organization_TeamsNestedInput>;
};

export type User_Organization_TeamUpsertWithWhereUniqueWithoutTeamInput = {
  create: User_Organization_TeamCreateWithoutTeamInput;
  update: User_Organization_TeamUpdateWithoutTeamInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamUpsertWithWhereUniqueWithoutUser_OrganizationInput = {
  create: User_Organization_TeamCreateWithoutUser_OrganizationInput;
  update: User_Organization_TeamUpdateWithoutUser_OrganizationInput;
  where: User_Organization_TeamWhereUniqueInput;
};

export type User_Organization_TeamWhereInput = {
  AND?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  NOT?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  OR?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<Enumteam_RoleFilter>;
  team?: InputMaybe<TeamNullableRelationFilter>;
  team_id?: InputMaybe<IntFilter>;
  user_organization?: InputMaybe<User_OrganizationNullableRelationFilter>;
  user_organization_id?: InputMaybe<IntNullableFilter>;
};

export type User_Organization_TeamWhereUniqueInput = {
  AND?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  NOT?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  OR?: InputMaybe<Array<User_Organization_TeamWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Enumteam_RoleFilter>;
  team?: InputMaybe<TeamNullableRelationFilter>;
  team_id?: InputMaybe<IntFilter>;
  team_id_user_organization_id?: InputMaybe<User_Organization_TeamTeam_IdUser_Organization_IdCompoundUniqueInput>;
  team_id_user_organization_id_role?: InputMaybe<User_Organization_TeamTeam_IdUser_Organization_IdRoleCompoundUniqueInput>;
  user_organization?: InputMaybe<User_OrganizationNullableRelationFilter>;
  user_organization_id?: InputMaybe<IntNullableFilter>;
};

export type VerifyAccountInput = {
  token: Scalars['String']['input'];
};

export type VerifyAccountRes = {
  __typename?: 'VerifyAccountRes';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<FieldError>>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export enum Account_Status {
  Active = 'active',
  Initiated = 'initiated'
}

export type OrganizationIdSlugCompoundUniqueInput = {
  id: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type TeamNameOrganization_IdCompoundUniqueInput = {
  name: Scalars['String']['input'];
  organization_id: Scalars['Int']['input'];
};

export enum Team_Role {
  Manager = 'manager',
  Member = 'member'
}

export type TraceIdUser_Organization_IdDateCompoundUniqueInput = {
  date: Scalars['DateTime']['input'];
  id: Scalars['Int']['input'];
  user_organization_id: Scalars['Int']['input'];
};

export type TraceUser_Organization_IdDateCompoundUniqueInput = {
  date: Scalars['DateTime']['input'];
  user_organization_id: Scalars['Int']['input'];
};

export enum User_Invitation_Status {
  Connected = 'connected',
  Invited = 'invited',
  NotConnected = 'notConnected'
}

export type User_OrganizationIdUser_IdOrganization_IdCompoundUniqueInput = {
  id: Scalars['Int']['input'];
  organization_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type User_OrganizationUser_IdOrganization_IdCompoundUniqueInput = {
  organization_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type User_OrganizationUser_IdOrganization_IdRoleCompoundUniqueInput = {
  organization_id: Scalars['Int']['input'];
  role: User_Role;
  user_id: Scalars['Int']['input'];
};

export type User_OrganizationUser_IdSlugCompoundUniqueInput = {
  slug: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};

export type User_Organization_TeamTeam_IdUser_Organization_IdCompoundUniqueInput = {
  team_id: Scalars['Int']['input'];
  user_organization_id: Scalars['Int']['input'];
};

export type User_Organization_TeamTeam_IdUser_Organization_IdRoleCompoundUniqueInput = {
  role: Team_Role;
  team_id: Scalars['Int']['input'];
  user_organization_id: Scalars['Int']['input'];
};

export enum User_Role {
  Admin = 'admin',
  Owner = 'owner',
  User = 'user'
}

export type ErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type CoreOrganizationFragment = { __typename?: 'Organization', id: number, slug: string, name?: string | null };

export type DetailOrganizationFragment = { __typename?: 'Organization', id: number, slug: string, name?: string | null, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null, teams: Array<{ __typename?: 'Team', id: number, name: string, organization_id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null }> };

export type CoreDetailTeamFragment = { __typename?: 'Team', id: number, name: string, organization_id: number };

export type DetailTeamFragment = { __typename?: 'Team', id: number, name: string, organization_id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null };

export type CoreUserOrganizationTeamFragment = { __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null };

export type CoreUserOrganizationFragment = { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> };

export type DetailUserOrganizationFragment = { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, organization?: { __typename?: 'Organization', id: number, slug: string, name?: string | null, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null, teams: Array<{ __typename?: 'Team', id: number, name: string, organization_id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null }> } | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> };

export type UserFragment = { __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null };

export type DetailUserFragment = { __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null };

export type JoinTeamMutationVariables = Exact<{
  data: User_Organization_TeamCreateInput;
}>;


export type JoinTeamMutation = { __typename?: 'Mutation', createOneUser_organization_team: { __typename?: 'User_organization_team', id: number } };

export type CreateOrgMutationVariables = Exact<{
  data: OrganizationCreateInput;
}>;


export type CreateOrgMutation = { __typename?: 'Mutation', createOneOrganization: { __typename?: 'Organization', id: number, slug: string, name?: string | null, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }> } };

export type CreateTeamMutationVariables = Exact<{
  data: TeamCreateInput;
  orgId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createOneTeam: { __typename?: 'Team', id: number, name: string, organization_id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null } };

export type DeleteOneUser_OrganizationMutationVariables = Exact<{
  data: User_OrganizationWhereUniqueInput;
}>;


export type DeleteOneUser_OrganizationMutation = { __typename?: 'Mutation', deleteOneUser_organization?: { __typename?: 'User_organization', user_id: number, user?: { __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null } | null } | null };

export type DeleteOneTeamMutationVariables = Exact<{
  where: TeamWhereUniqueInput;
}>;


export type DeleteOneTeamMutation = { __typename?: 'Mutation', deleteOneTeam?: { __typename?: 'Team', id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  data: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordRes', isSuccess?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type InviteUserMutationVariables = Exact<{
  data: InviteUserInput;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser: { __typename?: 'InviteUserResponse', isSuccess?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type JoinOrgMutationVariables = Exact<{
  data: JoinOrgInput;
}>;


export type JoinOrgMutation = { __typename?: 'Mutation', joinOrg: { __typename?: 'InviteUserResponse', isSuccess?: boolean | null, isNewUser?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRes', accessToken?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', isSuccess?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RemoveUserFromTeamMutationVariables = Exact<{
  where: User_Organization_TeamWhereUniqueInput;
}>;


export type RemoveUserFromTeamMutation = { __typename?: 'Mutation', deleteOneUser_organization_team?: { __typename?: 'User_organization_team', id: number } | null };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ResetPasswordRes', accessToken?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type UpdateUserOrgMutationVariables = Exact<{
  data: User_OrganizationUpdateInput;
  where: User_OrganizationWhereUniqueInput;
}>;


export type UpdateUserOrgMutation = { __typename?: 'Mutation', updateOneUser_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null };

export type UpdateOneUser_Organization_TeamMutationVariables = Exact<{
  data: User_Organization_TeamUpdateInput;
  where: User_Organization_TeamWhereUniqueInput;
}>;


export type UpdateOneUser_Organization_TeamMutation = { __typename?: 'Mutation', updateOneUser_organization_team?: { __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null } | null };

export type VerifyAccountMutationVariables = Exact<{
  data: VerifyAccountInput;
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verifyAccount: { __typename?: 'VerifyAccountRes', isSuccess?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type User_OrganizationQueryVariables = Exact<{
  data: User_OrganizationWhereUniqueInput;
  orgId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type User_OrganizationQuery = { __typename?: 'Query', user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, organization?: { __typename?: 'Organization', id: number, slug: string, name?: string | null, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null, teams: Array<{ __typename?: 'Team', id: number, name: string, organization_id: number, users?: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, user_organization?: { __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> | null }> } | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> } | null };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, username: string, name?: string | null, status: Account_Status, user_organizations: Array<{ __typename?: 'User_organization', id: number, role: User_Role, user_id: number, slug: string, organization_id: number, invitation_status?: User_Invitation_Status | null, last_invited?: any | null, user_organization_teams: Array<{ __typename?: 'User_organization_team', id: number, role: Team_Role, team_id: number, user_organization?: { __typename?: 'User_organization', user_id: number } | null }> }>, organizations?: Array<{ __typename?: 'Organization', id: number, slug: string, name?: string | null }> | null }> };

export const ErrorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<ErrorFragment, unknown>;
export const CoreDetailTeamFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreDetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}}]}}]} as unknown as DocumentNode<CoreDetailTeamFragment, unknown>;
export const CoreUserOrganizationTeamFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}}]} as unknown as DocumentNode<CoreUserOrganizationTeamFragment, unknown>;
export const CoreUserOrganizationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}}]} as unknown as DocumentNode<CoreUserOrganizationFragment, unknown>;
export const CoreOrganizationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CoreOrganizationFragment, unknown>;
export const DetailUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<DetailUserFragment, unknown>;
export const DetailTeamFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}}]} as unknown as DocumentNode<DetailTeamFragment, unknown>;
export const DetailOrganizationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}}]}}]} as unknown as DocumentNode<DetailOrganizationFragment, unknown>;
export const DetailUserOrganizationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailTeam"}}]}}]}}]} as unknown as DocumentNode<DetailUserOrganizationFragment, unknown>;
export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const JoinTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_teamCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneUser_organization_team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<JoinTeamMutation, JoinTeamMutationVariables>;
export const CreateOrgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}}]} as unknown as DocumentNode<CreateOrgMutation, CreateOrgMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const DeleteOneUser_OrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteOneUser_organization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organizationWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneUser_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}}]} as unknown as DocumentNode<DeleteOneUser_OrganizationMutation, DeleteOneUser_OrganizationMutationVariables>;
export const DeleteOneTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteOneTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}}]} as unknown as DocumentNode<DeleteOneTeamMutation, DeleteOneTeamMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const InviteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"inviteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InviteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<InviteUserMutation, InviteUserMutationVariables>;
export const JoinOrgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinOrg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JoinOrgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinOrg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"isNewUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<JoinOrgMutation, JoinOrgMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RemoveUserFromTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUserFromTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_teamWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneUser_organization_team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveUserFromTeamMutation, RemoveUserFromTeamMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateUserOrgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserOrg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organizationUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organizationWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneUser_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}}]} as unknown as DocumentNode<UpdateUserOrgMutation, UpdateUserOrgMutationVariables>;
export const UpdateOneUser_Organization_TeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOneUser_organization_team"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_teamUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_teamWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneUser_organization_team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}}]} as unknown as DocumentNode<UpdateOneUser_Organization_TeamMutation, UpdateOneUser_Organization_TeamMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Error"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const User_OrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user_organization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_organizationWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUserOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}}]}}]} as unknown as DocumentNode<User_OrganizationQuery, User_OrganizationQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganizationTeam"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization_team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreUserOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User_organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"invitation_status"}},{"kind":"Field","name":{"kind":"Name","value":"last_invited"}},{"kind":"Field","name":{"kind":"Name","value":"user_organization_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganizationTeam"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreUserOrganization"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreOrganization"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;