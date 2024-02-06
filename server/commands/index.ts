import { create_super_user } from "./create_super_user";
import { run_scratchpad } from "./run_scratchpad";
import { refresh_database } from "./refresh_database";
import loader from "../global-helpers/loader";

const command = process.argv[2];

// Execute the corresponding command based on the argument
(async () => {
  const loaderInterval = loader();
  switch (command) {
    case "create_super_user":
      await create_super_user();
      break;
    case "run_scratchpad":
      await run_scratchpad();
      break;
    case "refresh_database":
      await refresh_database();
      break;
    default:
      console.error("Unknown command:", command);
      break;
  }
  clearInterval(loaderInterval);
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.exit();
})();
