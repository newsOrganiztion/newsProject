// import React, { useState } from "react";
// import { 
//   Search, 
//   Clock, 
//   TrendingUp, 
//   Bookmark, 
//   ChevronRight,
//   Globe,
//   AlertCircle,
//   FilmIcon,
//   DollarSign,
//   Users,
//   Zap,
//   Menu
// } from "lucide-react";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const categories = [
//     { name: "World", icon: <Globe size={16} />, color: "#7585ff" },
//     { name: "Politics", icon: <Users size={16} />, color: "#ff5757" },
//     { name: "Business", icon: <DollarSign size={16} />, color: "#47c279" },
//     { name: "Technology", icon: <Zap size={16} />, color: "#ffa836" },
//     { name: "Entertainment", icon: <FilmIcon size={16} />, color: "#c044ff" },
//     { name: "Breaking", icon: <AlertCircle size={16} />, color: "#ff3a3a" }
//   ];
  
//   const breakingNews = [
//     "Supreme Court rules on landmark climate change case",
//     "Major tech company announces revolutionary AI breakthrough",
//     "Global economic summit concludes with new trade agreements"
//   ];
  
//   // Trending topics
//   const trendingTopics = ["Climate Change", "Election 2025", "Tech Stocks", "Healthcare Reform"];
  
//   return (
//     <div className="bg-[#f9f9fb] text-[#383838]">
//       {/* Top Breaking News Ticker */}
//       <div className="bg-[#383838] text-white py-2 px-4 overflow-hidden">
//         <div className="flex items-center max-w-6xl mx-auto">
//           <div className="flex items-center bg-red-600 px-3 py-1 rounded-full mr-4">
//             <AlertCircle size={14} className="mr-1" />
//             <span className="text-sm font-bold">BREAKING</span>
//           </div>
//           <div className="overflow-hidden relative w-full">
//             <div className="animate-marquee whitespace-nowrap">
//               {breakingNews.map((news, index) => (
//                 <span key={index} className="mx-4 text-sm inline-block">
//                   {news}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Navigation Bar */}
//       <header className="bg-white shadow-sm sticky top-0 z-20">
//         <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold mr-8">
//               <span className="text-[#7585ff]">Next</span>News
//             </h1>
//             <nav className="hidden md:flex space-x-6">
//               {categories.map((category, index) => (
//                 <a 
//                   key={index} 
//                   href="#" 
//                   className="flex items-center text-sm font-medium hover:text-[#7585ff] transition-colors"
//                   style={{ color: index === 0 ? category.color : 'inherit' }}
//                 >
//                   {category.icon}
//                   <span className="ml-1">{category.name}</span>
//                 </a>
//               ))}
//             </nav>
//             <button className="md:hidden">
//               <Menu size={24} />
//             </button>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search news..."
//                 className="bg-gray-100 py-2 pl-9 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7585ff] w-40 md:w-64"
//               />
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>
//             <button className="bg-[#7585ff] text-white py-2 px-4 rounded-full text-sm font-medium hidden md:block hover:bg-[#7585ff]/90 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </header>
      
//       {/* Main Hero Content */}
//       <div className="max-w-6xl mx-auto pt-8 pb-12 px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Featured Article */}
//           <div className="lg:col-span-2">
//             <div className="relative rounded-xl overflow-hidden shadow-lg h-96 group">
//               <img 
//                 src="https://source.unsplash.com/1200x800/?news,politics" 
//                 alt="Featured News" 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <div className="flex items-center mb-3">
//                   <span className="bg-[#7585ff] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">POLITICS</span>
//                   <span className="flex items-center text-xs text-white/80">
//                     <Clock size={12} className="mr-1" />
//                     2 hours ago
//                   </span>
//                 </div>
//                 <h2 className="text-3xl font-bold mb-3 leading-tight">
//                   New legislation aims to address climate change with unprecedented investment
//                 </h2>
//                 <p className="text-white/90 mb-4 text-sm md:text-base line-clamp-2">
//                   Lawmakers unveiled a comprehensive plan today that would allocate billions toward renewable energy infrastructure and emissions reduction efforts.
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <img 
//                       src="https://source.unsplash.com/100x100/?portrait" 
//                       alt="Author" 
//                       className="w-8 h-8 rounded-full mr-2 object-cover"
//                     />
//                     <span className="text-sm">James Wilson</span>
//                   </div>
//                   <button className="flex items-center text-sm font-medium text-white hover:text-[#7585ff] transition-colors">
//                     Read More <ChevronRight size={16} className="ml-1" />
//                   </button>
//                 </div>
//               </div>
//               <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#383838] p-2 rounded-full transition-all">
//                 <Bookmark size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* Trending & Quick Links */}
//           <div className="flex flex-col space-y-8">
//             {/* Trending Topics */}
//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <div className="flex items-center mb-4">
//                 <TrendingUp size={20} className="text-[#7585ff] mr-2" />
//                 <h3 className="text-xl font-bold">Trending Now</h3>
//               </div>
//               <div className="space-y-4">
//                 {trendingTopics.map((topic, index) => (
//                   <div key={index} className="flex items-center">
//                     <span className="bg-[#f9f9fb] text-[#7585ff] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
//                       {index + 1}
//                     </span>
//                     <span className="font-medium hover:text-[#7585ff] cursor-pointer transition-colors">
//                       {topic}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="bg-[#7585ff]/10 rounded-xl p-6">
//               <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Get the latest news delivered directly to your inbox.
//               </p>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg mb-3 border border-gray-300 focus:outline-none focus:border-[#7585ff]"
//               />
//               <button className="bg-[#7585ff] text-white w-full py-3 rounded-lg font-medium transition-all hover:bg-[#7585ff]/90">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Category Pills */}
//         <div className="mt-10 flex flex-wrap gap-2">
//           {["Politics", "Economy", "Technology", "Science", "Health", "Sports", "Entertainment", "World"].map((category, index) => (
//             <a 
//               key={index} 
//               href="#" 
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 index === 0 ? 'bg-[#7585ff] text-white' : 'bg-white text-[#383838] hover:bg-gray-100'
//               }`}
//             >
//               {category}
//             </a>
//           ))}
//           <a href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#383838] hover:bg-gray-100 flex items-center">
//             More <ChevronRight size={14} className="ml-1" />
//           </a>
//         </div>
//       </div>
      
//       {/* CSS for the marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;
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
  const [searchQuery, setSearchQuery] = useState("");
  
  const breakingNews = [
    "قرب الوصول الى اتفاق وقف اطلاق النار بين غزة واسرائيل",
    "اوكرنيا بدأت بالخضوع لروسيا",
    "ظهور انواع جديدة من النباتات في جزر القرم"
  ];
  
  // Trending topics
  const trendingTopics = ["سياسي", "صحي", "زراعي"];
  
  return (
    <div className="bg-[#f9f9fb] text-[#383838]">
      {/* Top Breaking News Ticker */}
      <div className="bg-[#383838] text-white py-2 px-4 overflow-hidden">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex items-center bg-red-600 px-3 py-1 rounded-full mr-4">
            <AlertCircle size={14} className="mr-1" />
            <span className="text-sm font-bold">BREAKING</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="animate-marquee whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <span key={index} className="mx-4 text-sm inline-block">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto pt-8 pb-12 px-4">
        {/* Header with Logo and Search */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-[#7585ff]">ال</span>يقين
          </h1>
          
          <div className="flex items-center space-x-4">
            {/* <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="bg-white py-2 pl-9 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7585ff] w-40 md:w-64 border border-gray-200"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div> */}
            <button className="bg-[#7585ff] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#7585ff]/90 transition-colors">
             اشترك الان
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-96 group">
              <img 
                src="https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
                alt="Featured News" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-3">
                  <span className="bg-[#7585ff] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">سياسة</span>
                  <span className="flex items-center text-xs text-white/80">
                    <Clock size={12} className="mr-1" />
                    قبل ساعتين
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-3 leading-tight">
                  حماس تقف بوجه اقوى دول العالم وتتحكم بها
                </h2>
                <p className="text-white/90 mb-4 text-sm md:text-base line-clamp-2">
                 غزة بعد الاتفاق.. حماس وإسرائيل تردان على مقترح الوسطاء والاحتلال يصعد بالضفة

                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src="https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
                      alt="Author" 
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    <span className="text-sm">صالح الجعفراوي</span>
                  </div>
                  <button className="flex items-center text-sm font-medium text-white hover:text-[#7585ff] transition-colors">
                   المزيد <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#383838] p-2 rounded-full transition-all">
                <Bookmark size={16} />
              </button>
            </div>
          </div>
          
          {/* Trending & Quick Links */}
          <div className="flex flex-col space-y-8">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <TrendingUp size={20} className="text-[#7585ff] mr-2" />
                <h3 className="text-xl font-bold">الأقسام</h3>
              </div>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-[#f9f9fb] text-[#7585ff] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span className="font-medium hover:text-[#7585ff] cursor-pointer transition-colors">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-[#7585ff]/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest news delivered directly to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg mb-3 border border-gray-300 focus:outline-none focus:border-[#7585ff]"
              />
              <button className="bg-[#7585ff] text-white w-full py-3 rounded-lg font-medium transition-all hover:bg-[#7585ff]/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Category Pills */}
        {/* <div className="mt-10 flex flex-wrap gap-2">
          {["Politics", "Economy", "Technology", "Science", "Health", "Sports", "Entertainment", "World"].map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 ? 'bg-[#7585ff] text-white' : 'bg-white text-[#383838] hover:bg-gray-100'
              }`}
            >
              {category}
            </a>
          ))}
          <a href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#383838] hover:bg-gray-100 flex items-center">
            More <ChevronRight size={14} className="ml-1" />
          </a>
        </div> */}
      </div>
      
      {/* CSS for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;