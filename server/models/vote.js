const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  user: Schema.Types.ObjectId,
  vote: Number,
  _id: false
});

export default voteSchema;
