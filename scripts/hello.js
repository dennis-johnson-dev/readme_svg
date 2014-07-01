var page = require('webpage').create();
page.open('http://localhost:3011', function(status) {
      console.log(status);
      var test = page.evaluate(function() {
        var serializer = new XMLSerializer();
        var element = document.querySelector('svg');
        return serializer.serializeToString(element);
      });
      console.log(test);
      phantom.exit();
});
