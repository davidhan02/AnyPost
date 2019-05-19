const mongoose = require('mongoose');
const commentSchema = require('./comment');
const voteSchema = require('./vote');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  text: {
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
  views: {
    type: Number,
    default: 0
  },
  votes: [voteSchema],
  comments: [commentSchema]
});

postSchema.set('toJSON', { getters: true, virtuals: true });
postSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  delete obj._id;
  return obj;
};

postSchema.pre(/^find/, function() {
  this.populate('author').populate('comments.author');
});

postSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
});

postSchema.virtual('upvotePercentage').get(function() {
  if (this.votes.length === 0) return 0;
  const upvotes = this.votes.filter(({ vote }) => vote === 1);
  return Math.floor((upvotes.length / this.votes.length) * 100);
});

postSchema.methods.addComment = function(author, body) {
  this.comments.unshift({ author, body });
  return this.save();
};

postSchema.methods.removeComment = function(commentId) {
  const comment = this.comments.id(commentId);
  if (!comment) throw new Error('No comment matches that ID');
  comment.remove();
  return this.save();
};

postSchema.methods.vote = function(user, vote) {
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

postSchema.post('save', function(doc, next) {
  if (this.wasNew) this.vote(this.author._id, 1);
  doc
    .populate('author')
    .populate('comments.author')
    .execPopulate()
    .then(() => next());
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
