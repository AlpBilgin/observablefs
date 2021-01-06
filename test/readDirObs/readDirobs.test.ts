import { readDirObs } from '../../src/readDirObs'

const dirname = './testdata/'
//const encoding = 'utf8'

export function testOpendir() {
    const result = readDirObs(dirname);
    result.subscribe(
        (x) => console.log(x),
        (e) => console.error(e)
    );
}
