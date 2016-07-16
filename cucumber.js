common = '--strict --require features --format rerun:@rerun.txt --format pretty --tags ~@skip';

require('dotenv').config();
pry = require('pryjs')

module.exports = {
  build: common + ' --format progress',
  'default': common,
  'es5': '--tags ~@es6'
};
