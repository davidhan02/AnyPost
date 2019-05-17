const passport = require('passport');
const User = require('../models/user');
const localStrategy = require('./local');
const googleStrategy = require('./google');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(localStrategy);
passport.use(googleStrategy);
