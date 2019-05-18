const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { msg: 'User not found' });
      }
      if (!user.password) {
        return done(null, false, { msg: 'Email already exists' });
      }
      if (!user.isValidPassword(password)) {
        return done(null, false, { msg: 'Incorrect password' });
      }
      return done(null, user);
    } catch (err) {
      err => done(err);
    }
  }
);

module.exports = localStrategy;
