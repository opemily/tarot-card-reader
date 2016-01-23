var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tarot');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;