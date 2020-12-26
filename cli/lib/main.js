#!/usr/bin/env node

import { program } from 'commander';
import { generate } from './generator';

const PROJECT_CONFIG_PATH = './config/project-config.json';
const GENERATOR_CONFIG_PATH = './config/generator-config.json';

program
    .option('-d, --debug', 'output extra debugging')
    .option('-c, --config <config>', 'path of the config file', PROJECT_CONFIG_PATH);

program.parse(process.argv);

if (program.debug) {
    console.log(program.opts());
}

const { config } = program;

generate(config, GENERATOR_CONFIG_PATH);
