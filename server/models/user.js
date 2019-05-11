const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String
  },
  oauthId: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', { getters: true });
userSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.password;
  delete obj._id;
  delete obj.__v;
  return obj;
};

userSchema.pre('save', async function(next) {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
