import { createFile, createFolder } from '../../util/file';
import { join } from 'path';
import { render } from '../../util/template';

export default function generate(config) {
    console.log('spring-boot-jpa generator started');
    console.log(config);
    createEntities(config);
    return config;
}

function createEntities(config) {
    const { serverPackageName, entities, packageFolder } = config;
    createMainFolders(['pojo', 'repository', 'service', 'input'], packageFolder);

    entities.forEach((entity) => {
        createEntity(entity, serverPackageName, packageFolder);
        createRepository(entity, serverPackageName, packageFolder);
        createService(entity, serverPackageName, packageFolder);
        createInput(entity, serverPackageName, packageFolder);
    });
}

function createEntity(entity, serverPackageName, packageFolder) {
    const templateDirectory = join(__dirname, 'template');
    const { name } = entity;
    const entityFile = render(join(templateDirectory, 'pojo/entity.java'), {
        serverPackageName,
        ...entity
    });
    createFile(join(packageFolder, `pojo/${name}.java`), entityFile);
}

function createRepository(entity, serverPackageName, packageFolder) {
    const templateDirectory = join(__dirname, 'template');
    const { name } = entity;
    const repositoryFile = render(join(templateDirectory, 'repository/repository.java'), {
        serverPackageName,
        ...entity
    });
    createFile(join(packageFolder, `repository/${name}Repository.java`), repositoryFile);
}

function createService(entity, serverPackageName, packageFolder) {
    const templateDirectory = join(__dirname, 'template');
    const { name } = entity;
    const serviceFile = render(join(templateDirectory, 'service/service.java'), {
        serverPackageName,
        ...entity
    });
    createFile(join(packageFolder, `service/${name}Service.java`), serviceFile);
}

function createInput(entity, serverPackageName, packageFolder) {
    const templateDirectory = join(__dirname, 'template');
    const { name } = entity;
    const inputFile = render(join(templateDirectory, 'input/input.java'), {
        serverPackageName,
        ...entity
    });
    createFile(join(packageFolder, `input/${name}Input.java`), inputFile);
}

function createMainFolders(folders, packageFolder) {
    folders.forEach((folder) => createFolder(join(packageFolder, folder)));
}
