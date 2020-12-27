import { createFolder, copy } from '../../util/file';
import { join } from 'path';

export default function generate(config) {
    console.log('spring-boot-core generator started');
    const { directory } = config;
    const serverDirectory = join(directory, 'server');
    createServerFolder(serverDirectory);

    const templateDirectory = join(__dirname, 'template');
    copyBaseFolder(serverDirectory, templateDirectory);
}

function createServerFolder(serverDirectory) {
    createFolder(serverDirectory);
}

function copyBaseFolder(serverDirectory, templateDirectory) {
    copy(join(templateDirectory, 'base'), serverDirectory);
}
