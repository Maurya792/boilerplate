import { MikroORM } from "@mikro-orm/mysql";
import mikroOrmConfig from "../src/mikro-orm.config";
import { Trace } from "../src/entities/Trace";
import moment from 'moment-timezone'
export const refresh_database = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  const em = orm.em;
  const oneWeekAgo = moment().subtract(7, "day").toDate();
  // Fetch one week old traces from the database
  const traces = await em.find(Trace, { date: { $lte: oneWeekAgo } });
  for (const trace of traces) {
    await trace.images.init();
    await trace.parts.init();
    await trace.logs.init();
    await em.removeAndFlush(trace);
  }
};
