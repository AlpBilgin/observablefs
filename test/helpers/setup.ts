import { existsSync, rmSync, writeFileSync, mkdirSync } from 'fs';
import {teardown} from './teardown'

export function setup(dirname, filename, content) {
    const fullpath = dirname + filename
    teardown(dirname);
    mkdirSync(dirname)
    writeFileSync(fullpath, content);
}
