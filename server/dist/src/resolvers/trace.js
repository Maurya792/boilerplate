"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceResolver = void 0;
const Trace_1 = require("../entities/Trace");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./user");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
let TraceResponse = class TraceResponse extends user_1.BaseResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => Trace_1.Trace, { nullable: true }),
    __metadata("design:type", Trace_1.Trace)
], TraceResponse.prototype, "trace", void 0);
TraceResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], TraceResponse);
let TracesResponse = class TracesResponse extends user_1.BaseResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Trace_1.Trace], { nullable: true }),
    __metadata("design:type", Array)
], TracesResponse.prototype, "traces", void 0);
TracesResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], TracesResponse);
let TraceResolver = class TraceResolver {
    async trace(userId, date, imageCount, imageOffset, startTime, endTime, { em }) {
        let trace_date;
        try {
            if (date) {
                trace_date = moment_timezone_1.default
                    .unix(date)
                    .tz("Asia/Calcutta")
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .millisecond(0)
                    .toDate();
            }
            else {
                trace_date = moment_timezone_1.default
                    .tz((0, moment_timezone_1.default)(), "Asia/Calcutta")
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .millisecond(0)
                    .toDate();
            }
        }
        catch (err) {
            trace_date = moment_timezone_1.default
                .tz((0, moment_timezone_1.default)(), "Asia/Calcutta")
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .toDate();
        }
        if (!userId) {
            return {
                errors: [{ field: "userId", message: "Please select a user." }],
            };
        }
        const trace = await em.findOne(Trace_1.Trace, userId
            ? { date: { $eq: trace_date }, user: { id: { $eq: userId } } }
            : { date: { $eq: trace_date } }, { populate: ["images", "parts", "user.name", "logs"] });
        if (!trace) {
            return {
                errors: [
                    {
                        field: "date",
                        message: "No trace found for this date for this user",
                    },
                ],
            };
        }
        if (startTime && endTime) {
            const images = imageCount
                ? (await trace.images.matching({
                    where: { date: { $gte: startTime, $lte: endTime } },
                    limit: imageCount,
                    offset: imageOffset,
                }))
                : (await trace.images.matching({
                    where: { date: { $gte: startTime, $lte: endTime } },
                }));
            const parts = (await trace.parts.matching({
                where: { createdAt: { $gte: startTime, $lte: endTime } },
            }));
            return { trace: Object.assign(Object.assign({}, trace), { images, parts }) };
        }
        else if (startTime) {
            const images = imageCount
                ? (await trace.images.matching({
                    where: { date: { $gte: startTime } },
                    limit: imageCount,
                    offset: imageOffset,
                }))
                : (await trace.images.matching({
                    where: { date: { $gte: startTime, $lte: endTime } },
                }));
            const parts = (await trace.parts.matching({
                where: { createdAt: { $gte: startTime, $lte: endTime } },
            }));
            return { trace: Object.assign(Object.assign({}, trace), { images, parts }) };
        }
        else if (endTime) {
            const images = imageCount
                ? (await trace.images.matching({
                    where: { date: { $lte: endTime } },
                    limit: imageCount,
                    offset: imageOffset,
                }))
                : (await trace.images.matching({
                    where: { date: { $gte: startTime, $lte: endTime } },
                }));
            const parts = (await trace.parts.matching({
                where: { createdAt: { $gte: startTime, $lte: endTime } },
            }));
            return { trace: Object.assign(Object.assign({}, trace), { images, parts }) };
        }
        if (imageCount) {
            const images = (await trace.images.matching({
                limit: imageCount,
                offset: imageOffset,
            }));
            return { trace: Object.assign(Object.assign({}, trace), { images }) };
        }
        return { trace };
    }
    async traces(userId, startDate, endDate, imageCount, imageOffset, { em }) {
        let trace_start_date;
        let trace_end_date;
        try {
            trace_start_date = moment_timezone_1.default
                .unix(startDate)
                .tz("Asia/Calcutta")
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .toDate();
            trace_end_date = moment_timezone_1.default
                .unix(endDate !== null && endDate !== void 0 ? endDate : startDate)
                .tz("Asia/Calcutta")
                .hour(23)
                .minute(59)
                .second(59)
                .millisecond(0)
                .toDate();
        }
        catch (err) {
            trace_start_date = moment_timezone_1.default
                .tz((0, moment_timezone_1.default)(), "Asia/Calcutta")
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .toDate();
            trace_end_date = moment_timezone_1.default
                .tz((0, moment_timezone_1.default)(), "Asia/Calcutta")
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .toDate();
        }
        if (!userId) {
            return {
                errors: [{ field: "userId", message: "Please select a user." }],
            };
        }
        const traces = await em.find(Trace_1.Trace, endDate
            ? {
                date: { $gte: trace_start_date, $lte: trace_end_date },
                user: { id: { $eq: userId } },
            }
            : { date: { $gte: trace_start_date }, user: { id: { $eq: userId } } }, {
            populate: ["images", "parts", "user.name", "logs"],
            orderBy: { date: "DESC" },
        });
        if (!(traces.length > 0)) {
            return {
                errors: [
                    {
                        field: "date",
                        message: "No trace found for this date for this user",
                    },
                ],
            };
        }
        let augmentedTraces = traces;
        if (imageCount) {
            augmentedTraces = await Promise.all(traces.map(async (trace) => {
                const images = (await trace.images.matching({
                    limit: imageOffset + imageCount,
                }));
                return Object.assign(Object.assign({}, trace), { images });
            }));
        }
        return { traces: augmentedTraces };
    }
};
exports.TraceResolver = TraceResolver;
__decorate([
    (0, type_graphql_1.Query)(() => TraceResponse),
    __param(0, (0, type_graphql_1.Arg)("userId", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("date", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("imageCount", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("imageOffset", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("startTime", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("endTime", { nullable: true })),
    __param(6, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Date,
        Date, Object]),
    __metadata("design:returntype", Promise)
], TraceResolver.prototype, "trace", null);
__decorate([
    (0, type_graphql_1.Query)(() => TracesResponse),
    __param(0, (0, type_graphql_1.Arg)("userId", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("startDate", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("endDate", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("imageCount", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("imageOffset", { nullable: true })),
    __param(5, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], TraceResolver.prototype, "traces", null);
exports.TraceResolver = TraceResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TraceResolver);
//# sourceMappingURL=trace.js.map