const requireLogin = require('../middleware/requireLogin');
const users = require('./controllers/users');
const posts = require('./controllers/posts');
const router = require('express').Router();

router.post('/login', users.loginUser);
router.get('/logout', users.logoutUser);
router.post('/register', users.registerUser);
router.get('/current_user', users.currentUser);

router.get('/posts', posts.listAll);
router.get('/user/:userId', posts.listByUserId);
router.get('/posts/:category', posts.listByCategory);
router.post('/posts', requireLogin, posts.submitPost);

router.param('post', posts.loadPost);
router.get('/posts/upvote/:post', requireLogin, posts.upvote);
router.get('/posts/unvote/:post', requireLogin, posts.unvote);
router.get('/posts/downvote/:post', requireLogin, posts.downvote);

module.exports = app => {
  app.use('/api', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
