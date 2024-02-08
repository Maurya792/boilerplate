"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver,
    },
};
const crudResolversInfo = {
    User: [
        "aggregateUser",
        "createManyUser",
        "createOneUser",
        "deleteManyUser",
        "deleteOneUser",
        "findFirstUser",
        "findFirstUserOrThrow",
        "users",
        "user",
        "getUser",
        "groupByUser",
        "updateManyUser",
        "updateOneUser",
        "upsertOneUser",
    ],
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: [
        "where",
        "orderBy",
        "cursor",
        "take",
        "skip",
        "distinct",
    ],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne",
        "createMany",
        "deleteOne",
        "updateOne",
        "deleteMany",
        "updateMany",
        "upsertOne",
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some((prefix) => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation
                ? resolverActionsConfig._mutation
                : resolverActionsConfig._query;
            const mainDecorators = [
                ...(allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : []),
                ...(operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : []),
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...(maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : [])];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : [])];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "created_at", "updated_at", "username", "name", "status"],
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    AffectedRowsOutput: ["count"],
    UserCountAggregate: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
        "_all",
    ],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserMaxAggregate: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: [
        "AND",
        "OR",
        "NOT",
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserOrderByWithRelationInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserWhereUniqueInput: [
        "id",
        "username",
        "AND",
        "OR",
        "NOT",
        "created_at",
        "updated_at",
        "name",
        "password",
        "status",
    ],
    UserOrderByWithAggregationInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
        "_count",
        "_avg",
        "_max",
        "_min",
        "_sum",
    ],
    UserScalarWhereWithAggregatesInput: [
        "AND",
        "OR",
        "NOT",
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserCreateInput: [
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserUpdateInput: [
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserCreateManyInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserUpdateManyMutationInput: [
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
    ],
    StringNullableFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
    ],
    Enumaccount_statusFilter: ["equals", "in", "notIn", "not"],
    SortOrderInput: ["sort", "nulls"],
    UserCountOrderByAggregateInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserMinOrderByAggregateInput: [
        "id",
        "created_at",
        "updated_at",
        "username",
        "name",
        "password",
        "status",
    ],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    DateTimeWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    StringWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    StringNullableWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    Enumaccount_statusWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    Enumaccount_statusFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: [
        "set",
        "increment",
        "decrement",
        "multiply",
        "divide",
    ],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
    ],
    NestedStringFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
    ],
    NestedStringNullableFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
    ],
    NestedEnumaccount_statusFilter: ["equals", "in", "notIn", "not"],
    NestedIntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    NestedStringWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    NestedStringNullableWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    NestedIntNullableFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
    ],
    NestedEnumaccount_statusWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "not",
        "_count",
        "_min",
        "_max",
    ],
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map