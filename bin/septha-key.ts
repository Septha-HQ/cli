import { program } from "commander";
import key from "../commands/key.js";

// command for set key
program
    .command("set")
    .description("set API key -- https://pro.coinmarketcap.com/")
    .action(()=>key.set())

program.parse(process.argv);

