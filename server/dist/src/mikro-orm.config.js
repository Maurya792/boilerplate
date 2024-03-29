"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
const Asset_1 = require("./entities/Asset");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
        disableForeignKeys: false,
    },
    entities: [Asset_1.Asset, User_1.User],
    dbName: String(process.env.DATABASE),
    type: "mysql",
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    host: String(process.env.DB_HOST),
    debug: false && !constants_1.__prod__,
    allowGlobalContext: true,
    timezone: "+05:30",
};
//# sourceMappingURL=mikro-orm.config.js.map