#!/usr/bin/env node
"use strict";

var _commander = require("commander");

var _generator = require("./generator");

const PROJECT_CONFIG_PATH = './config/project-config.json';
const GENERATOR_CONFIG_PATH = './config/generator-config.json';

_commander.program.option('-d, --debug', 'output extra debugging').option('-c, --config <config>', 'path of the config file', PROJECT_CONFIG_PATH);

_commander.program.parse(process.argv);

if (_commander.program.debug) {
  console.log(_commander.program.opts());
}

const {
  config
} = _commander.program;
(0, _generator.generate)(config, GENERATOR_CONFIG_PATH);