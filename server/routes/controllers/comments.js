exports.load = async (req, res, next, id) => {
  try {
    req.comment = await req.post.comments.id(id);
    if (!req.comment) return next(new Error('comment not found'));
  } catch (err) {
    return next(err);
  }
  next();
};

exports.submit = async (req, res, next) => {
  try {
    const post = await req.post.addComment(req.user.id, req.body.comment);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const post = await req.post.removeComment(req.params.comment);
    res.json(post);
  } catch (err) {
    next(err);
  }
};