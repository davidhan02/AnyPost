const mongoose = require('mongoose');
const voteSchema = require('./vote');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  votes: [voteSchema]
});

commentSchema.set('toJSON', { getters: true, virtuals: true });
commentSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

commentSchema.methods.vote = function(user, vote) {
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
};

module.exports = commentSchema;
