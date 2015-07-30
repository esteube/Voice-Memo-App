require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
// var passport = require('passport');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('trust proxy', 1);

app.use(cookieSession({
 name: 'session',
 keys: ['key1', 'key2']
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(passport.initialize());
// app.use(passport.session());
//
//
// passport.use(new GoogleStrategy({
//     clientID: '732500299257-vcm66bua8rhmddbsk6d2ggaphrs81ech.apps.googleusercontent.com',
//     clientSecret: 'XW74WylWLLXch06NImEfycY3',
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       // asynchronous verification, for effect...
//       process.nextTick(function () {
//
//         // To keep the example simple, the user's Google profile is returned to
//         // represent the logged-in user.  In a typical application, you would want
//         // to associate the Google account with a user record in your database,
//         // and return that user instead.
//         return done(null, profile);
//       });
//     }
//   ));
// app.get('/auth/google',
//   passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));
//
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
//   passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user)
// });

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
