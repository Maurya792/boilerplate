"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const User_1 = require("../../src/entities/User");
const mikro_orm_config_1 = __importDefault(require("../../src/mikro-orm.config"));
const client_1 = require("../__generated__/client");
const loader_1 = __importDefault(require("../../global-helpers/loader"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
let count = 0;
const main = async (callback) => {
    if (!(await callback())) {
        return;
    }
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const em = orm.em;
    const users = await em.find(User_1.User, {}, { populate: ["trace", "trace.logs", "trace.images", "trace.parts"] });
    const oneWeekAgo = (0, moment_timezone_1.default)().subtract(7, "day").toDate();
    const _ = await Promise.all(users.map(async (user) => {
        console.log(`[Info] : Started migration for user ${user.name} (${user.username} , ${user.id})`);
        const newUser = await client_1.prismaClient.user.create({
            data: {
                password: user.password,
                username: user.username,
                id: user.id,
                name: user.name,
            },
        });
        if (newUser) {
            console.log(`[Info] : Successfully migrated ${user.name} (${user.username} , ${user.id}) to new db.`);
            count++;
            return true;
        }
        return false;
    }));
    if (_) {
        console.log(`[Info] : Successfully migrated ${count} users to new db.`);
    }
    return;
};
const loaderInterval = (0, loader_1.default)();
main(async () => client_1.prismaClient.user.findMany({}).then((res) => res.length < 1))
    .then(async () => {
    await client_1.prismaClient.$disconnect();
    clearInterval(loaderInterval);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.exit();
})
    .catch(async (err) => {
    await client_1.prismaClient.$disconnect();
    clearInterval(loaderInterval);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    console.log(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map