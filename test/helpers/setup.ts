import {existsSync,rmSync,writeFileSync} from "fs";

export function setup(pathname,content){
  existsSync(pathname) && rmSync(pathname);
  writeFileSync(pathname,content);
}
