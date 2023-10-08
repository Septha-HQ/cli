#!/usr/bin/env node

import { program } from "commander";
import require from "../utils/require.js";
import logger from "../utils/logger.js";

const pkg = require("../package.json");

program
    .version(pkg.version, "-v, --version")
    .command("key", "Manage API key -- https://pro.coinmarketcap.com/")
    .on("command:*", () => {
        logger.error(`Invalid command: ${program.args.join(" ")}\nSee --help for a list of available commands.`);
        process.exit(1);
    })
    .parse(process.argv);
