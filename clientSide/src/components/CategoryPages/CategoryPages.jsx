import React, { useState } from "react";



const CategoryPage = () => {

  const allArticles = [
    {
      id: 1,
      title: "وزير الاقتصاد يكشف عن خطة إنعاش جديدة",
      excerpt: "أعلن وزير الاقتصاد عن خطة لدعم الشركات الصغيرة والمتوسطة لمواجهة التحديات الاقتصادية.",
      author: "أحمد علي",
      date: "١٠ مارس ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/close-up-reporter-taking-interview_23-2149183577.jpg",
      category: "سياسي"
    },
    {
      id: 2,
      title: "تقنيات حديثة لمكافحة الأمراض المزمنة",
      excerpt: "اكتشاف علاج جديد لمرض السكري من النوع الثاني يحسن حياة الملايين حول العالم.",
      author: "نورا حسن",
      date: "٥ فبراير ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-tablet_23-2149611236.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_authors_boost",
      category: "صحي"
    },
    {
      id: 3,
      title: "الزراعة المستدامة: حل لمشاكل الأمن الغذائي",
      excerpt: "مبادرات زراعية جديدة تعتمد على التقنيات الحديثة لمضاعفة الإنتاج وتقليل استهلاك المياه.",
      author: "خالد محمد",
      date: "٢٥ يناير ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/close-up-man-using-tablet-field_23-2148233377.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_authors_boost",
      category: "زراعي"
    },
    {
      id: 4,
      title: "تطورات جديدة في المشهد السياسي العالمي",
      excerpt: "تحركات دبلوماسية جديدة تسلط الضوء على التغيرات في العلاقات الدولية.",
      author: "مها الجوهري",
      date: "١٨ مارس ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/people_1122-1878.jpg",
      category: "سياسي"
    },
    {
      id: 5,
      title: "الاستهلاك المستدام: كيف يمكننا الحد من التلوث؟",
      excerpt: "دراسات جديدة توضح أثر الاستهلاك المفرط على البيئة والحلول الممكنة.",
      author: "سعيد عمر",
      date: "٢ مارس ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-13962.jpg",
      category: "سياسي"
    },
    {
      id: 6,
      title: "الصيام المتقطع: فوائده الصحية والمخاطر المحتملة",
      excerpt: "خبراء الصحة يناقشون تأثير الصيام المتقطع على الوزن وصحة القلب.",
      author: "ريم عبدالله",
      date: "٢٢ فبراير ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/dates-almonds-nuts-white-plates-with-lemony-tea-ginger-citrus-fruits-pencil-notebook-flat-lay-white-table_176474-5443.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_authors_boost",
      category: "صحي"
    },
    {
      id: 7,
      title: "الزراعة الذكية: كيف تساهم التكنولوجيا في تحسين المحاصيل؟",
      excerpt: "تقنيات الذكاء الاصطناعي تدخل عالم الزراعة لزيادة الإنتاجية وتحسين الجودة.",
      author: "هشام يوسف",
      date: "١٤ فبراير ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/farmer-with-tablet-close-up_23-2148579698.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_authors_boost",
      category: "زراعي"
    },
    {
      id: 8,
      title: "الأزمة العالمية وتأثيرها على الاقتصاد المحلي",
      excerpt: "تقرير شامل حول تداعيات الأزمة الاقتصادية وتأثيرها على الأسواق العربية.",
      author: "ليلى أحمد",
      date: "٧ مارس ٢٠٢٤",
      image: "https://img.freepik.com/free-photo/money-global-economy_23-2148525342.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_authors_boost",
      category: "سياسي"
    }
  ];
  

 // حالة التصنيف المختار
 const [activeCategory, setActiveCategory] = useState('الكل');
  
 // تصفية المقالات حسب التصنيف
 const filteredArticles =
 activeCategory === "الكل"
   ? allArticles
   : allArticles.filter((article) => article.category === activeCategory);


  return (
    <>
      {/* Hero Section */}
      
      <div className="relative w-full h-100 flex items-center text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/6271585/6271585-sd_960_506_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(40, 36, 41, 0.7)',
          }}
        ></div>

        {/* Content - Aligned to the Right */}
        <div className="relative z-10 max-w-4xl ml-auto px-10 lg:px-20 text-right"  style={{
            marginTop: '150px',
          }}>
          <h1 className="text-lg md:text-xl font-bold">
        اقرأ أهم وأبرز الأخبار والتقارير العربية اللعالمية  في الشأن السياسي و الزراعي والصحي والمزيد حصرياً عبر موقعنا الالكتروني <span className='text-[#51a31d]'>خبرني.</span> </h1>

</div>
</div>
      <div className='w-full h-1 bg-[#51a31d]'></div>


        {/* شريط التصنيفات */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8">
            <h1 className="text-3xl font-bold text-[#383838]">مقالات</h1>
            
            {/* تصنيفات في المنتصف */}
            <div className="flex space-x-reverse gap-x-6 justify-center flex-1">
              {["الكل", "سياسي", "صحي", "زراعي"].map((category) => (
                <button
                  key={category}
                  className={`py-2 text-lg font-bold ${
                    activeCategory === category ? "text-[#51a31d]" : "text-[#383838]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* شريط البحث */}
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="rounded-md border border-gray-200 p-3 pr-3 w-56 text-sm focus:outline-none"
              />
              <button className="absolute left-0 top-0 bg-[#383838] text-white h-full w-10 flex items-center justify-center rounded-l-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة المقالات */}
      <div className="container mx-auto px-4 py-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
              <div className="overflow-hidden rounded-lg mb-3 relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <h2 className="text-lg font-bold text-[#383838]  mb-1">{article.title}</h2>
              <div className="text-xs text-gray-500 mb-2">
                بواسطة {article.author} - {article.date}
              </div>
              <p className="text-sm">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
