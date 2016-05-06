var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var readingSchema = new Schema({
   user_id: String,
   question: String,
   hand: Array,
   rating: String
});

var Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;