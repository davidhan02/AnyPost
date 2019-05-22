const router = require('express').Router();
const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');
const requireLogin = require('../middleware/requireLogin');

router.post('/login', users.login);
router.get('/logout', users.logout);
router.post('/register', users.register);
router.get('/current_user', users.current);

router.get('/posts', posts.listAll);
router.get('/user/:userId', posts.listByUserId);
router.get('/posts/:category', posts.listByCategory);
router.post('/posts', requireLogin, posts.submit);

router.param('post', posts.load);
router.get('/post/:post', posts.showOne);
router.delete('/post/:post', requireLogin, posts.destroy);

router.get('/post/upvote/:post', requireLogin, posts.upvote);
router.get('/post/unvote/:post', requireLogin, posts.unvote);
router.get('/post/downvote/:post', requireLogin, posts.downvote);

router.get('/post/upcomm/:post/:comment', requireLogin, posts.upComment);
router.get('/post/uncomm/:post/:comment', requireLogin, posts.unComment);
router.get('/post/downcomm/:post/:comment', requireLogin, posts.downComment);

router.param('comment', comments.load);
router.post('/post/:post', requireLogin, comments.submit);
router.delete('/post/:post/:comment', requireLogin, comments.destroy);

module.exports = app => {
  app.use('/api', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
