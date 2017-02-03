var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());


app.set('view engine', 'pug');
app.set('views', './assets/views');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join('public')));

app.use('/', function(req, res) {
	res.render('index')
});

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});