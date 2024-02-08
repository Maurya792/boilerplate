import { MikroORM } from "@mikro-orm/mysql";
import mikroOrmConfig from "../src/mikro-orm.config";
import moment from "moment-timezone";
export const refresh_database = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  const em = orm.em;
  const oneWeekAgo = moment().subtract(7, "day").toDate();
  // Fetch one week old traces from the database
};
