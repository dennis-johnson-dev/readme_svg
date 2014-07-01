var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var childArgs = [
  path.join(__dirname, '../scripts/script.js')
];

exports.index = function(req, res) {
  res.render('index', {status: '200 Ok'});
};
