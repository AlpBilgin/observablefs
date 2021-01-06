import { readDirFilesObs } from '../../src/readDirFilesObs'

const dirname = './testdata/'

export function testOpendirSplit() {
    readDirFilesObs(dirname).subscribe(
        (x) => console.log(`file in ${dirname} has content: ${x.toString()}`),
        (e) => console.error(e)
    );
}