import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LiveNewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStream, setSelectedStream] = useState(null);

  const liveStreams = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/bNyUyrR0PHo", // الجزيرة
      title: "🔴 بث مباشر | قناة الجزيرة الإخبارية",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/zq6ohxTDNZY", // العربية
      title: "🔴 بث مباشر | قناة العربية الحدث",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/oY976rzO-EI", // سكاي نيوز
      title: "🔴 بث مباشر | Sky News - سكاي نيوز عربية",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/VuYzy8IuT0Y", // فرانس 24 عربي
      title: "🔴 بث مباشر | فرانس 24 - الأخبار بالعربية",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/e2RgSa1Wt5o", //قناة العربي
      title: "🔴 بث مباشر | قناة العربي- الأخبار بالعربية",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/hC9fwQXSUCk", // بي بي سي عربي مباشر | BBC News Arabic Live | البث الحيي
      title: "🔴 بي بي سي عربي مباشر | BBC News Arabic Live | البث الحي",
    },
  ];

  const visibleSlides = 3;
  const totalSlides = liveStreams.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides - visibleSlides ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - visibleSlides
    );
  };

  const handleStreamSelect = (stream) => {
    setSelectedStream(stream);
  };

  const handleBackToSlider = () => {
    setSelectedStream(null);
  };

  if (selectedStream) {
    return (
      <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
        <div className="text-[#383838] px-6 pt-6" dir="rtl">
          <div className="flex items-center mb-8">
            <div className="h-6 w-1.5 bg-[#51a31d] rounded-full ml-3"></div>
            <h2 className="text-2xl font-bold text-black">شاهد ايضا :</h2>
            <button
              onClick={handleBackToSlider}
              className="mr-auto bg-[#51a31d] text-white px-4 py-2 rounded-lg hover:bg-[#3d7d14] transition-all"
            >
              العودة إلى القائمة
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-black text-2xl font-bold mb-4 text-center">
              {selectedStream.title}
            </h2>
            <iframe
              className="w-full h-96 rounded-lg"
              src={`${selectedStream.url}?autoplay=1`}
              title={selectedStream.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
      <div className="text-[#383838] px-6 pt-6" dir="rtl">
        <div className="flex items-center mb-8">
          <div className="h-6 w-1.5 bg-[#51a31d] rounded-full ml-3"></div>
          <h2 className="text-2xl font-bold text-black">شاهد ايضا :</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * 25}%)` }}
            >
              {liveStreams.map((stream) => (
                <div key={stream.id} className="w-1/4 flex-shrink-0 px-2 pb-4">
                  <div 
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                    onClick={() => handleStreamSelect(stream)}
                  >
                    <iframe
                      src={`${stream.url}?autoplay=1&mute=1`}
                      title={stream.title}
                      className="w-full aspect-video rounded-t-lg"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end group-hover:from-black/90 transition-all">
                      <p className="text-white p-4 text-sm font-medium line-clamp-3 group-hover:line-clamp-none transition-all">
                        {stream.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* أزرار التنقل */}
          <button
            onClick={handlePrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-md hover:bg-[#51a31d] hover:text-white transition-all z-10"
            aria-label="السابق"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 shadow-md hover:bg-[#51a31d] hover:text-white transition-all z-10"
            aria-label="التالي"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        {/* مؤشرات */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides - visibleSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-[#51a31d] w-6" : "bg-gray-300"
              }`}
              aria-label={`انتقل إلى الشريحة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveNewsSlider;