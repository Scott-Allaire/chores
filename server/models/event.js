var restful = require('node-restful');
var mongoose = restful.mongoose;
var choreSchema = require('./chore');

var eventSchema = new mongoose.Schema({
    worker: String,
    eventDate: Date,
    chore: {type : mongoose.Schema.ObjectId, ref : 'choreSchema', childPath:'log'}
});

module.exports = restful.model('Event', eventSchema);