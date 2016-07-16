"use strict";

//TODO reset database

var fetch = require('node-fetch');

module.exports = function() {
  this.Before(function(scenario, done) {
    done();
    // let url = `${process.env.API_URL}/api/private/db/restore`;

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // }).then(function() {
    //   done();
    // });
  });
};
