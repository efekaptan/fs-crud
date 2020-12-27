import { readJson } from './util/file';
import { join } from 'path';
import { getApplicationName } from './util/text';

export function generate({ configPath, generatorPath, directory }) {
    const projectConfig = readJson(configPath);
    const { name } = projectConfig;
    const generators = readJson(generatorPath);
    const applicationName = getApplicationName(name);
    generators.forEach(async (generator) => {
        const module = await import(`./generators/${generator}`);
        module.default({
            ...projectConfig,
            applicationName,
            directory: join(directory, name)
        });
    });
}
