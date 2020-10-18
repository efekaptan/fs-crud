import pluralize from 'pluralize';
import { render } from '../template';
import { createFile, createFolder, getFiles, readJson, copy } from '../file';
import { spawn } from 'child_process';

const TEMPLATE_PATH = `${__dirname}/../../templates/server`;

function generate(name, configPath) {
    const config = readJson(configPath);
    createFolder(name);
    copyInitial(name);
    createEntities(`${name}/src`, config);
    createAppModule(`${name}/src`, config);
    installPackages(name);
}

function copyInitial(name) {
    copy(`${TEMPLATE_PATH}/initial`, name);
}

function createEntities(path, config) {
    for (let entity of config.entities) {

        const pluralLower = pluralize(entity.name).toLocaleLowerCase();
        const folder = `${path}/${pluralLower}`;
        createFolder(folder);

        createModuleFiles(folder, entity, pluralLower);

        createEntity(folder, entity);

        createDtos(folder, entity);
    }
}

function createModuleFiles(folder, entity, pluralLower) {
    for (let file of getFiles(`${TEMPLATE_PATH}/module`)) {
        const rendered = render(`${TEMPLATE_PATH}/module/${file}`, entity);
        createFile(`${folder}/${pluralLower}.${file}`, rendered);
    }
}

function createEntity(folder, entity) {
    const path = `${folder}/entity`;
    createFolder(path);
    const entityRendered = render(`${TEMPLATE_PATH}/entity/entity.ts`, entity);
    const lower = entity.name.toLocaleLowerCase();
    createFile(`${path}/${lower}.entity.ts`, entityRendered);
}

function createDtos(folder, entity) {
    const path = `${folder}/dto`;
    createFolder(path);
    for (let file of getFiles(`${TEMPLATE_PATH}/dto`)) {
        const rendered = render(`${TEMPLATE_PATH}/dto/${file}`, entity);
        createFile(`${path}/${file.replace('entity', entity.name.toLocaleLowerCase())}`, rendered);
    }
}

function createAppModule(folder, config) {
    const appModule = render(`${TEMPLATE_PATH}/app.module.ts`, config);
    createFile(`${folder}/app.module.ts`, appModule);
}

function installPackages(name) {
    const child = spawn(`cd ${name} && npm install`, {
        stdio: 'inherit',
        shell: true
    });
}

export default generate;