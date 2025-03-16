import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Newspaper, User } from "lucide-react";
import{ useEffect, useState } from "react";
import axios from "axios";


const newsSlides = [
  {
    title: "The Unchecked Authority of Greg Abbott",
    description:
      "The Texas governor is an unlikely MAGA crusader, but he has turned the Lone Star State into ground zero for President Trump’s radical mass-deportation plans.",
    image: "https://source.unsplash.com/1200x600/?politics",
    author: "Jonathan Blitzer",
  },
  {
    title: "The Future of AI in Journalism",
    description:
      "AI is rapidly transforming journalism, raising questions about ethics, accuracy, and the future of human reporters.",
    image: "https://source.unsplash.com/1200x600/?technology",
    author: "Sarah Johnson",
  },
];

const articles = [
  {
    title: "'Eephus' Is as Surprising as the Baseball Pitch It's Named For",
    description:
      "In Carson Lund’s stylistically innovative directorial debut, two amateur teams say farewell to a beloved field—but will their game yield a result?",
    image: "https://source.unsplash.com/400x400/?baseball",
    author: "Richard Brody",
  },
  {
    title: "How 'Severance' Makes a Fetish of the Office",
    description:
      "In its second season, the show continues to indict the corporate workplace while secretly longing for it.",
    image: "https://source.unsplash.com/400x400/?office",
    author: "Katy Waldman",
  },
  {
    title: "The Resounding Silences of 'On Becoming a Guinea Fowl'",
    description:
      "In Rungano Nyoni’s drama, a death in a middle-class Zambian family unearths a history of sexual violence.",
    image: "https://source.unsplash.com/400x400/?movie",
    author: "Justin Chang",
  },
];

const ArgSection = () => {

    const[newsSlide,setnewsSlide]=useState([]);
  useEffect(()=>{
    
    async function getNewsSlide(){
      
      const response=await axios.get("http://localhost:5000/api/home-articles/arg");
      console.log(response.data.data);
  setnewsSlide(response.data.data)
  
  }

getNewsSlide();

},[])
  
  return (
    <>
    
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3">
          <Newspaper className="text-[#383838] w-8 h-8" /> اخبار بالزراعة
        </h2>
        
        {/* Slideshow */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
        >
          {newsSlide.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div
                className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1731964877414-217cdc9b5b37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
              >
                <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
                  <h3 className="text-3xl font-bold">{slide.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
                  <span className="mt-6 text-sm flex items-center gap-2 justify-center">
                    <User className="w-5 h-5" /> {slide.author}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {newsSlide.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1731964877414-217cdc9b5b37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={article.title}
                className="w-full h-52 object-cover rounded-lg shadow-md"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-extrabold text-xl text-[#383838]">{article.title}</h4>
                <p className="text-md mt-3 text-gray-700 flex-grow leading-relaxed">{article.description}</p>
                <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 justify-center">
                  <User className="w-5 h-5" /> {article.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArgSection;
