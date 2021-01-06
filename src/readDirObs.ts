import { readdir, PathLike } from "fs";
import { promisify } from "util";
import { Observable, from } from "rxjs";

export function readDirObs(path: PathLike, options?: any ): Observable<string[]> {
  // bindNodeCallback() somehow breaks type inference and returns and unknown observable from readdir
  // converting to promise with internal node utils preserves the typing of readdir callback
  const reaDirPromise = promisify(readdir);
  return from(reaDirPromise(path,options));
}
