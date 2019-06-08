const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expSchema = require('./experience');
const eduSchema = require('./education');
const socialSchema = require('./social');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  status: {
    type: String,
    required: true
  },
  interests: {
    type: [String]
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  experience: [expSchema],
  education: [eduSchema],
  social: socialSchema
});

profileSchema.set('toJSON', { getters: true });
profileSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
