import {existsSync,rmSync} from "fs";

export function teardown(pathname){
  existsSync(pathname) && rmSync(pathname);
}