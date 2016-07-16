"use strict";

module.exports = function(){
  this.When(/^i go to google\.com$/, function (done) {
    browser
      .url("http://google.com")
      .call(done)
  });

  this.Then(/^I should see search field$/, function (done) {
    browser
      .waitForExist("#hplogo")
      .call(done);
  });
};
