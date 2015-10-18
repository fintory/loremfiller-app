var clipboard = require('clipboard');
var lorem     = require('lorem-ipsum');

module.exports = function(amount, type) {
  var fillText = lorem({
    count: amount,
    units: type
  });

  clipboard.writeText(fillText);
};
