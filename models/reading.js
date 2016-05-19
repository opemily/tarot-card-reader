var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var readingSchema = new Schema({
   user_id: {type: Schema.Types.ObjectId, ref: 'User'},
   question: String,
   cards: Array,
   rating: String
});

var Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;