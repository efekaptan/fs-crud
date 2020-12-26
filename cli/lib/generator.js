import { readJson } from './util/file';
import { join } from 'path';

export function generate({ configPath, generatorPath, directory }) {
    const projectConfig = readJson(configPath);
    const { name } = projectConfig;
    const generators = readJson(generatorPath);
    generators.forEach(async (generator) => {
        const module = await import(`./generators/${generator}`);
        module.default({
            ...projectConfig,
            directory: join(directory, name)
        });
    });
}
