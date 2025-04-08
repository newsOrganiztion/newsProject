import React, { useState,useEffect } from "react";
import { 
  Search, 
  Clock, 
  TrendingUp, 
  Bookmark, 
  ChevronRight,
  AlertCircle
} from "lucide-react";
import axios from "axios";

const HeroSection = () => {
    const [breakingNews, setBreakingNews] = useState([]);
    const [gazaNews, setGazaNews] = useState([]);

    useEffect(() => {
      const fetchBreakingNews = async () => {
        try {
          const response = await axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://www.aljazeera.net/aljazeerarss",
            {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              responseType: "json",
            }
          );
    
          // ✅ معالجة النص بطريقة آمنة لتجنب مشاكل الترميز
          const newsData = response.data.items.map(article => {
            try {
              return decodeURIComponent(article.title); // ✅ فك الترميز إن كان ممكنًا
            } catch (e) {
              console.log(e);
              return article.title; // ❌ إذا فشل فك الترميز، نعيد العنوان كما هو
            }
          });
    
          setBreakingNews(newsData);
        } catch (error) {
          console.error("❌ خطأ في جلب الأخبار:", error);
        }
      };
    
      fetchBreakingNews();
    }, []);

useEffect(() => {
  const dummyArticles = [
    {
      title: "الاحتلال يواصل عدوانه على قطاع غزة",
      author: "وكالات",
      date: "5 أبريل 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvfsiizrAyJd5cOAZC_vi1y9K9cEwCz0ZOg&s",
      isFeatured: true,
    },
    {
      title: "أضرار جسيمة في الأحياء السكنية وسط غزة",
      author: "الجزيرة",
      date: "5 أبريل 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh60k7hp8rNflV3LooiVoip-72ot8plL28tA&s",
      isFeatured: false,
    },
    {
      title: "المنظمات الدولية تحذر من الوضع الإنساني في غزة",
      author: "رويترز",
      date: "4 أبريل 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcExUiTcZFfA9t2fgYbErSz1fSzef7mR9QtQ&s",
      isFeatured: false,
    },
    {
      title: "مظاهرات غاضبة في الضفة الغربية تنديدًا بالعدوان",
      author: "مراسلنا في رام الله",
      date: "5 أبريل 2025",
      image: "https://img.freepik.com/free-photo/arab-people-demonstrating-together_23-2151582658.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_hybrid&w=740", // نفس الصورة أو أخرى لو عندك
    },
    // {
    //   title: "انقطاع الكهرباء والاتصالات في مناطق واسعة من غزة",
    //   author: "وكالات",
    //   date: "5 أبريل 2025",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ugtQ06xy8ClrEbPBCvLJ7N-I-HsoPUxS4w&s", 
    // }
  ];
  setGazaNews(dummyArticles);
}, []);


  const articles = [
    {
      id: 1,
      category: 'سياسة',
      date: '7 أكتوبر 2023',
      title: 'الجمهور الفلسطيني ينتفض لوقف العدوان على غزة',
      description: 'في ظل التصعيد المستمر والعدوان على غزة، يخرج الفلسطينيون في مظاهرات حاشدة نصرةً للمدنيين ودعماً للمقاومة. يهتف الشعب في الشوارع رفضًا للعدوان، مطالبين بوقف القصف ورفع الحصار، مؤكدين أن صوتهم سيظل عاليًا في وجه الظلم حتى تحقيق الحرية والعدالة.',
      video: "/video/vv.mp4",
      largeCard: true
    },
    {
      id: 2,
      category: 'صحة',
      date: '28 أكتوبر 2025',
      title: 'توصيات لقاح الإنفلونزا لموسم 2025-2026',
      description:'اختبار لقاح الإنفلونزا المرشح المعتمد على mRNA. في يوليو 2022، أعلنت شركة فايزر عن نتائج سريرية إيجابية في تجربتها للمرحلة الثانية للقاح الإنفلونزا mRNA المرشح.',
      image: 'https://images.pexels.com/photos/8413152/pexels-photo-8413152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 3,
      category: 'صحة',
      date:'25 أكتوبر 2025',
      title: 'تحديثات لقاحات كوفيد-19',
      description:'ونبدأ بجواب السؤال "ما أفضل لقاح لفيروس كورونا المستجد؟"',
      image: 'https://images.pexels.com/photos/5994837/pexels-photo-5994837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 4,
      category: 'زراعة',
      date:'21 أكتوبر 2016',
      description:'',
      title: 'إقرار استراتيجية المراعي 2024-2030',
      image: 'https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Smart phone articles
  // const smartphoneArticles = [
  //   {
  //     title: "أهم الأسباب التي دفعت مايكروسوفت لإيقاف ويندوز فون",
  //     author: "سارة بلوغينج تيم",
  //     date: "٠٥ مارس، ٢٠٢٠",
  //     image: "/placeholder-smartphone.jpg",
  //     isFeatured: true
  //   },
  //   {
  //     title: "نصائح الأمان لحماية بياناتك على جهازك المحمول",
  //     date: "٠٥ مارس، ٢٠٢٠",
  //     image: "/placeholder-smartphone-thumb.jpg"
  //   },
  //   {
  //     title: "تحسين أداء بطارية هاتفك الذكي",
  //     date: "٠٥ مارس، ٢٠٢٠",
  //     image: "/placeholder-smartphone-thumb.jpg"
  //   },
  //   {
  //     title: "تطبيقات المراسلة الأنسب لملفك الشخصي",
  //     date: "٠٥ مارس، ٢٠٢٠",
  //     image: "/placeholder-smartphone-thumb.jpg"
  //   }
  // ];

  
  // Trending topics
  return (
    <div className="bg-gray-50 font-sans" dir="rtl">
      {/* Breaking News Banner */}
      <div className="bg-black text-white py-2 px-4 overflow-hidden">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex items-center bg-[#51a31d] px-3 py-1 rounded-full mr-4">
            <AlertCircle size={14} className="mr-1" />
            <span className="text-sm font-bold">BREAKING</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="whitespace-nowrap animate-marquee">
              {breakingNews.length > 0 ? (
                breakingNews.map((news, index) => (
                  <span key={index} className="mx-4 text-sm inline-block">{news}</span>
                ))
              ) : (
                <span className="text-sm">جارٍ تحميل الأخبار العاجلة...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


             {/* Gaza News Section */}
<div className="bg-white rounded-lg shadow-sm overflow-hidden">
  <h3 className="text-lg font-bold bg-black text-white px-4 py-2 mb-4">أخبار غزة</h3>
  <div className="p-4">
    {/* Featured Article */}
    {gazaNews.filter(article => article.isFeatured).map((article, i) => (
      <div key={i} className="mb-6 group">
        <div className="relative overflow-hidden h-48 rounded-lg mb-3">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute top-0 right-0 m-2">
            <span className="bg-green-600 text-white py-1 px-2 text-xs font-bold rounded">سياسة</span>
          </div>
        </div>
        <h3 className="font-bold text-base mb-1 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <div className="text-xs text-gray-500 flex items-center">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
      </div>
    ))}

    {/* Other Articles */}
    {gazaNews.filter(article => !article.isFeatured).map((article, i) => (
      <div key={i} className="border-b border-gray-100 pb-3 mb-3 flex gap-3 group last:border-0 last:mb-0 last:pb-0">
        <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="font-bold text-sm mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="text-xs text-gray-400">{article.date}</div>
        </div>
      </div>
    ))}
              </div>
            </div>
          
          {/* Main Articles Section (3 columns) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {articles.map((article, index) => (
                <div 
                  key={article.id} 
                  className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 h-80
                    ${article.largeCard ? "md:col-span-1 lg:col-span-2" : ""} 
                    ${index === 1 ? "lg:col-span-1" : ""}   
                    ${index === 2 ? "lg:col-span-2" : ""}   
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

                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className={`inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-md ${
                      article.category === "صحة" ? "bg-green-600" : 
                      article.category === "سياسة" ? "bg-red-600" : 
                      "bg-blue-600"
                    }`}>
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{article.title}</h3>
                    <p className="text-xs mb-3 opacity-80">{article.date}</p>

                    {/* Description shows only on hover */}
                    <p className="text-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Social Links */}
      {/* <div className="bg-gray-100 py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { name: "تاريخنا", className: "bg-black text-white" },
              { name: "فيس", followers: "٢.٤م", className: "bg-green-600 text-white" },
              { name: "تويتر", followers: "٨٣٥ك", className: "bg-green-600 text-white" },
              { name: "يوتيوب", followers: "٣.٢م", className: "bg-green-600 text-white" },
              { name: "لينكدإن", followers: "٧٥٠", className: "bg-green-600 text-white" },
              { name: "في كي", followers: "١.٦م", className: "bg-green-600 text-white" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`${item.className} rounded-md text-center py-2 transition-transform hover:scale-105`}
              >
                <div className="text-sm font-bold">{item.name}</div>
                {item.followers && <div className="text-xs">{item.followers}</div>}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ✅ كود تحريك الأخبار العاجلة */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;


 {/* ✅ شريط الأخبار العاجلة */}
      {/* <div className="bg-black text-white py-2 px-4 overflow-hidden">
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
      </div> */}


        // const breakingNews = [
  //   "قرب الوصول الى اتفاق وقف اطلاق النار بين غزة واسرائيل",
  //   "اوكرنيا بدأت بالخضوع لروسيا",
  //   "ظهور انواع جديدة من النباتات في جزر القرم",
  //   "  الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
  //   "الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
   
  // ];


  // Sample data for breaking news
// const breakingNews = [
//   "توصيات لقاح الإنفلونزا لموسم 2025-2026",
//   "الجمهور الفلسطيني ينتفض لوقف العدوان على غزة",
//   "إقرار استراتيجية المراعي 2024-2030",
//   "تحديثات لقاحات كوفيد-19"
// ];