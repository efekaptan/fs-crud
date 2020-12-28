import { createFile, createFolder } from '../../util/file';
import { join } from 'path';
import { render } from '../../util/template';

export default function generate(config) {
    console.log('spring-boot-jpa generator started');
    createEntities(config);
    return config;
}

function getEntityConfiguration() {
    return [
        {
            templateFileName: 'pojo/entity.java',
            outputFileName: (name) => `pojo/${name}.java`
        }, {
            templateFileName: 'repository/repository.java',
            outputFileName: (name) => `repository/${name}Repository.java`
        }, {
            templateFileName: 'service/service.java',
            outputFileName: (name) => `service/${name}Service.java`
        }, {
            templateFileName: 'input/input.java',
            outputFileName: (name) => `input/${name}Input.java`
        }
    ]
}

function createEntities(config) {
    const { serverPackageName, entities, packageFolder } = config;
    createMainFolders(['pojo', 'repository', 'service', 'input'], packageFolder);

    const entityConfiguration = getEntityConfiguration();

    entities.forEach((entity) => {
        entityConfiguration.forEach((configuration) => {
            const { name } = entity;
            const { templateFileName, outputFileName } = configuration;
            createEntity(entity, serverPackageName, packageFolder, templateFileName, outputFileName(name));
        })
    });
}

function createEntity(entity, serverPackageName, packageFolder, templateFileName, outputFileName) {
    const templateDirectory = join(__dirname, 'template');
    const entityFile = render(join(templateDirectory, templateFileName), {
        serverPackageName,
        ...entity
    });
    createFile(join(packageFolder, outputFileName), entityFile);
}

function createMainFolders(folders, packageFolder) {
    folders.forEach((folder) => createFolder(join(packageFolder, folder)));
}
