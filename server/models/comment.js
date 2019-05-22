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

commentSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
});

commentSchema.virtual('upvotePercentage').get(function() {
  if (this.votes.length === 0) return 0;
  const upvotes = this.votes.filter(({ vote }) => vote === 1);
  return Math.floor((upvotes.length / this.votes.length) * 100);
});

module.exports = commentSchema;
