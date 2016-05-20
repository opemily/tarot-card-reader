
$(function () {
    var tarotDeck = [];
    var cardPosition = ['#position-1', '#position-2', '#position-3', '#position-4', '#position-5'];
    var userRating;
   
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

    //Function that occurs when shuffling
    var shuffleDeck = function () {
        //Post Question
        var question = $('#question').val();
        // Checks to make sure a question is asked
        if (question === '' || question === ' '){
            $('#display-question').text("You must ask the cards a question in order for your fortune to be read.");
        } else {
            // Display the question on the screen
            $('#display-question').text(question);
            // Hide the question input
            $('#submit-question').addClass('hidden');
            // If user is logged in - rater and save button will be revealed
            $('#saver').removeClass('hidden');

            //Shuffle the Deck
            shuffle(tarotDeck);

            // Reveal the cards
            for (var i = 0; i < cardPosition.length; i++){
            $(cardPosition[i]).addClass(tarotDeck[i].cssClass).on('click', createModal);
                }
        };
        // Initialize rateYo
        $("#rateYo").rateYo().on("rateyo.set", function (e, data) {
                  userRating= $("#rateYo").rateYo("rating");
              });
        

    };

    // Clicking on a card will reveal the modal with the card image, name, and description.
    var createModal = function (e) {
        // Grab card position id
        $(e.target).on('click', function (e) {
            var cardIndex = cardPosition.indexOf("#" + $(e.target).attr('id'));
        // Reveal Modal with card image, name and definition.
            $('#card-meaning').modal();
            $('#card').attr('class', 'card ' + tarotDeck[cardIndex].cssClass);
            $('#card-name').html(tarotDeck[cardIndex].name);
            $('#definition').html(tarotDeck[cardIndex].def);
        });
    };

    // Saves the reading into JSON and pushes it to the Express Server
    var saveReading = function () {
        var data = {};
        var currentHand = [];
        var currentQuestion = $('#display-question').text();
        for (var i = 0, length = 5; i<length; i++){
            currentHand.push(tarotDeck[i]);
        };

        data =  {
                'date': new Date(),
                'question': currentQuestion,
                'cards': currentHand,
                'rating': userRating
            };

         $.ajax({
            method: 'POST',
            url: "/readings",
            dataType: 'json',
            data: data
        }).done(function () {
        });

        $('#save-reading').addClass('hidden');
        $("#rateYo").rateYo("option", "readOnly", true);
    };

    // Clicking the shuffle button or keypress will trigger the shuffleDeck function
    $('#shuffle').on('click', function () {
        shuffleDeck();
    });

    $('#query').on('keypress', function () {
        if (event.keyCode == 13){
            shuffleDeck();
        }
    });

    // Saves user reading to database

    $("#save-reading").on('click', saveReading);


});