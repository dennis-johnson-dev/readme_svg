var system = require('system');
var args = system.args;
var data = args[1].split(',');

var page = require('webpage').create();

page.open('http://localhost:3011', function(status) {

  var test = page.evaluate(function(data) {

      var serializer = new XMLSerializer();
      var element = document.querySelector('svg');
      return serializer.serializeToString(element);
    }, data);

  console.log(test);
  phantom.exit();
});
