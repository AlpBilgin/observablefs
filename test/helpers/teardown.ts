import {existsSync,rmSync} from "fs";

export function teardown(dirname){
  if(existsSync(dirname)){
    rmSync(dirname,{recursive:true});
  }
}