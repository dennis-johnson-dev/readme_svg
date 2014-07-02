var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var childArgs = [
  path.join(__dirname, '../scripts/script.js'),
  [10, 30, 40, 10]
];

exports.index = function(req, res) {
  res.render('index', {status: '200 Ok'});
};

exports.generate = function(req, res) {
  console.log(req.params);
  var data = [10, 20, 30 , 100];

  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    res.set({
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache',
      'Expires': new Date(Date.now()).toUTCString()
    });

    console.log(stdout);
    res.send(stdout);
  });

  // render the page
  // call the phantomjs script to read it
  // return the response

  // res.render('index', {status: '200 Ok', graphData: data});
  // console.log('after render');
};
