import { createFolder } from '../../util/file';

export default function generate(config) {
    console.log('project-core generator started');
    const { directory } = config;
    createFolder(directory);
    return config;
}
