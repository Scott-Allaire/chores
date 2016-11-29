var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String,
    active: Boolean
});

module.exports = restful.model('User', userSchema);