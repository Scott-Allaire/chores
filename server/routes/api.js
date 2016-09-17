var express = require('express');
var router = express.Router();

// Models
var Chore = require('../models/chore');
var Event = require('../models/event');

// Routes
Chore.methods(['get','put','post','delete']);
Chore.register(router, '/chores');

Event.methods(['get','put','post','delete']);
Event.register(router, '/events');

// Return router
module.exports = router;