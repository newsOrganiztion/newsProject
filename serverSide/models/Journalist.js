
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalistSchema = new Schema({

    name: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["journalist", "reader", "admin"],
    default: "reader",
  },
  profilePicture: { type: String },
  savedArticles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  readingHistory: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  subscriptions: { type: Object }, // Can store subscription details like active plans
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  proofPicture: { type: String, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Journalist", JournalistSchema);
