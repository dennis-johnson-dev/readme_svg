var system = require('system');
var args = system.args;
var fs = require('fs');
var data = args[1].split(',');
var graphType = args[2];

var page = require('webpage').create();
console.log(fs.workingDirectory)

page.open('./partials/' + graphType + '.html', function(status) {

  var test = page.evaluate(function(data) {

      var serializer = new XMLSerializer();
      var element = document.querySelector('svg');
      return serializer.serializeToString(element);
    }, data);

  console.log(test);
  console.log(status);
  phantom.exit();
});
