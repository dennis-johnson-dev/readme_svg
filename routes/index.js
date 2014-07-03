var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

// Needs to be data from API
var fixture = '{"arr": [1, 6, 10, 30, 45, 100]}';

exports.index = function(req, res) {
  res.render('index', {status: '200 Ok'});
};

exports.generate = function(req, res) {
  console.log(req.params);

  var childArgs = [
    path.join(__dirname, '../scripts/script.js'),
    fixture,
    req.params.graphType
  ];

  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    res.set({
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache',
      'Expires': new Date(Date.now()).toUTCString()
    });

    console.log(stdout);
    res.send(stdout);
  });
};
