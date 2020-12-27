import { readJson } from './util/file';
import { join } from 'path';
import { getApplicationName } from './util/text';

export async function generate({ configPath, generatorPath, directory }) {
    const projectConfig = readJson(configPath);
    const { name } = projectConfig;
    const generators = readJson(generatorPath);
    const applicationName = getApplicationName(name);

    let extendedConfig = {
        ...projectConfig,
        applicationName,
        directory: join(directory, name)
    }

    for (let generator of generators) {
        const module = await import(`./generators/${generator}`);
        extendedConfig = module.default(extendedConfig);
    }
}
