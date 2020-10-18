#!/usr/bin/env node

import pluralize from 'pluralize';
import { render } from './lib/template';
import { createFile, createFolder, getFiles, readJson } from './lib/file';

const OUTPUT = './render';
const TEMPLATE_PATH = './templates';
const CONFIG_PATH = './config.json';

function run() {
    const config = readJson(CONFIG_PATH);
    createFolder(OUTPUT);
    createEntities(config);
    createAppModule(config);
}

function createEntities(config) {
    for (let entity of config.entities) {
        const pluralLower = pluralize(entity.name).toLocaleLowerCase();
        const folder = `${OUTPUT}/${pluralLower}`;

        createFolder(folder);

        for (let file of getFiles(`${TEMPLATE_PATH}/module`)) {
            const rendered = render(`${TEMPLATE_PATH}/module/${file}`, entity);
            createFile(`${folder}/${pluralLower}.${file}`, rendered);
        }
    }
}

function createAppModule(config) {
    const appModule = render(`${TEMPLATE_PATH}/app.module.ts`, config);
    createFile(`${OUTPUT}/app.module.ts`, appModule);
}

run();
