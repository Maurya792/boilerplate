import { prismaClient } from "../prisma/__generated__/client";
import moment from "moment-timezone";

moment.tz.setDefault('Asia/Calcutta')
export const run_scratchpad = async () => {
  const {count} = await prismaClient.user_organization.deleteMany({ where : { }})
  if (typeof count == 'number') {
    console.log(`[Info] : Successfully deleted ${count} user org relations.`);
  }
};
