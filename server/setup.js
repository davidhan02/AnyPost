const sslRedirect = require('heroku-ssl-redirect');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');

const app = express();

require('./passport');
require('./models/user');
require('./models/post');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const options = { maxAge: 7200000, keys: [keys.cookieKey] };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession(options));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(sslRedirect());

module.exports = app;
