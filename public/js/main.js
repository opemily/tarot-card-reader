console.log("Saul B. Goodman!");

$(function () {


var tarotDeck = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

    // Get Tarot Deck and Store it in the array tarotDeck
    var getCards = function (){
        $.ajax({
            url: '/shuffle', 
            dataType: 'json',
            cache: false
        }).done(function (data) {
                tarotDeck = data;
        });
    }
    
    getCards();
    

    $('#shuffle').on('click', function(){
        console.log('click');
        shuffle(tarotDeck);
    });

});