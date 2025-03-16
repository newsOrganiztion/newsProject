// import React from 'react'

// function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home 
import React from 'react';

const BlogLayout = () => {
  const articles = [
    {
      id: 1,
      category: 'Lifestyle',
      title: 'The golden rules you need to know for a positive life',
      author: 'AMANDA',
      date: '24 JULY, 2025',
      image: '/api/placeholder/600/400',
      size: 'large'
    },
    {
      id: 2,
      category: 'Travel',
      title: '5 places you should see',
      author: 'AMANDA',
      date: '24 JULY, 2025',
      image: '/api/placeholder/600/400',
      size: 'medium'
    },
    {
      id: 3,
      category: 'Travel',
      title: 'Separate your place with exotic hotels',
      author: 'AMANDA',
      date: '24 JULY, 2025',
      image: '/api/placeholder/300/200',
      size: 'small'
    },
    {
      id: 4,
      category: 'Travel',
      title: 'What you need to know for child health',
      author: 'AMANDA',
      date: '24 JULY, 2025',
      image: '/api/placeholder/300/200',
      size: 'small'
    },
    {
      id: 5,
      category: 'Lifestyle',
      title: 'The rules you need to know for a happy union',
      author: 'JESSICA',
      date: '03 JULY, 2025',
      image: '/api/placeholder/300/400',
      size: 'medium'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 font-sans">
      {/* Navigation */}
      <nav className="py-6">
        <ul className="flex justify-center space-x-8 font-medium">
          <li><a href="#" className="hover:text-gray-500">Home</a></li>
          <li><a href="#" className="hover:text-gray-500 flex items-center">Categories <span className="ml-1">▼</span></a></li>
          <li><a href="#" className="hover:text-gray-500 flex items-center">Features <span className="ml-1">▼</span></a></li>
          <li><a href="#" className="hover:text-gray-500">Fashion</a></li>
          <li><a href="#" className="hover:text-gray-500">Food</a></li>
          <li><a href="#" className="text-teal-500 hover:text-teal-600">Lifestyle</a></li>
          <li><a href="#" className="hover:text-gray-500">Travel</a></li>
          <li><a href="#" className="hover:text-gray-500 flex items-center">
            <span className="mr-1">◉</span> Vlogs
          </a></li>
          <li><a href="#" className="hover:text-gray-500">Health</a></li>
        </ul>
      </nav>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Large Article */}
        <div className="md:col-span-1 relative h-96 overflow-hidden rounded-lg">
          <img 
            src={articles[0].image} 
            alt={articles[0].title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <span className="bg-black/80 text-white px-3 py-1 text-xs inline-block mb-3 w-fit">
              {articles[0].category}
            </span>
            <h2 className="text-white text-2xl font-bold mb-2">{articles[0].title}</h2>
            <div className="text-gray-300 text-sm flex space-x-2">
              <span>{articles[0].date}</span>
              <span>/</span>
              <span>BY {articles[0].author}</span>
            </div>
          </div>
        </div>

        {/* Medium Article */}
        <div className="md:col-span-2">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src={articles[1].image} 
              alt={articles[1].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <span className="bg-black/80 text-white px-3 py-1 text-xs inline-block mb-3 w-fit">
                {articles[1].category}
              </span>
              <h2 className="text-white text-2xl font-bold mb-2">{articles[1].title}</h2>
              <div className="text-gray-300 text-sm flex space-x-2">
                <span>{articles[1].date}</span>
                <span>/</span>
                <span>BY {articles[1].author}</span>
              </div>
            </div>
          </div>

          {/* Small Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {articles.slice(2, 4).map(article => (
              <div key={article.id} className="relative h-48 overflow-hidden rounded-lg">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <span className="bg-black/80 text-white px-2 py-1 text-xs inline-block mb-2 w-fit">
                    {article.category}
                  </span>
                  <h2 className="text-white text-lg font-bold">{article.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Article */}
        <div className="md:col-span-3 md:flex mt-4">
          <div className="md:w-1/3 relative h-96 overflow-hidden rounded-lg">
            <img 
              src={articles[4].image} 
              alt={articles[4].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <span className="bg-black/80 text-white px-3 py-1 text-xs inline-block mb-3 w-fit">
                {articles[4].category}
              </span>
              <h2 className="text-white text-2xl font-bold mb-2">{articles[4].title}</h2>
              <div className="text-gray-300 text-sm flex space-x-2">
                <span>{articles[4].date}</span>
                <span>/</span>
                <span>BY {articles[4].author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
