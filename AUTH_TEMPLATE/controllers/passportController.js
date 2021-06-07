var LocalStrategy = require('passport-local').Strategy;
// expose this function to our app using module.exports
module.exports = function (passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    const Users = require('../sequelize').Users;
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        Users.findOne({
            where: {
                id: id
            }
        }).then(result => {
            done(null, result);
        }).catch(err => {
            done(err, null);
        })
        // TODO Sequelize query to return the user from the DB    
    });

    // =========================================================================
    // TODO 1- LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
        Users.findOne({
            where: {
                email: email
            }
        })
        .then(result => {
            if(result == null) {
                Users.create({'email': email, 'password': password})
                .then(user => {
                    return done(null, user);
                })
            }
            else {
                return done(null, false, req.flash('signupMessage', "that e-mail is already taken"));
            }
        })
        .catch(err => {
            return done(err);
        })
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
    }));
    // =========================================================================
    // TODO 2- LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) { // callback with email and password from our form
        Users.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if(user.password == password) {
                return done(null, user);
            }
            else {
                return done(null, false, req.flash('loginMessage', "Password invalid"));
            }
        })
        .catch(err => {
            return done(err);
        })
    }));
};