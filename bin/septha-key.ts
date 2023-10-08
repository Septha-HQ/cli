import { program } from "commander";
import key from "../commands/key.js";
import logger from "../utils/logger.js";

// command for set key
program
    .command("set")
    .description("set API key -- https://pro.coinmarketcap.com/")
    .action(()=>key.set())

program
    .command("remove")
    .description("remove API key")
    .action(()=>key.remove())

program.on("command:*", () => {
    logger.error(`Invalid command: ${program.args.join(" ")}\nSee --help for a list of available commands.`);
    process.exit(1);
})

program.parse(process.argv);

