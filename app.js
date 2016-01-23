// Requirements

var express     = require('express');
var ejs         = require('ejs');
var fs          = require('fs');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var User        = require('./models/user.js');
var session     = require('express-session');
var bcrypt      = require('bcrypt');
var MongoStore  = require('connect-mongo')(session);


// Instantiate an Express Server

var app = express();


// Middleware

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Sessions

var mongoUrl = 'mongodb://localhost:27017/tarot';

app.use(session({
    secret: 'Hello World',
    store: new MongoStore({url: mongoUrl}),
    resave: false,
    saveUninitialized: false
}));

// Routes and Route Handlers

app.get('/', function (req, res) {
  res.render('index');
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

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    User.findOne({name: name}, function (err, user) {
        var hash = user.password;
        bcrypt.compare(password, hash, function (err, result) {
            if (result) {
                req.session.name = user.name;
                res.redirect('/user');
            } else {
                res.redirect('/login');
            }

        });
    });
});

app.get('/pastreadings', function (req, res) {
    res.render('pastreadings');
});

app.get('/logout', function (req, res) {
    req.session.username = null;
    res.redirect('/');
});


app.listen(process.env.PORT || 3000);