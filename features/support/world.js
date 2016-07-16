'use strict';

import fetch from "node-fetch";
// let fetch  = require('node-fetch');
let chai   = require('chai');
chai.use(require('chai-json-schema'));

// Cucumber runs scenarios in a World. By default, the World is just an instance of Object.
let World = function() {
  this.fetch = fetch;
  this.expect = chai.expect;
};

module.exports = function() {
  this.World = World;
};
