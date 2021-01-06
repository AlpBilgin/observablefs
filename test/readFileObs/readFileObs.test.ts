import { readFileObs } from '../../src/readFileObs'

const dirname = './testdata/'
const filename = 'test1.json'
const path = dirname + filename;
//const encoding = 'utf8'

export function testOpenfile() {
    const result = readFileObs(path);
    result.subscribe(
        (x) => console.log(`${path} file has content: ${x.toString()}`),
        (e) => console.error(e)
    );
}
