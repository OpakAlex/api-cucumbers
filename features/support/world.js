'use strict';

let fetch = require('node-fetch');

// Cucumber runs scenarios in a World. By default, the World is just an instance of Object.
let World = function() {
  this.fetch = fetch;
};

module.exports = function() {
  this.World = World;
};
