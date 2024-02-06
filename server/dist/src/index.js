"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
const constants_1 = require("./constants");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const utils_keyvaluecache_1 = require("@apollo/utils.keyvaluecache");
const auth_controller_1 = require("./controllers/auth-controller");
const path_1 = require("path");
const authChecker_1 = require("./graphql/auth/authChecker");
const graphql_1 = require("../prisma/__generated__/graphql");
const enhancers_1 = require("./graphql/enhancers");
const client_1 = require("../prisma/__generated__/client");
const trace_controller_1 = require("./controllers/trace-controller");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const token_service_1 = require("./services/token-service");
const field_resolvers_1 = require("./resolvers/field-resolvers");
const resolvers_1 = require("./resolvers");
moment_timezone_1.default.tz.setDefault("UTC");
const main = async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: "10GB" }));
    app.use(body_parser_1.default.urlencoded({ limit: "10GB", extended: false }));
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://localhost:3010",
            "https://codage-tt-admin.netlify.app",
            "https://codage-time-tracker.vercel.app"
        ],
        credentials: true,
    }));
    const authController = new auth_controller_1.AuthController();
    app.post("/", authController.login);
    app.post("/create", authController.register);
    app.post("/login", authController.login);
    app.post("/register", authController.register);
    app.post("/forgot-password", authController.forgotPassword);
    app.post("/reset-password", authController.resetPassword);
    const traceController = new trace_controller_1.TraceController();
    app.put("/", traceController.submit);
    (0, enhancers_1.enhanceResolvers)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [...graphql_1.resolvers, ...field_resolvers_1.fieldResolvers, ...resolvers_1.customResolvers],
            validate: false,
            authChecker: authChecker_1.authChecker,
        }),
        introspection: true,
        context: async ({ req }) => {
            const token = (req.headers.authorization || "").replace("Bearer ", "");
            const userFromToken = await token_service_1.TokenService.verifyToken(token, "accessToken");
            return { prisma: client_1.prismaClient, token, user: userFromToken };
        },
        cache: new utils_keyvaluecache_1.InMemoryLRUCache(),
        formatError: (err) => {
            var _a, _b, _c;
            if (err.message.includes("Access denied!")) {
                err.extensions.code = "ACCESS_DENIED";
                return err;
            }
            if (((_a = err.extensions.exception) === null || _a === void 0 ? void 0 : _a.name) === "PrismaClientKnownRequestError") {
                err.extensions.field = (_c = (_b = err.extensions.exception) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.target;
            }
            return err;
        },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
        bodyParserConfig: { limit: "1tb" },
    });
    if (!constants_1.__prod__) {
        app.use(express_1.default.static((0, path_1.join)(process.cwd())));
    }
    app.listen(4000, () => {
        console.log("Server started on http://localhost:4000");
    });
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map