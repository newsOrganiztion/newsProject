

import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const ArticleCreationPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    excerpt: '',
    category: '',
    author: '',
    authorDescription: '',
    featuredImage: '',
    tags: '',
    status: 'draft',
    scheduledDate: '',
    paragraphs: [
      { title: '', content: '' },
      { title: '', content: '' },
      { title: '', content: '' },
      { title: '', content: '' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleParagraphChange = (index, e) => {
    const { name, value } = e.target;
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index][name] = value;
    setFormData({
      ...formData,
      paragraphs: newParagraphs,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // تحقق من الحقول المطلوبة
    if (!formData.title || !formData.category || !formData.paragraphs[0].content || !formData.paragraphs[1].content || !formData.author) {
      Swal.fire({
        title: "⚠️ تنبيه!",
        text: "يرجى تعبئة جميع الحقول المطلوبة: العنوان، التصنيف، الفقرة الأولى، الفقرة الثانية، واسم المؤلف.",
        icon: "warning",
        confirmButtonText: "حسنًا"
      });
      return;
    }
  
    try {
      const articleData = {
        title: formData.title,
        description: formData.description,
        excerpt: formData.excerpt,
        author: formData.author, // <-- يجب أن يكون ObjectId صالحًا إذا كنت تستخدم MongoDB
        authorDescription: formData.authorDescription,
        featuredImage: formData.featuredImage,
        category: formData.category,
        tags: formData.tags.split(','), // <-- تحويل الوسوم إلى مصفوفة
        publishedDate: new Date(),
        paragraph1: formData.paragraphs[0].content, // <-- إرسال paragraph1
        paragraph2: formData.paragraphs[1].content, // <-- إرسال paragraph2
        paragraph3Title: formData.paragraphs[2].title,
        paragraph3: formData.paragraphs[2].content,
        paragraph4Title: formData.paragraphs[3].title,
        paragraph4: formData.paragraphs[3].content,
        status: formData.status,
        scheduledDate: formData.scheduledDate || null, // <-- إذا لم يتم تحديد تاريخ، يتم تعيينه إلى null
      };
  
      console.log("🚀 البيانات المرسلة إلى السيرفر:", articleData);
      
      const response = await axios.post('http://localhost:5000/api/articles/submit', articleData);
      
      console.log("✅ المقال تم إنشاؤه بنجاح:", response.data);
  
      // ✅ نافذة نجاح جميلة
      Swal.fire({
        title: "🎉 تم إنشاء المقال بنجاح!",
        text: "يمكنك الآن رؤية المقال في قائمة المقالات.",
        icon: "success",
        confirmButtonText: "حسنًا",
        timer: 3000,  // يغلق تلقائيًا بعد 3 ثوانٍ
        showConfirmButton: false
      });
  
    } catch (error) {
      console.error("❌ خطأ أثناء إنشاء المقال:", error);
  
      // ❌ نافذة خطأ
      Swal.fire({
        title: "❌ حدث خطأ!",
        text: "حدثت مشكلة أثناء إنشاء المقال. يرجى التحقق من الـ Console.",
        icon: "error",
        confirmButtonText: "حسنًا"
      });
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="text-right mb-2">
        <h1 className="text-2xl font-bold text-[#51a31d]">إنشاء مقال جديد</h1>
        <p className="text-sm text-gray-600 mb-6">يرجى ملء البيانات التالية لإنشاء مقال جديد</p>
      </div>

      {/* Form Card */}
      <div className="border rounded-lg p-8 shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#51a31d]">معلومات المقال</h2>
          <p className="text-sm text-gray-600">املأ التفاصيل التالية لإنشاء مقال جديد</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Row - Title and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان المقال</label>
              <input
                type="text"
                name="title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان المقال"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">التصنيف</label>
              <select
                name="category"
                className="w-full border rounded p-2 text-right"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">اختر التصنيف</option>
                <option value="صحي">صحي</option>
                <option value="سياسي">سياسي</option>
                <option value="زراعي">زراعي</option>
              </select>
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">الوصف العام</label>
              <input
                type="text"
                name="description"
                className="w-full border rounded p-2 text-right"
                placeholder="الوصف العام للمقال"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">الملخص</label>
              <input
                type="text"
                name="excerpt"
                className="w-full border rounded p-2 text-right"
                placeholder="ملخص المقال"
                value={formData.excerpt}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Second Row - Author Name and Author Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">اسم المؤلف</label>
              <input
                type="text"
                name="author"
                className="w-full border rounded p-2 text-right"
                placeholder="اسم المؤلف"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">وصف المؤلف</label>
              <input
                type="text"
                name="authorDescription"
                className="w-full border rounded p-2 text-right"
                placeholder="وصف المؤلف"
                value={formData.authorDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Third Row - Featured Image and Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
              <input
                type="file"
                name="featuredImage"
                className="w-full border rounded p-2 text-right"
                placeholder="رابط الصورة المميزة"
                value={formData.featuredImage}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">كلمات مفتاحية</label>
              <input
                type="text"
                name="tags"
                className="w-full border rounded p-2 text-right"
                placeholder="أدخل الوسوم مفصولة بفاصلة"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Fourth Row - Status and Scheduled Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <label className="block text-right mb-1 font-medium">تاريخ النشر المقرر</label>
              <input
                type="date"
                name="scheduledDate"
                className="w-full border rounded p-2 text-right"
                value={formData.scheduledDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Paragraphs Section */}
          <div className="pt-2">
            <h3 className="text-right text-gray-500">فقرات المقال</h3>
          </div>

          {/* Paragraph 1 and Paragraph 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
              <textarea
                name="content"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الأولى"
                value={formData.paragraphs[0].content}
                onChange={(e) => handleParagraphChange(0, e)}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
              <textarea
                name="content"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الثانية"
                value={formData.paragraphs[1].content}
                onChange={(e) => handleParagraphChange(1, e)}
                required
              />
            </div>
          </div>

          {/* Paragraph 3 Title and Paragraph 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
              <input
                type="text"
                name="title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان الفقرة الثالثة"
                value={formData.paragraphs[2].title}
                onChange={(e) => handleParagraphChange(2, e)}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
              <textarea
                name="content"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الثالثة"
                value={formData.paragraphs[2].content}
                onChange={(e) => handleParagraphChange(2, e)}
              />
            </div>
          </div>

          {/* Paragraph 4 Title and Paragraph 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
              <input
                type="text"
                name="title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان الفقرة الرابعة"
                value={formData.paragraphs[3].title}
                onChange={(e) => handleParagraphChange(3, e)}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
              <textarea
                name="content"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الرابعة"
                value={formData.paragraphs[3].content}
                onChange={(e) => handleParagraphChange(3, e)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#51a31d]  hover:bg-[#69696d] text-white px-10 py-2 rounded-full font-medium transition duration-200"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleCreationPage;