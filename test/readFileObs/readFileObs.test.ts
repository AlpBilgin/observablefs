import { readFileObs } from '../../src/readFileObs'
import { setup } from '../helpers/setup'
import { teardown } from '../helpers/teardown'


const dirname = './testdata/'
const filename = 'test1.json'
const path = dirname + filename;
const content = '[1,2]'
//const encoding = 'utf8'



function testOpenfile() {
    setup(dirname, filename, content);
    const result = readFileObs(path);
    result.subscribe(
        (x) => console.log(x.toString()),
        (e) => console.error(e)
    );
    teardown(dirname);
}

export default testOpenfile;