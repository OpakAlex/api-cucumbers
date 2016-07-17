'use strict';

import fetch from 'node-fetch';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';

chai.use(chaiJsonSchema);

const World = function() {
  this.fetch = fetch;
  this.expect = chai.expect;
};

export default function() {
  this.World = World;
};
