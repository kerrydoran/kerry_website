var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var shows = require('./shows');


var app = express();
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './assets/views');
app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/assets/images/text-cursor2.gif'));
app.use(express.static(path.join('public')));

app.use('/curating/:show', function(req, res) {
	res.render('show', shows[req.params.show]);
});

app.use('/:section', function(req, res) {
	res.render(req.params.section);
});

app.use('/', function(req, res) {
	res.render('about');
});

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
