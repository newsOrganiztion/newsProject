// serverSide/models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['journalist', 'reader', 'admin'], default: 'reader' },
  name: { type: String, required: true },
  profilePicture: { type: String },
  savedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  readingHistory: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  subscriptions: { type: Object },  // Can store subscription details like active plans
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
