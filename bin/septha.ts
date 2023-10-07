#!/usr/bin/env node

import { program } from "commander";
import pkg from "../package.json" assert { type: 'json' };

program
    .version(pkg.version, "-v, --version")
    .parse(process.argv);
