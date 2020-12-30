import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function jsonifyBuffers(bufferSource: Observable<Buffer>): Observable<any> {
  return bufferSource.pipe(
    map((v, i) => {
      return JSON.parse(v.toString());
    })
  );
}