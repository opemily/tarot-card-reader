console.log("Saul B. Goodman!");

$(function () {
    var tarotDeck = [];
    var cardPosition = ["#position-1", "#position-2","#position-3", "#position-4", "#position-5"];

    // Fisher-Yates Shuffle
    var shuffle = function (array) {
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
    };

    // Get Tarot Deck and Store it in the array tarotDeck
    var getCards = function () {
        $.ajax({
            url: '/shuffle',
            dataType: 'json',
            cache: false
        }).done(function (data) {
            // Store JSON in tarotDeck array
            tarotDeck = data;
        });
    };

    getCards();

    // Clicking on a card will reveal the modal with the card image, name, and description.
    var createModal = function () {
        // Grab card position id
        $('.card').click(function () {
            $(this).attr('id');
        });
    };


    // Clicking the shuffle button will post the question, hide the question form, shuffle the deck, and reveal the cards
    $('#shuffle').on('click', function () {
        //Post Question
        var query = $('#query').val();
        $('#display-query').text(query);
        // Hide the question input
        $('#submit-query').addClass('hidden');
        //Shuffle the Deck
        shuffle(tarotDeck);
        // Reveal the cards
        for (var i=0; i < cardPosition.length; i++){
            $(cardPosition[i]).addClass(tarotDeck[i].cssClass);
        }
    });

});