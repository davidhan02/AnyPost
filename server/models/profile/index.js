const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expSchema = require('./experience');
const eduSchema = require('./education');
const socialSchema = require('./social');
const voteSchema = require('../vote');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
  votes: [voteSchema],
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

profileSchema.pre(/^find/, function() {
  this.populate('user');
});

profileSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
});

profileSchema.virtual('upvotePercentage').get(function() {
  if (this.votes.length === 0) return 0;
  const upvotes = this.votes.filter(({ vote }) => vote === 1);
  return Math.floor((upvotes.length / this.votes.length) * 100);
});

profileSchema.methods.vote = function(user, vote) {
  const existingVote = this.votes.find(item => item.user._id.equals(user));

  if (existingVote) {
    this.score -= existingVote.vote;
    if (vote === 0) {
      this.votes.pull(existingVote);
    } else {
      this.score += vote;
      existingVote.vote = vote;
    }
  } else if (vote !== 0) {
    this.score += vote;
    this.votes.push({ user, vote });
  }
  return this.save();
};

profileSchema.post('save', function(doc, next) {
  if (this.wasNew) this.vote(this.user._id, 1);
  doc
    .populate('user')
    .execPopulate()
    .then(() => next());
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
