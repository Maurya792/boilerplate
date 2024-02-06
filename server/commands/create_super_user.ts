require("dotenv").config();
import { MikroORM } from "@mikro-orm/core";
import { USER_ROLE, User } from "../src/entities/User";
import mikroConfig from "../src/mikro-orm.config";
import bcrypt from "bcryptjs";

// Get command-line arguments
const args = process.argv.slice(2);

// Define default values or handle missing arguments
let username = 'admin';
let password = 'admin@#321';
let name : string | null = null;
const extractValue = (arg:string) => arg.split('=')[1]
// Parse command-line arguments
args.forEach((arg, index) => {
  if (arg.startsWith("--username") && extractValue(arg)) {
    username = extractValue(arg);
  } else if (arg.startsWith("--password") && extractValue(arg)) {
    password = extractValue(arg);
  } else if (arg.startsWith("--name") && extractValue(arg)) {
    name = extractValue(arg);
  }
});
// Function to add ANSI escape codes for color formatting
const highlight = (text, color) => `\x1b[${color}m${text}\x1b[0m`;
export const create_super_user = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const hashpassword = await bcrypt.hash(password, 5);
  try {
    const superuser = await orm.em.upsert(User, {
      username: username,
      name : name??username,
      password: hashpassword,
      role: USER_ROLE.admin,
    });
    await orm.em.persistAndFlush(superuser);
    console.info(
      `[INFO] Created Superuser ( username : ${highlight(username, 31)}, password : ${highlight(password, 32)} )`
    );
    return;
  } catch (err) {
    console.log(
      `[ERROR] Creating Superuser ( username : ${highlight(username, 31)}, password : ${highlight(password, 32)} )`,
      err
    );
    return;
  }
};
