var express = require('express'),
    http = require('http'),
    path = require('path'),
    routes = require('./routes');

var app = express();

/**
 *  * Configuration
 *   
 */

app.set('port', process.env.PORT || 3011);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

/*
 * Routes
 */

// JSON API

app.get('/', routes.index);
app.get('/:username/:repo.svg', routes.generate);

/* Start Server */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
