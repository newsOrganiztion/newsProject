// import React, { useState } from 'react';

// const ArticleCreationPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-amber-400 min-h-screen flex items-center justify-center p-4">
//       <button 
//         onClick={() => setIsOpen(true)} 
//         className="bg-white text-gray-800 font-bold py-2 px-4 rounded shadow-md"
//       >
//         Open Form
//       </button>
      
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-3xl relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-300 rounded-lg -z-10"></div>
//             <button 
//               onClick={() => setIsOpen(false)} 
//               className="absolute top-4 right-4 text-gray-600 font-bold"
//             >
//               ✕
//             </button>
//             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-md"></div>
//             <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full overflow-hidden">
//               <img 
//                 src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Person with headset using laptop" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
//               Webinar Registration Form
//             </h1>
            
//             <form className="space-y-6">
//               <div className="space-y-1">
//                 <label className="block font-medium text-gray-800">Name</label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <input 
//                       type="text" 
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       placeholder="First Name"
//                     />
//                   </div>
//                   <div>
//                     <input 
//                       type="text" 
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       placeholder="Last Name"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">E-mail</label>
//                   <input 
//                     type="email" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="ex: myname@example.com"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">Phone</label>
//                   <input 
//                     type="tel" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="(000) 000-0000"
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-1">
//                 <label className="block font-medium text-gray-800">Company</label>
//                 <input 
//                   type="text" 
//                   className="w-full border border-gray-300 rounded-lg p-2"
//                 />
//               </div>
              
//               <div className="space-y-1">
//                 <label className="block font-medium text-gray-800">Company Address</label>
//                 <input 
//                   type="text" 
//                   className="w-full border border-gray-300 rounded-lg p-2"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ArticleCreationPage; 


// import React, { useState } from 'react';

// const ArticleCreationPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-amber-400 min-h-screen flex items-center justify-center p-4">
//       <button 
//         onClick={() => setIsOpen(true)} 
//         className="bg-white text-gray-800 font-bold py-2 px-4 rounded shadow-md"
//       >
//         فتح النموذج
//       </button>
      
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="relative w-full max-w-3xl">
//             {/* الطبقة الأولى: الخلفية البرتقالية */}
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-300 rounded-lg -z-10"></div>
            
//             {/* الطبقة الثانية: الفورم الأساسي */}
//             <div className="bg-white rounded-lg shadow-lg p-10 relative overflow-hidden">
//               <button 
//                 onClick={() => setIsOpen(false)} 
//                 className="absolute top-4 right-4 text-gray-600 font-bold"
//               >
//                 ✕
//               </button>
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-md"></div>
//               <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full overflow-hidden">
//                 <img 
//                   src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                   alt="Person with headset using laptop" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
//                 نموذج تسجيل المقالات
//               </h1>
              
//               <form className="space-y-6">
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">العنوان</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل العنوان هنا"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">المحتوى</label>
//                   <textarea
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل المحتوى هنا"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">المؤلف</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="اسم المؤلف"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">رابط الصورة المميزة</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="رابط الصورة المميزة للمقال"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">رابط الفيديو أو الصورة</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الرابط هنا"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الفئة</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الفئة"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الكلمات المفتاحية</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الكلمات المفتاحية"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">تاريخ النشر</label>
//                   <input 
//                     type="date" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الحالة</label>
//                   <select 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   >
//                     <option value="draft">مسودة</option>
//                     <option value="published">منشور</option>
//                     <option value="pending approval">قيد الموافقة</option>
//                   </select>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ArticleCreationPage;



// import React, { useState } from 'react';

// const ArticleCreationPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-amber-400 min-h-screen flex items-center justify-center p-4">
//       <button 
//         onClick={() => setIsOpen(true)} 
//         className="bg-white text-gray-800 font-bold py-2 px-4 rounded shadow-md"
//       >
//         فتح النموذج
//       </button>
      
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="relative w-full max-w-3xl">
//             {/* الطبقة الأولى: الخلفية البرتقالية */}
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-300 rounded-lg -z-10"></div>
            
//             {/* الطبقة الثانية: الفورم الأساسي */}
//             <div className="bg-white rounded-lg shadow-lg p-10 relative overflow-y-auto" style={{ maxHeight: '90vh' }}>
//               <button 
//                 onClick={() => setIsOpen(false)} 
//                 className="absolute top-4 right-4 text-gray-600 font-bold"
//               >
//                 ✕
//               </button>
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-md"></div>
//               <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full overflow-hidden">
//                 <img 
//                   src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                   alt="Person with headset using laptop" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
//                 نموذج تسجيل المقالات
//               </h1>
              
//               <form className="space-y-6">
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">العنوان</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل العنوان هنا"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الوصف</label>
//                   <textarea
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الوصف هنا"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">المحتوى</label>
//                   <textarea
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل المحتوى هنا"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">المؤلف</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="اسم المؤلف"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">رابط الصورة المميزة</label>
//                   <input 
//                     type="file" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="رابط الصورة المميزة للمقال"
//                   />
//                 </div>

               
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الفئة</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الفئة"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">الكلمات المفتاحية</label>
//                   <input 
//                     type="text" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="أدخل الكلمات المفتاحية"
//                   />
//                 </div>
                
//                 <div className="space-y-1">
//                   <label className="block font-medium text-gray-800">تاريخ النشر</label>
//                   <input 
//                     type="date" 
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
               
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ArticleCreationPage; 


// import React from 'react';

// const ArticleCreationPage = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-4 font-sans">
//       {/* Header */}
//       <div className="text-right mb-2">
//         <h1 className="text-2xl font-bold text-purple-900">انضم إلى ميجا خير</h1>
//         <p className="text-sm text-gray-600 mb-6">ميجا خير هي منصة الوصول والتشبيك السنوي لأكثر من 150 جمعية خيرية ومؤسسة وفريق تطوع</p>
//       </div>

//       {/* Form Card */}
//       <div className="border rounded-lg p-8 shadow-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-purple-900 mb-2">طلب شراكة مع ميجا خير</h2>
//           <p className="text-sm text-gray-600">يرجى ملء البيانات التالية وسنقوم بالتواصل معك في حالة الموافقة على طلبك</p>
//         </div>

//         <form className="space-y-6">
//           {/* First Row - Name and Email */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">الإسم</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="أحمد محمود"
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">البريد الإلكتروني</label>
//               <input 
//                 type="email" 
//                 className="w-full border rounded p-2" 
//                 placeholder="name@example.com"
//               />
//             </div>
//           </div>

//           {/* Second Row - Phone and Position */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">رقم الهاتف</label>
//               <input 
//                 type="tel" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="+20 XX XXXX XX"
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوظيفة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="الرئيس التنفيذي"
//               />
//             </div>
//           </div>

//           {/* Organization Information Header */}
//           <div className="pt-2">
//             <h3 className="text-right text-gray-500">معلومات الجمعية أو المؤسسة</h3>
//           </div>

//           {/* Organization Name and Address */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">اسم الجمعية أو المؤسسة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="اسم الجمعية تفاعلي"
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">العنوان</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="العنوان للتسجيل أو مكان الاختبار"
//               />
//             </div>
//           </div>

//           {/* Question and Registration Number */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">هل لدى الجمعية ترخيص جمع مال / شارك؟</label>
//               <div className="flex items-center justify-end mt-2">
//                 <select className="border rounded p-2 pr-8 pl-2 text-right">
//                   <option>✓</option>
//                   <option>✗</option>
//                 </select>
//                 <label className="ml-2 text-right">هل الجمعية أو المؤسسة مسجلة؟</label>
//               </div>
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">رقم إشهار الجمعية أو المؤسسة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="رقم التسجيل"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button 
//               type="submit" 
//               className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-2 rounded-full font-medium transition duration-200"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArticleCreationPage;

// import React, { useState } from 'react';
// import axios from 'axios'; // لإرسال البيانات إلى الخادم

// const ArticleForm = () => {
//   // حالة الفورم
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     author: '', // يمكنك تعبئته تلقائيًا بناءً على المستخدم المسجل
//     featuredImage: '',
//     category: 'صحي', // القيمة الافتراضية
//     tags: [],
//     paragraph1: '',
//     paragraph2: '',
//     paragraph3Title: '',
//     paragraph3: '',
//     paragraph4Title: '',
//     paragraph4: '',
//     scheduledDate: '',
//   });

//   // دالة لتحديث الحالة عند تغيير الحقول
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // دالة لإرسال البيانات
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/articles', formData); // إرسال البيانات إلى الخادم
//       console.log('Article created:', response.data);
//       alert('تم إنشاء المقال بنجاح!');
//     } catch (error) {
//       console.error('Error creating article:', error);
//       alert('حدث خطأ أثناء إنشاء المقال.');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4 font-sans">
//       {/* Header */}
//       <div className="text-right mb-2">
//         <h1 className="text-2xl font-bold text-purple-900">إضافة مقال جديد</h1>
//         <p className="text-sm text-gray-600 mb-6">املأ البيانات التالية لإضافة مقال جديد إلى المنصة</p>
//       </div>

//       {/* Form Card */}
//       <div className="border rounded-lg p-8 shadow-sm">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* العنوان */}
//           <div>
//             <label className="block text-right mb-1 font-medium">العنوان</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل عنوان المقال"
//               required
//             />
//           </div>

//           {/* الوصف */}
//           <div>
//             <label className="block text-right mb-1 font-medium">الوصف</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل وصف المقال"
//             />
//           </div>

//           {/* الصورة المميزة */}
//           <div>
//             <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
//             <input
//               type="text"
//               name="featuredImage"
//               value={formData.featuredImage}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل رابط الصورة"
//             />
//           </div>

//           {/* الفئة */}
//           <div>
//             <label className="block text-right mb-1 font-medium">الفئة</label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//             >
//               <option value="صحي">صحي</option>
//               <option value="سياسي">سياسي</option>
//               <option value="زراعي">زراعي</option>
//             </select>
//           </div>

//           {/* الفقرات */}
//           <div>
//             <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
//             <textarea
//               name="paragraph1"
//               value={formData.paragraph1}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل نص الفقرة الأولى"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
//             <textarea
//               name="paragraph2"
//               value={formData.paragraph2}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل نص الفقرة الثانية"
//               required
//             />
//           </div>

//           {/* الفقرة الثالثة */}
//           <div>
//             <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
//             <input
//               type="text"
//               name="paragraph3Title"
//               value={formData.paragraph3Title}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل عنوان الفقرة الثالثة"
//             />
//           </div>
//           <div>
//             <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
//             <textarea
//               name="paragraph3"
//               value={formData.paragraph3}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل نص الفقرة الثالثة"
//             />
//           </div>

//           {/* الفقرة الرابعة */}
//           <div>
//             <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
//             <input
//               type="text"
//               name="paragraph4Title"
//               value={formData.paragraph4Title}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل عنوان الفقرة الرابعة"
//             />
//           </div>
//           <div>
//             <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
//             <textarea
//               name="paragraph4"
//               value={formData.paragraph4}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//               placeholder="أدخل نص الفقرة الرابعة"
//             />
//           </div>

//           {/* تاريخ النشر المحدد */}
//           <div>
//             <label className="block text-right mb-1 font-medium">تاريخ النشر المحدد (اختياري)</label>
//             <input
//               type="date"
//               name="scheduledDate"
//               value={formData.scheduledDate}
//               onChange={handleChange}
//               className="w-full border rounded p-2 text-right"
//             />
//           </div>

//           {/* زر الإرسال */}
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-2 rounded-full font-medium transition duration-200"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArticleForm; 



// import React, { useState } from 'react';
// import axios from 'axios';




// const ArticleCreationPage = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     description: '',
//     authorName: '',
//     authorDescription: '',
//     featuredImage: '',
//     tags: '',
//     paragraphs: [
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//     ],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }; 

//   const handleParagraphChange = (index, e) => {
//     const { name, value } = e.target;
//     const newParagraphs = [...formData.paragraphs];
//     newParagraphs[index][name] = value;
//     setFormData({
//       ...formData,
//       paragraphs: newParagraphs,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/articles', formData);
//       console.log('Article created successfully:', response.data);
//       alert('Article created successfully!');
//     } catch (error) {
//       console.error('Error creating article:', error);
//       alert('Error creating article. Please try again.');
//     }
//   };

  
  
//   return (
//     <div className="max-w-3xl mx-auto p-4 font-sans">
//       {/* Header */}
//       <div className="text-right mb-2">
//         <h1 className="text-2xl font-bold text-purple-900">إنشاء مقال جديد</h1>
//         <p className="text-sm text-gray-600 mb-6">يرجى ملء البيانات التالية لإنشاء مقال جديد</p>
//       </div>

//       {/* Form Card */}
//       <div className="border rounded-lg p-8 shadow-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-purple-900 mb-2">معلومات المقال</h2>
//           <p className="text-sm text-gray-600">املأ التفاصيل التالية لإنشاء مقال جديد</p>
//         </div>

//         <form className="space-y-6"  onSubmit={handleSubmit}>
//           {/* First Row - Title and Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان المقال</label>
//               <input 
//                 type="text" 
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان المقال"
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">التصنيف</label>
//               <select 
//                 className="w-full border rounded p-2 text-right"
//                 value={formData.category}
//                 onChange={handleChange}
//               >
//                 <option value="صحي">صحي</option>
//                 <option value="سياسي">سياسي</option>
//                 <option value="زراعي">زراعي</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوصف العام</label>
//               <input 
//                 type="text" 
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="الوصف العام للمقال"
//               />
//             </div>
//           </div>

//           {/* Second Row - Description and Author Description */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">اسم المؤلف </label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="الوصف العام للمقال"
//                 value={formData.authorName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">وصف المؤلف</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="وصف المؤلف"
//                 value={formData.authorDescription}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Third Row - Featured Image and Tags */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="رابط الصورة المميزة"
//                 value={formData.featuredImage}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوسوم</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="أدخل الوسوم مفصولة بفاصلة"
//                 value={formData.tags}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Paragraphs Section */}
//           <div className="pt-2">
//             <h3 className="text-right text-gray-500">فقرات المقال</h3>
//           </div>

//           {/* Paragraph 1 and Paragraph 2 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
//               <textarea 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الأولى"
//                 value={formData.paragraphs[0].content}
//                 onChange={(e) => handleParagraphChange(0, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
//               <textarea 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الثانية"
//                 value={formData.paragraphs[1].content}
//                 onChange={(e) => handleParagraphChange(1, e)}
//               />
//             </div>
//           </div>

//           {/* Paragraph 3 Title and Paragraph 3 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان الفقرة الثالثة"
//                 value={formData.paragraphs[2].title}
//                 onChange={(e) => handleParagraphChange(2, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
//               <textarea 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الثالثة"
//                 value={formData.paragraphs[2].content}
//                 onChange={(e) => handleParagraphChange(2, e)}
//               />
//             </div>
//           </div>

//           {/* Paragraph 4 Title and Paragraph 4 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
//               <input 
//                 type="text" 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان الفقرة الرابعة"
//                 value={formData.paragraphs[3].title}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
//               <textarea 
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الرابعة"
//                 value={formData.paragraphs[3].content}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button 
//               type="submit" 
//               className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-2 rounded-full font-medium transition duration-200"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArticleCreationPage;



// import React, { useState } from 'react';
// import axios from 'axios';

// const ArticleCreationPage = () => {
//   const [formData, setFormData] = useState({
//     title: '',
   
//     description: '',
//     category: '',
//     authorName: '',
//     authorDescription: '',
//     featuredImage: '',
//     tags: '',
//     paragraphs: [
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//     ],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleParagraphChange = (index, e) => {
//     const { name, value } = e.target;
//     const newParagraphs = [...formData.paragraphs];
//     newParagraphs[index][name] = value;
//     setFormData({
//       ...formData,
//       paragraphs: newParagraphs,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const articleData = {
//         title: formData.title,
//         description: formData.description,
//         authorName: formData.authorName, // <-- إرسال authorName بدلاً من author
//         authorDescription: formData.authorDescription,
//         featuredImage: formData.featuredImage,
//         category: formData.category,
//         tags: formData.tags.split(','), // <-- تحويل الوسوم إلى مصفوفة
//         publishedDate: new Date(),
//         paragraph1: formData.paragraphs[0].content,
//         paragraph2: formData.paragraphs[1].content,
//         paragraph3Title: formData.paragraphs[2].title,
//         paragraph3: formData.paragraphs[2].content,
//         paragraph4Title: formData.paragraphs[3].title,
//         paragraph4: formData.paragraphs[3].content,
//       };
  
//       console.log("🚀 البيانات المرسلة إلى السيرفر:", articleData); // ✅ طباعة البيانات المرسلة
//       const response = await axios.post('http://localhost:5000/api/article', articleData);
//       console.log("✅ المقال تم إنشاؤه بنجاح:", response.data);
//       alert("🎉 تم إنشاء المقال بنجاح!");
//     } catch (error) {
//       console.error("❌ خطأ أثناء إنشاء المقال:", error);
//       alert("❌ حدث خطأ أثناء إنشاء المقال. يرجى التحقق من الـ Console.");
//     }
//   };


//   return (
//     <div className="max-w-3xl mx-auto p-4 font-sans">
//       {/* Header */}
//       <div className="text-right mb-2">
//         <h1 className="text-2xl font-bold text-purple-900">إنشاء مقال جديد</h1>
//         <p className="text-sm text-gray-600 mb-6">يرجى ملء البيانات التالية لإنشاء مقال جديد</p>
//       </div>

//       {/* Form Card */}
//       <div className="border rounded-lg p-8 shadow-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-purple-900 mb-2">معلومات المقال</h2>
//           <p className="text-sm text-gray-600">املأ التفاصيل التالية لإنشاء مقال جديد</p>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* First Row - Title and Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان المقال</label>
//               <input 
//                 type="String" 
//                 name="title"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان المقال"
//                 value={formData.title}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">التصنيف</label>
//               <select 
//                 name="category"
//                 className="w-full border rounded p-2 text-right"
//                 value={formData.category}
//                 onChange={handleChange}
//               >
//                 <option value="صحي">صحي</option>
//                 <option value="سياسي">سياسي</option>
//                 <option value="زراعي">زراعي</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوصف العام</label>
//               <input 
//                 type="String" 
//                 name="description"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="الوصف العام للمقال"
//                 value={formData.description}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Second Row - Description and Author Description */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">اسم المؤلف </label>
//               <input 
//                 type="String" 
//                 name="authorName"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="اسم المؤلف"
//                 value={formData.authorName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">وصف المؤلف</label>
//               <input 
//                 type="String" 
//                 name="authorDescription"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="وصف المؤلف"
//                 value={formData.authorDescription}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Third Row - Featured Image and Tags */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
//               <input 
//                 type="String" 
//                 name="featuredImage"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="رابط الصورة المميزة"
//                 value={formData.featuredImage}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوسوم</label>
//               <input 
//                 type="String" 
//                 name="tags"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="أدخل الوسوم مفصولة بفاصلة"
//                 value={formData.tags}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Paragraphs Section */}
//           <div className="pt-2">
//             <h3 className="text-right text-gray-500">فقرات المقال</h3>
//           </div>

//           {/* Paragraph 1 and Paragraph 2 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
//               <textarea 
//                 name="content"
//                   type="String"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الأولى"
//                 value={formData.paragraphs[0].content}
//                 onChange={(e) => handleParagraphChange(0, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
//               <textarea 
//                 name="content"
//                   type="String"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الثانية"
//                 value={formData.paragraphs[1].content}
//                 onChange={(e) => handleParagraphChange(1, e)}
//               />
//             </div>
//           </div>

//           {/* Paragraph 3 Title and Paragraph 3 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
//               <input 
//                type="String"
//                 name="title"
                
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان الفقرة الثالثة"
//                 value={formData.paragraphs[2].title}
//                 onChange={(e) => handleParagraphChange(2, e)}
                
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
//               <textarea 
//                 name="content"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الثالثة"
//                 value={formData.paragraphs[2].content}
//                   type="String"
//                 onChange={(e) => handleParagraphChange(2, e)}
//               />
//             </div>
//           </div>

//           {/* Paragraph 4 Title and Paragraph 4 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
//               <input   type="String"
//                 name="title"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="عنوان الفقرة الرابعة"
//                 value={formData.paragraphs[3].title}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
//               <textarea 
//                 name="content"
//                   type="String"
//                 className="w-full border rounded p-2 text-right" 
//                 placeholder="نص الفقرة الرابعة"
//                 value={formData.paragraphs[3].content}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button 
//               type="submit" 
//               className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-2 rounded-full font-medium transition duration-200"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArticleCreationPage; 

// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from "sweetalert2";

// const ArticleCreationPage = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     author: '',
//     authorDescription: '',
//     featuredImage: '',
//     tags: '',
//     paragraphs: [
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//       { title: '', content: '' },
//     ],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleParagraphChange = (index, e) => {
//     const { name, value } = e.target;
//     const newParagraphs = [...formData.paragraphs];
//     newParagraphs[index][name] = value;
//     setFormData({
//       ...formData,
//       paragraphs: newParagraphs,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // تحقق من الحقول المطلوبة
//     if (!formData.title || !formData.category || !formData.paragraphs[0].content || !formData.paragraphs[1].content) {
//       Swal.fire({
//         title: "⚠️ تنبيه!",
//         text: "يرجى تعبئة جميع الحقول المطلوبة: العنوان، التصنيف، الفقرة الأولى، والفقرة الثانية.",
//         icon: "warning",
//         confirmButtonText: "حسنًا"
//       });
//       return;
//     }
  
//     try {
//       const articleData = {
//         title: formData.title,
//         description: formData.description,
//         author: formData.author, // <-- يجب أن يكون ObjectId صالحًا
//         authorDescription: formData.authorDescription,
//         featuredImage: formData.featuredImage,
//         category: formData.category,
//         tags: formData.tags.split(','), // <-- تحويل الوسوم إلى مصفوفة
//         publishedDate: new Date(),
//         paragraph1: formData.paragraphs[0].content, // <-- إرسال paragraph1
//         paragraph2: formData.paragraphs[1].content, // <-- إرسال paragraph2
//         paragraph3Title: formData.paragraphs[2].title,
//         paragraph3: formData.paragraphs[2].content,
//         paragraph4Title: formData.paragraphs[3].title,
//         paragraph4: formData.paragraphs[3].content,
//       };
  
//       console.log("🚀 البيانات المرسلة إلى السيرفر:", articleData);
      
//       const response = await axios.post('http://localhost:5000/api/article', articleData);
      
//       console.log("✅ المقال تم إنشاؤه بنجاح:", response.data);
  
//       // ✅ نافذة نجاح جميلة
//       Swal.fire({
//         title: "🎉 تم إنشاء المقال بنجاح!",
//         text: "يمكنك الآن رؤية المقال في قائمة المقالات.",
//         icon: "success",
//         confirmButtonText: "حسنًا",
//         timer: 3000,  // يغلق تلقائيًا بعد 3 ثوانٍ
//         showConfirmButton: false
//       });
  
//     } catch (error) {
//       console.error("❌ خطأ أثناء إنشاء المقال:", error);
  
//       // ❌ نافذة خطأ
//       Swal.fire({
//         title: "❌ حدث خطأ!",
//         text: "حدثت مشكلة أثناء إنشاء المقال. يرجى التحقق من الـ Console.",
//         icon: "error",
//         confirmButtonText: "حسنًا"
//       });
//     }
//   };
  

//   return (
//     <div className="max-w-6xl mx-auto p-4 font-sans">
//       {/* Header */}
//       <div className="text-right mb-2">
//         <h1 className="text-2xl font-bold text-purple-900">إنشاء مقال جديد</h1>
//         <p className="text-sm text-gray-600 mb-6">يرجى ملء البيانات التالية لإنشاء مقال جديد</p>
//       </div>

//       {/* Form Card */}
//       <div className="border rounded-lg p-8 shadow-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-purple-900 mb-2">معلومات المقال</h2>
//           <p className="text-sm text-gray-600">املأ التفاصيل التالية لإنشاء مقال جديد</p>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* First Row - Title and Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان المقال</label>
//               <input
//                 type="text"
//                 name="title"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="عنوان المقال"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">التصنيف</label>
//               <select
//                 name="category"
//                 className="w-full border rounded p-2 text-right"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">اختر التصنيف</option>
//                 <option value="صحي">صحي</option>
//                 <option value="سياسي">سياسي</option>
//                 <option value="زراعي">زراعي</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوصف العام</label>
//               <input
//                 type="text"
//                 name="description"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="الوصف العام للمقال"
//                 value={formData.description}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">تاريخ المقال </label>
//               <input
//                 type="date"
//                 name="description"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="الوصف العام للمقال"
//                 value={formData.publishedDate}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Second Row - Author Name and Author Description */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">اسم المؤلف</label>
//               <input
//                 type="text"
//                 name="author"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="اسم المؤلف"
//                 value={formData.author}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">وصف المؤلف</label>
//               <input
//                 type="text"
//                 name="authorDescription"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="وصف المؤلف"
//                 value={formData.authorDescription}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Third Row - Featured Image and Tags */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
//               <input
//                 type="text"
//                 name="featuredImage"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="رابط الصورة المميزة"
//                 value={formData.featuredImage}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الوسوم</label>
//               <input
//                 type="text"
//                 name="tags"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="أدخل الوسوم مفصولة بفاصلة"
//                 value={formData.tags}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Paragraphs Section */}
//           <div className="pt-2">
//             <h3 className="text-right text-gray-500">فقرات المقال</h3>
//           </div>

//           {/* Paragraph 1 and Paragraph 2 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
//               <textarea
//                 name="content"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="نص الفقرة الأولى"
//                 value={formData.paragraphs[0].content}
//                 onChange={(e) => handleParagraphChange(0, e)}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
//               <textarea
//                 name="content"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="نص الفقرة الثانية"
//                 value={formData.paragraphs[1].content}
//                 onChange={(e) => handleParagraphChange(1, e)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Paragraph 3 Title and Paragraph 3 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
//               <input
//                 type="text"
//                 name="title"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="عنوان الفقرة الثالثة"
//                 value={formData.paragraphs[2].title}
//                 onChange={(e) => handleParagraphChange(2, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
//               <textarea
//                 name="content"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="نص الفقرة الثالثة"
//                 value={formData.paragraphs[2].content}
//                 onChange={(e) => handleParagraphChange(2, e)}
//               />
//             </div>
//           </div>

//           {/* Paragraph 4 Title and Paragraph 4 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
//               <input
//                 type="text"
//                 name="title"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="عنوان الفقرة الرابعة"
//                 value={formData.paragraphs[3].title}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//             <div>
//               <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
//               <textarea
//                 name="content"
//                 className="w-full border rounded p-2 text-right"
//                 placeholder="نص الفقرة الرابعة"
//                 value={formData.paragraphs[3].content}
//                 onChange={(e) => handleParagraphChange(3, e)}
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="bg-[#51a31d]  hover:bg-[#69696d] text-white px-10 py-2 rounded-full font-medium transition duration-200"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArticleCreationPage; 

import React, { useState, useEffect } from 'react';
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

  const [userId, setUserId] = useState(''); 
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // جلب الـ JWT من localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('لم يتم العثور على token');
        }
  
        // إرسال طلب إلى الخادوم للحصول على بيانات المستخدم
        const res = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
  
        // تحديث حقل "المؤلف" تلقائيًا باسم المستخدم
        setFormData((prevData) => ({
          ...prevData,
          author: res.data.user.name, // استخدام اسم المستخدم
        }));
  
        // تحديث userId بشكل منفصل
        setUserId(res.data.user._id);
      } catch (error) {
        console.error('فشل في جلب بيانات المستخدم:', error);
        Swal.fire({
          title: "⚠️ تنبيه!",
          text: "فشل في جلب بيانات المستخدم. يرجى التحقق من تسجيل الدخول.",
          icon: "warning",
          confirmButtonText: "حسنًا",
        });
      }
    };
  
    fetchUserProfile();
  }, []);


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
    if (!formData.title || !formData.category || !formData.paragraphs[0].content || !formData.paragraphs[1].content || !formData.author || !userId) {
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
        author: formData.userId, // اسم المؤلف
       
        authorDescription: formData.authorDescription,
        featuredImage: formData.featuredImage,
        category: formData.category,
        tags: formData.tags.split(','), // تحويل الوسوم إلى مصفوفة
        paragraph1: formData.paragraphs[0].content,
        paragraph2: formData.paragraphs[1].content,
        paragraph3Title: formData.paragraphs[2].title,
        paragraph3: formData.paragraphs[2].content,
        paragraph4Title: formData.paragraphs[3].title,
        paragraph4: formData.paragraphs[3].content,
        status: formData.status,
        scheduledDate: formData.scheduledDate || null,
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
      console.error("❌ خطأ أثناء إنشاء المقال:", error.response?.data || error.message);
  
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
                readOnly
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