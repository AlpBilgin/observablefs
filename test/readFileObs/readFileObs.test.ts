import {readFileObs} from '../../src/readFileObs'
import {setup} from '../helpers/setup'
import {teardown} from '../helpers/teardown'


const pathname = './test1.json'
const content = '[1,2]'
//const encoding = 'utf8'



function testOpenfile(){
  setup(pathname,content);
  const result = readFileObs(pathname);
  result.subscribe(
    (x) => console.log(x.toString()),
    (e) => console.error(e)
  );
  teardown(pathname);
}

export default testOpenfile;