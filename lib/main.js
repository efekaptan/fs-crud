#!/usr/bin/env node

import { program } from 'commander';
import { generate } from './generator';

const CONFIG_PATH = './config.json';

program
    .option('-d, --debug', 'output extra debugging')
    .option('-c, --config <config>', 'path of the config file', CONFIG_PATH);

program.parse(process.argv);

if (program.debug) {
    console.log(program.opts());
}

const { config } = program;

generate(config);
