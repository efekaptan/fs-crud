import { createFolder, copy } from '../../util/file';
import { join } from 'path';

export default function generate(config) {
    console.log('spring-boot-core generator started');
    const { name, serverPackageName, directory } = config;
    const serverDirectory = join(directory, 'server');
    const templateDirectory = join(__dirname, 'template');

    createServerFolder(serverDirectory);
    copyBaseFolder(serverDirectory, templateDirectory);
    const packageFolder = createPackageFolder(serverDirectory, serverPackageName);
    console.log(packageFolder);
}

function createServerFolder(serverDirectory) {
    createFolder(serverDirectory);
}

function copyBaseFolder(serverDirectory, templateDirectory) {
    copy(join(templateDirectory, 'base'), serverDirectory);
}

function createPackageFolder(serverDirectory, serverPackageName) {
    const folders = serverPackageName.split('.');
    let packageFolder = join(serverDirectory, 'src/main/java');

    packageFolder = folders.reduce((prev, curr) => {
        const newFolder = join(prev, curr);
        createFolder(newFolder);
        return newFolder;
    }, packageFolder);

    return packageFolder;
}
