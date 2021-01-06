
import { Observable, } from 'rxjs';
import { mergeMap, concatMap } from 'rxjs/operators';
import { readDirObs } from './readDirObs'
import { readFileObs } from './readFileObs'

// switchmap returns just one item
// mergemap does flattening
// concatmap is also good

// TODO what is the difference between mergemap and concatmap? what is the difference between first and second mergemap?

export function readDirFilesObs(pathname: string): Observable<Buffer> {
  const result = readDirObs(pathname);
  return result.pipe(
    mergeMap(val => val),
    mergeMap(val => readFileObs(pathname + val))
  );
}
