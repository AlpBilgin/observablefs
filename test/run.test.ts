import { testOpenfile } from './readFileObs/readFileObs.test'
import { testOpendir } from './readDirObs/readDirobs.test'

import { setup } from './helpers/setup'
import { teardown } from './helpers/teardown'

const dirname = './testdata/'
const filenames = ['test1.json', 'test2.json']
const content = '[1,2]'

function run() {
  setup(dirname, filenames, content);
  testOpenfile();
  testOpendir();
  teardown(dirname);
}

run();
