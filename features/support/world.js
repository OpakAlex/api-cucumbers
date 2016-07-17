'use strict';

import fetch from 'node-fetch';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';

chai.use(chaiJsonSchema);

const fetchInit = {cache: 'default', redirect: 'follow'};

const World = function() {
  this.fetch = fetch;
  this.fetchInit = fetchInit;
  this.expect = chai.expect;

  this.lastRequest = undefined;
  this.lastRequestUrl = undefined;
  this.lastRequestInit = fetchInit;
};

export default function() {
  this.World = World;
};
