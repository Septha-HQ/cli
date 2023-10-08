#!/usr/bin/env node

import { program } from "commander";
import require from "../utils/require.js";

const pkg = require("../package.json");

program
    .version(pkg.version, "-v, --version")
    .command("key", "Manage API key -- https://pro.coinmarketcap.com/")
    .parse(process.argv);
