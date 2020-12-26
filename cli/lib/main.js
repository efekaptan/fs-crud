#!/usr/bin/env node

import { program } from 'commander';
import { generate } from './generator';

const PROJECT_CONFIG_PATH = './config/project-config.json';
const GENERATOR_CONFIG_PATH = './config/generator-config.json';

program
    .option('-d, --debug', 'output extra debugging')
    .option('-c, --configPath <configPath>', 'path of the project config file', PROJECT_CONFIG_PATH)
    .option('-c, --generatorPath <generatorPath>', 'path of the generator config file', GENERATOR_CONFIG_PATH)
    .option('-dir, --directory <directory>', 'path of the directory', process.cwd());

program.parse(process.argv);

if (program.debug) {
    console.log(program.opts());
}

const { configPath, generatorPath, directory } = program;

generate({ configPath, generatorPath, directory });
