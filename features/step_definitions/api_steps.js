'use strict';

import * as fetchHelper from '../support/helpers/fetch'
import * as httpMatcher from '../support/matchers/http'
import * as jsonSchemaMatcher from '../support/matchers/json-schema'


export default function() {
  this.When(/^I send a GET request to "([^"]*)"$/, function(url, done){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    fetchHelper.get(url, headers, this)
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
