import {existsSync,rmSync} from "fs";

export function teardown(dirname){
  existsSync(dirname) && rmSync(dirname,{recursive:true});
}