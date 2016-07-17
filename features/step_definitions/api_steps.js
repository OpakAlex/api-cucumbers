'use strict';

import * as fetchHelper from '../support/helpers/fetch'
import * as httpMatcher from '../support/matchers/http'
import * as jsonSchemaMatcher from '../support/matchers/json-schema'


export default function() {
  this.Given(/^I send request to "([^"]*)"$/, function (url, done) {
    this.lastRequestUrl = url
    done()
  })

  this.Given(/^I send and accept JSON$/, function (done) {
    this.fetchInit['headers'] = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    done()
  })

  this.When(/^I send a GET request to "([^"]*)"$/, function(urlOrPath, done){
    fetchHelper.get(urlOrPath, {/*headers*/}, this)
    done()
  })

  this.Then(/^the response status should be "([^"]*)"$/, function (status, done) {
    httpMatcher.expectResponseStatusToEqual(status, this)
      .then(done, done)
  })

  this.Then(/^the JSON schema should be:$/, function (schema, done) {
    jsonSchemaMatcher.expectResponseJsonToBeJsonSchema(schema, this)
      .then(done, done)
  })
}
