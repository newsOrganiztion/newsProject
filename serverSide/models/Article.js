// serverSide/models/Article.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  featuredImage: { type: String }, // لحفظ رابط الصورة المميزة للمقال
  multimedia: [{
    url: { type: String, required: true }, // رابط الملف المرفوع (صورة أو فيديو)
    type: { type: String, enum: ['image', 'video'], required: true }, // نوع الملف (صورة أو فيديو)
  }],
  category: { type: String, required: true },
  tags: [{ type: String }],
  publishedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['draft', 'published', 'pending approval'], default: 'draft' },
  scheduledDate: { type: Date },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);
