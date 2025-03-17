// import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VideoSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const videos = [
  //   {
  //     id: 1,
  //     url: "https://www.youtube.com/embed/cvAcVjE39a4",
  //     title: "القوات الإسرائيلية تعتقل وتجرد أطفالاً في الضفة الغربية المحتلة",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  //     title: "ترامب سيتحدث مع بوتين يوم الثلاثاء حول أوكرانيا ووقف إطلاق النار",
  //   },
  //   {
  //     id: 3,
  //     url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  //     title: "حريق في نادٍ مقدوني غير قانوني يودي بحياة 59 شخصاً على الأقل",
  //   },
  //   {
  //     id: 4,
  //     url: "https://www.youtube.com/embed/5qap5aO4i9A",
  //     title: "الحوثيون يتعهدون بتصعيد الهجمات بعد ضربات أمريكية على اليمن",
  //   },
  //   {
  //     id: 5,
  //     url: "https://www.youtube.com/embed/K4TOrB7at0Y",
  //     title: "عمليات الترحيل الأمريكية إلى السلفادور ستكون لها 'تداعيات أكبر'",
  //   },
  //   {
  //     id: 6,
  //     url: "https://www.youtube.com/embed/e-ORhEE9VVg",
  //     title: "بعد تصريحات ماسك، ترامب يتوعد بالتحرك بعد العمليات الأخيرة",
  //   },
  // ];

  // const visibleSlides = 4; // عدد الفيديوهات الظاهرة
  // const totalSlides = videos.length;

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex < totalSlides - visibleSlides ? prevIndex + 1 : 0
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : totalSlides - visibleSlides
  //   );
  // };

  // return (
  //   <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
  //     <div className="text-[#383838] px-6 pt-6" dir="rtl">
  //       <div className="flex items-center mb-8">
  //         <div className="h-6 w-1.5 bg-[#51a31d] rounded-full ml-3"></div>
  //         <h2 className="text-2xl font-bold text-black">شاهد ايضا :</h2>
  //       </div>

  //       <div className="relative">
  //         <div className="overflow-hidden rounded-lg">
  //           <div
  //             className="flex transition-transform duration-500 ease-in-out"
  //             style={{ transform: `translateX(${currentIndex * 25}%)` }}
  //           >
  //             {videos.map((video) => (
  //               <div key={video.id} className="w-1/4 flex-shrink-0 px-2 pb-4">
  //                 <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
  //                   <iframe
  //                     src={video.url}
  //                     title={video.title}
  //                     className="w-full aspect-video rounded-t-lg"
  //                     allowFullScreen
  //                   ></iframe>
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end group-hover:from-black/90 transition-all">
  //                     <p className="text-white p-4 text-sm font-medium line-clamp-3 group-hover:line-clamp-none transition-all">
  //                       {video.title}
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>

  //         {/* أزرار التنقل */}
  //         <button
  //           onClick={handlePrev}
  //           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-md hover:bg-[#51a31d] hover:text-white transition-all z-10"
  //           aria-label="السابق"
  //         >
  //           <ChevronRight className="h-6 w-6" />
  //         </button>

  //         <button
  //           onClick={handleNext}
  //           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-md hover:bg-[#51a31d] hover:text-white transition-all z-10"
  //           aria-label="التالي"
  //         >
  //           <ChevronLeft className="h-6 w-6" />
  //         </button>
  //       </div>
        
  //       {/* مؤشرات التنقل */}
  //       <div className="flex justify-center mt-6 gap-2">
  //         {Array.from({ length: totalSlides - visibleSlides + 1 }).map((_, index) => (
  //           <button
  //             key={index}
  //             onClick={() => setCurrentIndex(index)}
  //             className={`w-2 h-2 rounded-full transition-all ${
  //               currentIndex === index ? "bg-[#51a31d] w-6" : "bg-gray-300"
  //             }`}
  //             aria-label={`انتقل إلى الشريحة ${index + 1}`}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default VideoSlider;