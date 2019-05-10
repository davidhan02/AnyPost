const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

require('./services/passport');
require('./models/user');

require('./routes/authRoutes')(app);

module.exports = app;
