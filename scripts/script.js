var system = require('system');
var args = system.args;
var fs = require('fs');
var data = JSON.parse(args[1]).arr;
var graphType = args[2];

var page = require('webpage').create();
page.open('./partials/' + graphType + '.html', function(status) {
  page.includeJs('http://d3js.org/d3.v3.min.js', function() {
    page.injectJs('./public/js/d3/' + graphType + '.js');

      var output = page.evaluate(function(data) {
        graph(data);
        var serializer = new XMLSerializer();
        var element = document.querySelector('svg');
        return serializer.serializeToString(element);
     }, data);

    console.log(output);
    phantom.exit();

  });
});
