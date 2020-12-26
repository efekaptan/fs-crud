import { readJson } from './util/file';

export function generate(projectConfigPath, generatorConfigPath) {
    const projectConfig = readJson(projectConfigPath);
    const generators = readJson(generatorConfigPath);
    generators.forEach(async (generator) => {
        const module = await import(`./generators/${generator}`);
        module.default(projectConfig);
    });
}
