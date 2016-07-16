"use strict";

// if (typeof(browser) === 'undefined') {
//   let WebDriverIO = require('webdriverio');
//   let browser = WebDriverIO.remote({
//     baseUrl: process.env.APP_URL,
//     host: process.env.SELENIUM_IP,
//     port: 4444,
//     waitforTimeout: 120 * 1000,
//     logLevel: 'silent',
//     screenshotPath: `${__dirname}/../../screenshots/`,
//     desiredCapabilities: {
//       browserName: process.env.SELENIUM_BROWSER || 'chrome',
//       'chromeOptions': {
//         args: ['--disable-impl-side-painting']
//       }
//     }
//   });
//
//   global.browser = browser;
//
//   module.exports = function() {
//     this.registerHandler('BeforeFeatures', function(event, done) {
//       browser.init().call(done);
//     });
//
//     this.registerHandler('AfterFeatures', function(event, done) {
//       browser.end().call(done);
//     });
//   };
// }
