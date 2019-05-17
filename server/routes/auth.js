const passport = require('passport');
const users = require('./controllers/users');
const router = require('express').Router();

const googleOpts = { scope: ['profile', 'email'], prompt: 'select_account' };

router.get('/google', passport.authenticate('google', googleOpts));
router.get('/google/callback', passport.authenticate('google'), users.redirect);

module.exports = app => {
  app.use('/auth', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
