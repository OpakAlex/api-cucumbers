'use strict';


module.exports = function(){
  this.When(/^I send a GET request to "([^"]*)"$/, function (url, done) {
    this.fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => {
      this.lastResponse = response;
      done();
    })
  });

  this.Then(/^the response status should be "([^"]*)"$/, function (status, done) {
    this.expect(this.lastResponse.status).to.equal(Number(status));
    done();
  });

  this.Then(/^the JSON schema should be:$/, function (schema, done) {
    this.lastResponse.json().then((json) => {
      this.expect(json).to.be.jsonSchema(JSON.parse(schema));
      done();
    });
  });
};
