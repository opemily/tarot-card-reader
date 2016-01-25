var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deckSchema = new Schema({
    name: String,
    cssClass: String,
    img: String,
    def: String
});

var Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;