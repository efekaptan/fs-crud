import { copy, createFile, createFolder } from "../../util/file";
import { join } from 'path';
import { render } from '../../util/template';

export default function generate(config) {
    console.log('spring-boot-graphql generator started');
    createResources(config);
    createResolvers(config);
    return config;
}

function createResources(config) {
    const { directory, entities } = config;
    const graphqlDirectory = join(directory, 'server/src/main/resources/graphql');
    createFolder(graphqlDirectory);

    entities.forEach((entity) => {
        createGraphqlFile(entity, graphqlDirectory);
    });
    createSchemaFile(graphqlDirectory);
}

function createGraphqlFile(entity, graphqlDirectory) {
    const { name } = entity;
    const templateDirectory = join(__dirname, 'template');
    const graphqlFile = render(join(templateDirectory, 'resources/entity.graphqls'), entity);
    createFile(join(graphqlDirectory, `${name.toLowerCase()}.graphqls`), graphqlFile);
}

function getResolvers() {
    return ['Mutation', 'Query'];
}

function createResolvers(config) {
    const { packageFolder } = config;
    const resolverFolder = join(packageFolder, 'resolver');
    createFolder(resolverFolder);

    const templateDirectory = join(__dirname, 'template');

    const resolvers = getResolvers();
    resolvers.forEach((resolver) => {
        const templateFile = join(templateDirectory, `resolver/${resolver}.java`);
        const outputFile = join(resolverFolder, `${resolver}.java`);
        createResolverFile(config, templateFile, outputFile)
    });
}

function createResolverFile(config, templateFile, outputFile) {
    const resolverFile = render(templateFile, config);
    createFile(outputFile, resolverFile);
}

function createSchemaFile(graphqlDirectory) {
    const schemaFile = join(__dirname, 'template/resources/schema.graphqls');
    copy(schemaFile, join(graphqlDirectory, 'schema.graphqls'));
}
