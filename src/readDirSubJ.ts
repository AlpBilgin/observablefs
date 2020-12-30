import { readdir } from "fs";
import { Subject } from "rxjs";

/**
 * hopefully this will send filenames one by one, instead of a batch.
 * I like to offer both options (see readDirObs)
 * @param pathname 
 */
export function readDirSubj(pathname: string) {
  const directorySource = new Subject<string>();
  readdir(pathname, (err, files) => {
    if (err) {
      directorySource.error(err.message);
      directorySource.complete();
    } else {
      for (const file of files) {
        directorySource.next(file);
      }
      directorySource.complete();
    }
  });
  return directorySource;
}
