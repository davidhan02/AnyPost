const router = require('express').Router();
const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');
const validate = require('../middleware/validate');
const requireLogin = require('../middleware/requireLogin');

router.get('/logout', users.logout);
router.get('/current_user', users.current);
router.post('/login', validate.login, users.login);
router.post('/register', validate.register, users.register);

router.get('/posts', posts.listAll);
router.get('/user/:userId', posts.listByUserId);
router.get('/posts/:category', posts.listByCategory);
router.post('/posts', requireLogin, validate.post, posts.submit);

router.param('post', posts.load);
router.get('/post/:post', posts.showOne);
router.delete('/post/:post', requireLogin, posts.destroy);

router.get('/post/upvote/:post', requireLogin, posts.upvote);
router.get('/post/unvote/:post', requireLogin, posts.unvote);
router.get('/post/downvote/:post', requireLogin, posts.downvote);

router.param('comment', comments.load);
router.post('/post/:post', requireLogin, validate.comment, comments.submit);
router.get('/post/upcomm/:post/:comment', requireLogin, comments.upComment);
router.get('/post/uncomm/:post/:comment', requireLogin, comments.unComment);
router.get('/post/downcomm/:post/:comment', requireLogin, comments.downComment);
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
