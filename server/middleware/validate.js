const postValidator = require('../routes/validators/post');
const loginValidator = require('../routes/validators/login');
const commentValidator = require('../routes/validators/comment');
const registerValidator = require('../routes/validators/register');

exports.login = (req, res, next) => {
  const { errors, isValid } = loginValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.register = (req, res, next) => {
  const { errors, isValid } = registerValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.post = (req, res, next) => {
  const { errors, isValid } = postValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};

exports.comment = (req, res, next) => {
  const { errors, isValid } = commentValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  return next();
};
