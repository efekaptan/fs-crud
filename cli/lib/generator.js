import { readJson } from './util/file';

export function generate({ configPath, generatorPath, directory }) {
    const projectConfig = readJson(configPath);
    const generators = readJson(generatorPath);
    generators.forEach(async (generator) => {
        const module = await import(`./generators/${generator}`);
        module.default({
            ...projectConfig,
            directory
        });
    });
}
