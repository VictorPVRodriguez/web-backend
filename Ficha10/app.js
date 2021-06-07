var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personRouter = require('./routes/person');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/person', personRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.json()); // get information from html forms
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({ secret: 'cat', cookie: { maxAge: 60000 } })); // Use the session middleware
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// default routes ======================================================================
require('./controllers/passportController')(passport); // pass passport for configuration
require('./routes/index.js')(app, passport); // load our routes and pass in our app and fully configured passport

// TODO Add custom routes ======================================================================

// express server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});