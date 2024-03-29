import { MikroORM } from "@mikro-orm/mysql";
import { __prod__ } from "./constants";
import path from "path";
import { User } from "./entities/User";
import { Asset } from "./entities/Asset";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
    disableForeignKeys: false,
  },
  entities: [Asset, User],
  dbName: String(process.env.DATABASE),
  type: "mysql",
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  host: String(process.env.DB_HOST),
  debug: false && !__prod__,
  allowGlobalContext: true,
  timezone: "+05:30", // IST
} as Parameters<typeof MikroORM.init>[0];
