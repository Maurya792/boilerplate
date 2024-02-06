"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("../../prisma/__generated__/client");
const helper_1 = require("../helper");
const file_upload_service_1 = require("../services/file-upload-service");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class TraceController {
    constructor() {
        this.getImages = (images, name) => {
            return images.map((i) => {
                let date = (0, moment_timezone_1.default)().toDate();
                try {
                    date = (0, moment_timezone_1.default)(i.date).toDate();
                }
                catch (err) { }
                const fileUrl = file_upload_service_1.FileUploadService.saveFile({
                    file: String(i.url),
                    fileName: `${(0, moment_timezone_1.default)(i.date).format("HH__mm__ss")}.png`,
                    storageKey: name,
                    storageName: `${(0, moment_timezone_1.default)(i.date).format("DD-MM-YYYY")}`,
                });
                return { url: fileUrl, date: date };
            });
        };
        this.getTraces = async (traces, userOrgId, userId, orgId) => {
            return await Promise.all(traces.map(async (i) => {
                let date = (0, moment_timezone_1.default)().hour(0).minute(0).second(0).millisecond(0).toDate();
                const updatedObj = (0, helper_1.select)((0, helper_1.excludeNull)(i), ["activeTime", "inActiveTime", "allTime"]);
                const createTraceArgs = {
                    active_time: updatedObj.activeTime,
                    all_time: updatedObj.allTime,
                    date,
                    in_active_time: updatedObj.inActiveTime,
                    user_organization_id: userOrgId,
                    user_id: userId,
                    organization_id: orgId,
                    images: {
                        createMany: { data: this.getImages(i.images, String(userOrgId)) },
                    },
                    logs: {
                        createMany: {
                            data: i.logs.map((log) => ({
                                start_time: moment_timezone_1.default.unix(log.startTime).toDate(),
                                end_time: moment_timezone_1.default.unix(log.endTime).toDate(),
                                is_active: log.isActive,
                                status: log.status,
                            })),
                        },
                    },
                };
                const updateTraceArgs = {
                    active_time: { increment: updatedObj.activeTime },
                    all_time: { increment: updatedObj.allTime },
                    in_active_time: { increment: updatedObj.inActiveTime },
                    images: {
                        createMany: { data: this.getImages(i.images, String(userOrgId)) },
                    },
                };
                const updated_trace = await client_1.prismaClient.trace.upsert({
                    create: createTraceArgs,
                    update: updateTraceArgs,
                    where: { user_organization_id_date: { date, user_organization_id: userOrgId } },
                });
                i.logs.map((log) => ({
                    create: {
                        start_time: moment_timezone_1.default.unix(log.startTime).toDate(),
                        end_time: moment_timezone_1.default.unix(log.endTime).toDate(),
                        is_active: log.isActive,
                        status: log.status,
                    },
                    update: {
                        end_time: moment_timezone_1.default.unix(log.endTime).toDate(),
                    },
                    where: {
                        AND: {
                            start_time: { lt: moment_timezone_1.default.unix(log.startTime).toDate() },
                            end_time: { lte: moment_timezone_1.default.unix(log.endTime).toDate() },
                            is_active: log.isActive,
                            status: log.status,
                            trace_date: date,
                        },
                    },
                }));
                const _ = await Promise.all(i.logs.map(async (log) => {
                    const toBeUpdatedLog = await client_1.prismaClient.log.findFirst({
                        where: {
                            AND: {
                                start_time: { lte: moment_timezone_1.default.unix(log.startTime).toDate() },
                                end_time: {
                                    gte: moment_timezone_1.default
                                        .unix(log.startTime)
                                        .subtract(1, "seconds")
                                        .toDate(),
                                },
                                is_active: log.isActive,
                                status: log.status,
                                trace_id: updated_trace.id,
                            },
                        },
                    });
                    let updatedLog;
                    if (toBeUpdatedLog) {
                        updatedLog = await client_1.prismaClient.log.update({
                            data: {
                                end_time: moment_timezone_1.default.unix(log.endTime).toDate(),
                            },
                            where: {
                                id: toBeUpdatedLog.id,
                            },
                        });
                    }
                    else {
                        updatedLog = await client_1.prismaClient.log.create({
                            data: {
                                start_time: moment_timezone_1.default.unix(log.startTime).toDate(),
                                end_time: moment_timezone_1.default.unix(log.endTime).toDate(),
                                is_active: log.isActive,
                                status: log.status,
                                trace_id: updated_trace.id,
                            },
                        });
                    }
                    return !!updatedLog;
                }));
                return updated_trace;
            }));
        };
        this.submit = async (req, res) => {
            console.log("Received put request");
            try {
                const user = req.body;
                if (!user.password) {
                    return res.status(401).send("Please provide a valid password.");
                }
                const userFound = await client_1.prismaClient.user.findUnique({
                    where: { username: user.username },
                });
                const isPasswordValid = await bcryptjs_1.default.compare(user.password, userFound.password);
                if (!userFound || (userFound && !isPasswordValid)) {
                    return res.status(401).send("Invalid credentials!");
                }
                const userOrgFound = await client_1.prismaClient.user_organization.findUnique({
                    where: { user_id_organization_id: { user_id: userFound.id, organization_id: user.org_id } },
                });
                if (!userOrgFound) {
                    return res.status(401).send("Invalid organization!");
                }
                const traces = await this.getTraces(user.trace, userOrgFound.id, userFound.id, user.org_id);
                const updatedUser = await client_1.prismaClient.user_organization.update({
                    data: {
                        traces: { connect: traces }
                    },
                    where: { user_id_organization_id: { user_id: userFound.id, organization_id: user.org_id } },
                });
                if (!!updatedUser) {
                    return res.status(200).send("Data updated successfully");
                }
                return res.status(200).send("Data updated successfully");
            }
            catch (err) {
                console.log(err);
                return res
                    .status(500)
                    .send(`Server error occurred: ${err.message}`);
            }
        };
    }
}
exports.TraceController = TraceController;
//# sourceMappingURL=trace-controller.js.map