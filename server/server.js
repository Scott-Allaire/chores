
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

var config = require('./config/config');

mongoose.connect(config.database);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log requests to the console
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.send('working'); 
});

app.use('/api', require('./routes/api'));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
