"use strict";

module.exports = function() {
  this.After(function(scenario, callback) {
    if (scenario.isFailed()) {
      let filename = (new Date()).getTime();

      browser.saveScreenshot(`${__dirname}/../../screenshots/${filename}.png`).call(callback);
    }
    else {
      browser.log('browser').then(function(response) {
        let errors = response.value.filter(function(logMessage) {
          return logMessage.level === 'SEVERE' && /(error|uncaught)/i.test(logMessage.message);
        });

        if (errors.length > 0) {
          throw `Console Errors in WebDriver: ${errors.map(error => error.message).join(', ')}`;
        }
      }).call(callback);
    }
  });
};
