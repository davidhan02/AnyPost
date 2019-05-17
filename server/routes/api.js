const users = require('./controllers/users');
const router = require('express').Router();

router.post('/login', users.login);
router.get('/logout', users.logout);
router.post('/register', users.register);
router.get('/current_user', users.currentUser);

module.exports = app => {
  app.use('/api', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
