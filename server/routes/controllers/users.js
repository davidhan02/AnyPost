const User = require('../../models/user');

exports.redirect = (req, res) => {
  res.redirect('/dashboard');
};

exports.currentUser = (req, res) => {
  if (!req.user) return res.send({});
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      return res.status(400).json(info);
    }
    req.login(user, err => {
      res.json(user);
    });
  })(req, res, next);
};

exports.register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: 'Email already exists' });
  } else {
    const newUser = await new User({ ...req.body }).save();
    await req.login(newUser, err => {
      if (err) console.log(err);
    });
    return res.json(newUser);
  }
};
