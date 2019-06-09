const Post = require('../../models/post');

exports.upvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, 1);
  res.json(post);
};

exports.unvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, 0);
  res.json(post);
};

exports.downvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, -1);
  res.json(post);
};

exports.destroy = async (req, res) => {
  await req.post.remove();
  res.json({ msg: 'Success' });
};

exports.listAll = async (req, res) => {
  const posts = await Post.find().sort('-score');
  res.json(posts);
};

exports.listByCategory = async (req, res) => {
  const category = req.params.category;
  const posts = await Post.find({ category }).sort('-score');
  res.json(posts);
};

exports.listByUserId = async (req, res) => {
  const userId = req.params.userId;
  const posts = await Post.find({ author: userId }).sort('-created');
  res.json(posts);
};

exports.showOne = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.post.id,
    { $inc: { views: 1 } },
    { new: true }
  );
  res.json(post);
};

exports.submit = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      author: req.user.id
    });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.load = async (req, res, next, postId) => {
  try {
    req.post = await Post.findById(postId);
    if (!req.post) return res.status(404).json({ msg: 'Post not found' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ msg: 'Invalid post ID' });
    }
    return next(err);
  }
  next();
};
