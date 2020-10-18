import fs from 'fs';
import fsextra from 'fs-extra';

export function createFolder(directory) {
    fs.rmdirSync(directory, { recursive: true });
    fs.mkdirSync(directory);
}

export function getFiles(directory) {
    return fs.readdirSync(directory);
}

export function createFile(path, data) {
    fs.writeFileSync(path, data, { encoding: "utf-8" });
}

export function readFile(path) {
    return fs.readFileSync(path, 'utf8').toString();
}

export function readJson(path) {
    const rawConfig = readFile(path);
    return JSON.parse(rawConfig);
}

export function copy(from, to) {
    fsextra.copySync(from, to);
}