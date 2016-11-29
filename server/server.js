
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

var config = require('./config/config');
var passport = require('./config/passport');

mongoose.connect(config.database);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log requests to the console
app.use(morgan('dev'));

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}
app.use(allowCrossDomain);

app.get('/setup', function (req, res) {
  var data = [
    {
      name: 'Mop the floors',
      description: 'Mop the floors in the kitchen and both bathrooms',
      frequency: 'P2W',
      nextDue: '2016-10-01'
    },
    {
      name: 'Wipe down the windows',
      description: 'Clean the windows and wipe down the frames of all windows in the house',
      frequency: 'P1M',
      nextDue: '2016-10-02'
    },
    {
      name: 'Clean the downstairs bathroom',
      description: 'Clean the toilet, sink and shower',
      frequency: 'P1M',
      nextDue: '2016-10-10'
    }
  ];
  var Chore = require('./models/chore');
  _.each(data, function (chore) {
    var chore = new Chore(chore);
    chore.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
});

app.use('/auth', require('./routes/auth')(passport));
app.use('/api', require('./routes/api'));
app.use(passport.initialize());
app.use(passport.session());

app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
