// Requirements
var express     = require('express');
var fs          = require('fs');
var ejs         = require('ejs');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Deck        = require('./models/deck.js');
var Reading     = require('./models/reading.js');
var User        = require('./models/user.js');
var session     = require('express-session');
var bcrypt      = require('bcrypt');
var MongoStore  = require('connect-mongo')(session);


// Instantiate an Express Server
var app = express();
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/tarot');


// Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Sessions
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/tarot';
app.use(session({
    secret: 'Hello World',
    store: new MongoStore({url: mongoUrl}),
    resave: false,
    saveUninitialized: false
}));

// Routes and Route Handlers

app.get('/', function (req, res) {
    var name = req.session.name || false;
    var userid = req.session._id || false;
    res.render('index', {username: name, userid: userid});
});

app.get('/shuffle', function (req, res) {
    Deck.find({}, function (err, cards) {
        res.json(cards);
    });
});

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.post('/signup', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    var passwordConfirmation = req.body.password_confirmation;
    if (password === passwordConfirmation) {
        var encryptPassword = bcrypt.hashSync(req.body.password, 8);
        var user = new User({name: name, password: encryptPassword});
        user.save(function () {
            res.redirect('/');
        });
    }
});

app.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    User.findOne({name: name}, function (err, user) {
        var hash = user.password;
        bcrypt.compare(password, hash, function (err, result) {
            if (result) {
                req.session.name = user.name;
                req.session._id = user._id.toString();
                res.redirect('/');
            } else {
                res.redirect('/');
            }
        });
    });
});

app.get('/user', function (req, res) {
    res.render('past-readings');
});

app.get('/logout', function (req, res) {
    req.session.name = null;
    res.redirect('/');
});

app.post('/readings', function (req, res) {
    var readingData = { user_id: mongoose.Types.ObjectId(req.session._id),
        question: req.body.question,
        cards: req.body.cards,
        rating: req.body.rating}
    var reading = new Reading(readingData);
    reading.save(function (err, result) {
        console.log(err);
    });
});

app.listen(process.env.PORT || 3000);