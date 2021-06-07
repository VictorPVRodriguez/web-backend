var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var app = express();

var userRoute = require('./routes/users.js');
app.use('/users', userRoute);

app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.json()); // get information from html forms
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({ secret: 'cat', cookie: { maxAge: 60000 } })); // Use the session middleware
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(testMiddleware);
function testMiddleware(req,res,next){
    console.log("teste middleware");
    return next();
}

// default routes ======================================================================
require('./controllers/passportController')(passport); // pass passport for configuration
require('./routes/index.js')(app, passport); // load our routes and pass in our app and fully configured passport
var userRoutes = require('./routes/users.js');
const route = require('./routes/users.js');

// TODO Add custom routes ======================================================================
var userRoutes = require('./routes/users.js');
app.use('/test', userRoutes);

// express server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});