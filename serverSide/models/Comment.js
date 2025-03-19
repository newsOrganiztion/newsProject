const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    articleId: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    status: { type: String, enum: ['approved', 'pending', 'rejected'], default: 'pending' },
    reported: { type: Boolean, default: false },  
    reportReason: { type: String, default: '' }   
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Comment', commentSchema);
