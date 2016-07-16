//TODO auth
module.exports = function() {
  this.After(function(scenario, done) {
    browser
      // .execute(function() { return localStorage.clear(); })
      // .deleteCookie('') //remove auth cookies
      .call(done);
  });
};
