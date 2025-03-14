import React, { useState } from 'react';
import axios from 'axios';

const ArticleCreationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    authorDescription: '',
    featuredImage: null, 
    category: '',
    tags: '',
    publishedDate: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3Title: '',
    paragraph3: '',
    paragraph4Title: '',
    paragraph4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'featuredImage') {
      setFormData((prevData) => ({ ...prevData, featuredImage: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:5000/api/articles/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('تم إنشاء المقال بنجاح!');
      setIsOpen(false); 
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء إنشاء المقال.');
    }
  };

  return (
    <div className="bg-amber-400 min-h-screen flex items-center justify-center p-4">
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-white text-gray-800 font-bold py-2 px-4 rounded shadow-md"
      >
        فتح النموذج
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-300 rounded-lg -z-10"></div>
            
            <div className="bg-white rounded-lg shadow-lg p-10 relative overflow-y-auto" style={{ maxHeight: '90vh' }}>
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 text-gray-600 font-bold"
              >
                ✕
              </button>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-md"></div>
              <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person with headset using laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                نموذج تسجيل المقالات
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Fields here */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">العنوان</label>
                  <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="أدخل العنوان هنا" 
                    required 
                  />
                </div>

                {/* Field: Description */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">الوصف</label>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="أدخل الوصف هنا"
                    required 
                  ></textarea>
                </div>

                {/* Field: Author */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">المؤلف</label>
                  <input 
                    type="text" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="اسم المؤلف" 
                    required 
                  />
                </div>

               {/* Field: Author Description */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">وصف المؤلف</label>
                  <textarea 
                    name="authorDescription" 
                    value={formData.authorDescription} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="أدخل وصفًا للمؤلف"
                    required 
                  ></textarea>
                </div>
             {/* Field: Featured Image URL */}   
                
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">صورة المقال</label>
                  <input 
                    type="file" 
                    name="featuredImage" 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                  />
                </div>

                {/* Field: Category */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">الفئة</label>
                  <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2 bg-white" 
                    required 
                  >
                    <option value="">اختر الفئة</option>
                    <option value="صحي">صحي</option>
                    <option value="سياسي">سياسي</option>
                    <option value="زراعي">زراعي</option>
                  </select>
                </div>

                {/* Field: Keywords */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">الكلمات المفتاحية</label>
                  <input 
                    type="text" 
                    name="tags" 
                    value={formData.tags} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="أدخل الكلمات المفتاحية" 
                    required 
                  />
                </div>

                {/* Field: Publication Date */}
                <div className="space-y-1">
                  <label className="block font-medium text-gray-800">تاريخ النشر</label>
                  <input 
                    type="date" 
                    name="publishedDate" 
                    value={formData.publishedDate} 
                    onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    required 
                  />
                </div>

                {/* New section for adding paragraphs */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800">معلومات المقال:</h2>

                 {/* Field: First Paragraph */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">الفقرة الأولى</label>
                    <textarea 
                      name="paragraph1" 
                      value={formData.paragraph1} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="اكتب الفقرة الأولى"
                      required 
                    ></textarea>
                  </div>

                  {/* Field: Second Paragraph */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">الفقرة الثانية</label>
                    <textarea 
                      name="paragraph2" 
                      value={formData.paragraph2} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="اكتب الفقرة الثانية"
                      required 
                    ></textarea>
                  </div>

                  {/* Field: Title of the third paragraph */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">عنوان الفقرة الثالثة</label>
                    <input 
                      type="text" 
                      name="paragraph3Title" 
                      value={formData.paragraph3Title} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="أدخل عنوان الفقرة الثالثة" 
                    />
                  </div>

                {/* الحقل: الفقرة الثالثة */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">الفقرة الثالثة</label>
                    <textarea 
                      name="paragraph3" 
                      value={formData.paragraph3} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="اكتب الفقرة الثالثة"
                    ></textarea>
                  </div>

                  {/* Field: Title of the fourth paragraph */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">عنوان الفقرة الرابعة</label>
                    <input 
                      type="text" 
                      name="paragraph4Title" 
                      value={formData.paragraph4Title} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="أدخل عنوان الفقرة الرابعة" 
                    />
                  </div>

                  {/* Field: Fourth Paragraph */}
                  <div className="space-y-1">
                    <label className="block font-medium text-gray-800">الفقرة الرابعة</label>
                    <textarea 
                      name="paragraph4" 
                      value={formData.paragraph4} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg p-2" 
                      placeholder="اكتب الفقرة الرابعة"
                    ></textarea>
                  </div>
                </div>

             {/* Submit button */}
                <button 
                  type="submit" 
                  className="w-full bg-amber-400 text-white font-bold py-2 px-4 rounded"
                >
                  إرسال المقال
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCreationPage;