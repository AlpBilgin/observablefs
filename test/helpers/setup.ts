import { writeFileSync, mkdirSync } from 'fs';
import { teardown } from './teardown'

export function setup(dirname, filenames, content) {
    teardown(dirname);
    mkdirSync(dirname);
    for (const filename of filenames) {
        const fullpath = dirname + filename;
        writeFileSync(fullpath, content);
    }
}
