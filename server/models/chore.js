var restful = require('node-restful');
var mongoose = restful.mongoose;

var choreSchema = new mongoose.Schema({
    name: String,
    description: String,
    frequency: String,
    nextDue: Date
});

module.exports = restful.model('Chore', choreSchema);