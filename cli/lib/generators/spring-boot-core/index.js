import { createFile, createFolder, copy } from '../../util/file';
import { join } from 'path';
import { render } from '../../util/template';

export default function generate(config) {
    console.log('spring-boot-core generator started');
    const { serverPackageName, directory } = config;
    const serverDirectory = join(directory, 'server');
    const templateDirectory = join(__dirname, 'template');

    createServerFolder(serverDirectory);
    copyBaseFolder(serverDirectory, templateDirectory);
    const packageFolder = createPackageFolder(serverDirectory, serverPackageName);
    createApplicationFile(templateDirectory, packageFolder, config);

    return {
        ...config,
        packageFolder
    }
}

function createServerFolder(serverDirectory) {
    createFolder(serverDirectory);
}

function copyBaseFolder(serverDirectory, templateDirectory) {
    createFolder(join(templateDirectory, 'base/src/main/java'));
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

function createApplicationFile(templateDirectory, packageFolder, config) {
    const applicationFile = render(join(templateDirectory, 'application/application.java'), config);
    createFile(join(packageFolder, 'application.java'), applicationFile);
}
