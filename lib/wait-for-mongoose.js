'use strict';
var mongoose = require('mongoose');
function waitForMongoose (uri, options, callback) {
  var startTime = Date.now();
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};
  options.timeout = options.timeout || 1000 * 60 * 2; // 2 minutes
  options.interval = options.interval || 1000 * 5; // 5 seconds
  mongooseConnectionHandler();
  function mongooseConnectionHandler () {
    var currentTime = Date.now();
    if (currentTime - startTime < options.timeout) {
      mongoose.connect(uri, function (err) {
        if (err) {
          setTimeout(mongooseConnectionHandler, options.interval);
        } else {
          mongoose.disconnect();
          callback();
        }
      });
    } else {
      callback(new Error('Could not connect to MongoDB'));
    }
  }
}
module.exports = waitForMongoose;
