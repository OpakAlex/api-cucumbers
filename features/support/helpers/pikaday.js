module.exports = function() {
  return function(selector, date) {
    var pattern = /^(\d+) (\w+), (\d+)$/;
    var matches = pattern.exec(date);
    var day = matches[0];
    var month = matches[1];
    var year = matches[2];

    // TODO handle the logic
  };
};
