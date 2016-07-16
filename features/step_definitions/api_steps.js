'use strict';


export default function(){
  this.When(/^I send a GET request to "([^"]*)"$/, function(url, done){
    this.lastRequest = this.fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    done();
  });
  this.Then(/^the response status should be "([^"]*)"$/, function (status, done) {
    this.lastRequest.then((response) => {
      this.expect(`${response.status}`).to.equal(status);
      done();
    })
  });
  this.Then(/^the JSON schema should be:$/, function (schema, done) {
    this.lastRequest.then((response) => {
      response.json().then((json) => {
        this.expect(json).to.be.jsonSchema(JSON.parse(schema));
        done();
      });
    });
  });
};
