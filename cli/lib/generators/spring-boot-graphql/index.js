import { createFile, createFolder } from "../../util/file";
import { join } from 'path';
import { render } from '../../util/template';

export default function generate(config) {
    console.log('spring-boot-graphql generator started');
    createResources(config);
    return config;
}

function createResources(config) {
    const { directory, entities } = config;
    const graphqlDirectory = join(directory, 'server/src/main/resources/graphql');
    createFolder(graphqlDirectory);

    entities.forEach((entity) => {
        createGraphqlFile(entity, graphqlDirectory);
    });
}

function createGraphqlFile(entity, graphqlDirectory) {
    const { name } = entity;
    const templateDirectory = join(__dirname, 'template');
    const graphqlFile = render(join(templateDirectory, 'resources/entity.graphqls'), entity);
    createFile(join(graphqlDirectory, `${name}.graphqls`), graphqlFile);
}
