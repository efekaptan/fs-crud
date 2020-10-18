#!/usr/bin/env node

import { program } from 'commander';
import { generate } from './generator';

const CONFIG_PATH = './config.json';
const SAMPLE_APP = 'sample-app';

program
    .option('-d, --debug', 'output extra debugging')
    .option('-t, --title <title>', 'title of the application', SAMPLE_APP)
    .option('-c, --config <config>', 'path of the config file', CONFIG_PATH);

program.parse(process.argv);

if (program.debug) {
    console.log(program.opts());
}

const { title, config } = program;

generate(title, config);
