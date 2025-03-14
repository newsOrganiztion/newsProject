


// const articleSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String }, // الوصف العام للمقال
//   author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   authorDescription: { type: String }, // وصف المؤلف الجديد
//   featuredImage: { type: String }, // رابط الصورة المميزة
//   category: { 
//     type: String, 
//     enum: ['صحي', 'سياسي', 'زراعي'], 
//     required: true 
//   },
//   tags: [{ type: String }],
//   publishedDate: { type: Date, default: Date.now },

//   // الفقرات
//   paragraph1: { type: String, required: true },
//   paragraph2: { type: String, required: true },
//   paragraph3Title: { type: String }, // عنوان الفقرة الثالثة
//   paragraph3: { type: String }, // نص الفقرة الثالثة
//   paragraph4Title: { type: String }, // عنوان الفقرة الرابعة
//   paragraph4: { type: String }, // نص الفقرة الرابعة

//   status: { 
//     type: String, 
//     enum: ['draft', 'published', 'pending approval'], 
//     default: 'draft' // لا يرسل من الفورم بل يحدد افتراضيًا هنا
//   },

//   scheduledDate: { type: Date },
//   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//   likes: { type: Number, default: 0 },
//   shares: { type: Number, default: 0 },
//   views: { type: Number, default: 0 },
// }, { timestamps: true }); // لتفعيل `createdAt` و `updatedAt` تلقائيًا

// module.exports = mongoose.model('Article', articleSchema);

// const mongoose = require('mongoose');

// const articleSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   author: { type: String },
//   authorDescription: { type: String },
//   featuredImage: { type: String },
//   category: { type: String, required: true },
//   tags: [{ type: String }],
//   publishedDate: { type: Date, default: Date.now },
//   paragraph1: { type: String, required: true },
//   paragraph2: { type: String, required: true },
//   paragraph3Title: { type: String },
//   paragraph3: { type: String },
//   paragraph4Title: { type: String },
//   paragraph4: { type: String },
//   status: { 
//        type: String, 
//        enum: ['draft', 'published', 'pending approval'], 
//         default: 'draft' // لا يرسل من الفورم بل يحدد افتراضيًا هنا
//       },
// });

// module.exports = mongoose.model('Article', articleSchema); 


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  excerpt: { type: String },
  author: { type: String, required: true },
  // author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  authorDescription: { type: String },
  featuredImage: { type: String },
  category: { type: String, enum: ['صحي', 'سياسي', 'زراعي'], required: true },
  tags: [{ type: String }],
  publishedDate: { type: Date, default: Date.now },

  paragraph1: { type: String, required: true },
  paragraph2: { type: String, required: true },
  paragraph3Title: { type: String },
  paragraph3: { type: String },
  paragraph4Title: { type: String },
  paragraph4: { type: String },

  status: { type: String, enum: ['draft', 'published', 'pending approval'], default: 'draft' },
  scheduledDate: { type: Date },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);