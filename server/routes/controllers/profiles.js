const Profile = require('../../models/profile');

exports.listAll = async (req, res) => {
  try {
    const profiles = await Profile.find().sort(-score);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'No profiles found' });
  }
};

exports.loadByHandle = async (req, res) => {
  const errors = {};
  const { handle } = req.params;
  try {
    const profile = await Profile.findOne({ handle });
    if (!profile) {
      errors.msg = 'No profile found for this user';
      return res.status(400).json(errors);
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    errors.msg = 'No user matching handle';
    res.status(500).json(errors);
  }
};

exports.loadById = async (req, res) => {
  const errors = {};
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    });
    if (!profile) {
      errors.msg = 'No profile found for this user';
      return res.status(400).json(errors);
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    errors.msg = 'No matching user ID';
    res.status(500).json(errors);
  }
};
