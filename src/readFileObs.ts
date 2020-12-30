import {readFile} from "fs";
import {Observable,bindNodeCallback} from "rxjs";

export function readFileObs(pathname: string): Observable<Buffer> {
  const readFileAsObservable = bindNodeCallback(readFile);
  return readFileAsObservable(pathname);
}
