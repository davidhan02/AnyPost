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
  passwordHash: {
    type: String
  },
  oauthId: {
    type: String
  },
  admin: {
    type: Boolean
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
  delete obj.passwordHash;
  delete obj.oauthId;
  delete obj._id;
  delete obj.__v;
  return obj;
};

userSchema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.virtual('password').set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 10);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
