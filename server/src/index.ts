require("dotenv").config();
import "reflect-metadata";
import { __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import cors from "cors";
import bodyParser from "body-parser";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";

import { AuthController } from "./controllers/auth-controller";
import { join } from "path";
import { authChecker } from "./graphql/auth/authChecker";
import { resolvers } from "../prisma/__generated__/graphql";
import { enhanceResolvers } from "./graphql/enhancers";
import { prismaClient } from "../prisma/__generated__/client";
import { TraceController } from "./controllers/trace-controller";
import moment from "moment-timezone";
import { CustomUserResolver } from "./resolvers/demo";
import { TokenService } from "./services/token-service";
import { fieldResolvers } from "./resolvers/field-resolvers";
import { Prisma } from "prisma/prisma-client";
import { customResolvers } from "./resolvers";
moment.tz.setDefault("UTC")
const main = async () => {
  // const orm = await MikroORM.init(mikroConfig);
  // await orm.getMigrator().up();

  const app = express();
  app.use(express.json({ limit: "10GB" }));
  app.use(bodyParser.urlencoded({ limit: "10GB", extended: false }));
  app.use(bodyParser.json());

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://localhost:3010",
        "https://codage-tt-admin.netlify.app",
        "https://codage-time-tracker.vercel.app"
      ],
      credentials: true,
    })
  );


  const authController = new AuthController();
  /**
   *
   *
   * Auth routes
   *
   *
   **/
  app.post("/", authController.login);

  app.post("/create", authController.register);

  app.post("/login", authController.login);

  app.post("/register", authController.register);

  app.post("/forgot-password", authController.forgotPassword);

  app.post("/reset-password", authController.resetPassword);

  const traceController = new TraceController();
  /**
   *
   *
   * Put User route
   *
   *
   **/
  app.put("/", traceController.submit);

  /**
   * Add custom decorators to resolvers
   */
  enhanceResolvers();
  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [...resolvers, ...fieldResolvers, ...customResolvers],
      validate: false,
      authChecker,
    }),
    introspection: true,
    context: async ({ req }) => {
      const token = (req.headers.authorization || "").replace("Bearer ", "");
      const userFromToken = await TokenService.verifyToken(token, "accessToken")
      return { prisma: prismaClient, token, user : userFromToken };
    },
    cache: new InMemoryLRUCache(),
    formatError: (err) => {
      if (err.message.includes("Access denied!")) {
        err.extensions.code = "ACCESS_DENIED";
        return err;
      }
      if(err.extensions.exception?.name === "PrismaClientKnownRequestError"){
        err.extensions.field = err.extensions.exception?.meta?.target
      }
      // Otherwise return the original error. The error can also
      // be manipulated in other ways, as long as it's returned.
      return err;
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
    bodyParserConfig: { limit: "1tb" },
  });
  if (!__prod__) {
    app.use(express.static(join(process.cwd())));
  }
  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000");
  });
};

main().catch((err) => console.error(err));
