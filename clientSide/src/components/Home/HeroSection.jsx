import React, { useState } from "react";
import { 
  Search, 
  Clock, 
  TrendingUp, 
  Bookmark, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

const HeroSection = () => {


  const articles = [
    {
      id: 1,
      category: 'سياسة',
      date: 'Oct 7, 2023',
      title: 'الجمهور الفلسطيني ينتفض لوقف العدوان على غزة',
      description: 'في ظل التصعيد المستمر والعدوان على غزة، يخرج الفلسطينيون في مظاهرات حاشدة نصرةً للمدنيين ودعماً للمقاومة. يهتف الشعب في الشوارع رفضًا للعدوان، مطالبين بوقف القصف ورفع الحصار، مؤكدين أن صوتهم سيظل عاليًا في وجه الظلم حتى تحقيق الحرية والعدالة.',
      video: "/video/vid.mp4",
      largeCard: true
    },
    {
      id: 2,
      category: 'صحة',
      date: 'Oct 28, 2025',
      title: 'توصيات لقاح الإنفلونزا لموسم 2025-2026',
      description:'اختبار لقاح الإنفلونزا المرشح المعتمد على mRNA. في يوليو 2022، أعلنت شركة فايزر عن نتائج سريرية إيجابية في تجربتها للمرحلة الثانية للقاح الإنفلونزا mRNA المرشح.',
      image: 'https://images.pexels.com/photos/8413152/pexels-photo-8413152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 3,
      category: 'صحة',
      date: 'Oct 25, 2025',
      title: 'تحديثات لقاحات كوفيد-19',
      description:'ونبدأ بجواب السؤال "ما أفضل لقاح لفيروس كورونا المستجد؟"',
      image: 'https://images.pexels.com/photos/5994837/pexels-photo-5994837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 4,
      category: 'زراعة',
      date: 'Oct 21, 2016',
      description:'',
      title: 'إقرار استراتيجية المراعي 2024-2030',
      image: 'https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  
  const breakingNews = [
    "قرب الوصول الى اتفاق وقف اطلاق النار بين غزة واسرائيل",
    "اوكرنيا بدأت بالخضوع لروسيا",
    "ظهور انواع جديدة من النباتات في جزر القرم",
    "  الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
    "الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
   
  ];
  
  // Trending topics
  return (
    <div className=" text-[#383838] ">
      {/* ✅ شريط الأخبار العاجلة */}
      <div className="bg-black text-white py-2 px-4 overflow-hidden">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex items-center bg-[#51a31d] px-3 py-1 rounded-full mr-4">
            <AlertCircle size={14} className="mr-1" />
            <span className="text-sm font-bold">BREAKING</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="whitespace-nowrap animate-marquee">
              {breakingNews.map((news, index) => (
                <span key={index} className="mx-4 text-sm inline-block">{news}</span>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* ✅ المقالات الرئيسية */}
      <div className="container mx-auto px-2 py-4 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 m-15 mt-5 mb-5">
    {articles.map((article, index) => (
      <div 
        key={article.id} 
        className={`group relative overflow-hidden  transition-all duration-300 
          ${article.largeCard ? "md:col-span-1 lg:col-span-2 row-span-2 h-110" : ""} 
          ${index === 1 ? "lg:col-span-1 h-110" : ""}   
          ${index === 2 ? "lg:col-span-2 h-70" : ""}   
        `}
      >
        {/* ✅  الخلفية مع تأثير التحويم */}
        <div className="absolute inset-0 w-full h-full">
  {article.video ? (
    <video 
      src={article.video} 
      autoPlay 
      loop 
      muted 
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" 
         style={{ backgroundImage: `url(${article.image})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  )}
</div>

        {/* ✅ محتوى النص */}
        <div className="absolute bottom-0 p-4 text-white">
          <span className={`inline-block px-3 py-1 mb-2 text-xs font-semibold rounded ${article.largeCard ? "bg-black" : "bg-black"}`}>
            {article.category}
          </span>
          <p className="text-sm mb-2 opacity-80">{article.date}</p>
          <h3 className={`text-2xl font-bold mb-2`}>{article.title}</h3>

          {/* ✅ الوصف يظهر فقط عند التحويم */}
          <p className="text-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {article.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


    
      
      {/* ✅ كود تحريك الأخبار العاجلة */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
