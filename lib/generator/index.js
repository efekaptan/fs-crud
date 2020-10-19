import generateServer from './server';
import { readJson, createFolder } from '../file';

export function generate(configPath) {
    const config = readJson(configPath);
    const { name } = config;
    createFolder(name);
    generateServer(config);
    //toDo create main package.json
}