import { existsSync, rmSync, writeFileSync, mkdirSync } from "fs";

export function setup(dirname, filename, content) {
    const fullpath = dirname + filename
    mkdirSync(dirname);
    existsSync(fullpath) && rmSync(fullpath);
    writeFileSync(fullpath, content);
}
