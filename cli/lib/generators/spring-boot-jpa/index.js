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
    createFolder(join(packageFolder, 'pojo'));

    entities.forEach((entity) => {
        createEntity(entity, serverPackageName, packageFolder);
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
