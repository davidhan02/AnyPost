const users = require('./controllers/users');
const posts = require('./controllers/posts');
const router = require('express').Router();

router.post('/login', users.loginUser);
router.get('/logout', users.logoutUser);
router.post('/register', users.register);
router.get('/current_user', users.currentUser);

router.get('/posts', posts.listAll);
router.get('/user/:userId', posts.listByUserId);
router.get('/posts/:category', posts.listByCategory);

module.exports = app => {
  app.use('/api', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
