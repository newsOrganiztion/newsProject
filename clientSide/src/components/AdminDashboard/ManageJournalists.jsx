import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JournalistsList = () => {
  const [journalists, setJournalists] = useState([]);
  const [filteredJournalists, setFilteredJournalists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedArticles, setExpandedArticles] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [articleFilter, setArticleFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/article/journalists');
        setJournalists(response.data);
        setFilteredJournalists(response.data);
        
        // Initialize expanded state
        const initialExpandedState = {};
        response.data.forEach(journalist => {
          initialExpandedState[journalist._id] = false;
        });
        setExpandedArticles(initialExpandedState);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Apply filters and search whenever the inputs change
  useEffect(() => {
    let results = journalists;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(journalist => 
        journalist.name.toLowerCase().includes(term) || 
        journalist.email.toLowerCase().includes(term)
      );
    }
    
    // Apply article count filter
    if (articleFilter !== 'all') {
      if (articleFilter === 'noArticles') {
        results = results.filter(journalist => journalist.articles.length === 0);
      } else if (articleFilter === 'fewArticles') {
        results = results.filter(journalist => journalist.articles.length >= 1 && journalist.articles.length <= 5);
      } else if (articleFilter === 'manyArticles') {
        results = results.filter(journalist => journalist.articles.length > 5);
      }
    }
    
    setFilteredJournalists(results);
  }, [searchTerm, articleFilter, journalists]);

  const toggleArticles = (journalistId) => {
    setExpandedArticles(prev => ({
      ...prev,
      [journalistId]: !prev[journalistId]
    }));
  };

  const handleDeleteAccount = (journalistId) => {
    // Here you would add the logic to delete the account
    console.log(`Delete account with ID: ${journalistId}`);
    // Example implementation:
    // axios.delete(`http://localhost:5000/api/journalists/${journalistId}`)
    //   .then(() => {
    //     setJournalists(journalists.filter(j => j._id !== journalistId));
    //   })
    //   .catch(err => setError(err.message));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setArticleFilter(e.target.value);
  };

  if (loading) {
    return <div className="text-center py-4" style={{ color: '#51a31d' }}>جاري التحميل...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">حدث خطأ: {error}</div>;
  }

  return (
    <div className="p-4" style={{ backgroundColor: '#f9f9fb' }}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-white rounded-lg py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#51a31d]" style={{ color: '#51a31d', textShadow: '1px 1px 3px rgba(0,0,0,0.15)' }}>إدارة الصحفيين</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium mb-1" style={{ color: '#7585ff' }}>بحث:</label>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a31d]"
              placeholder="ابحث بالاسم أو البريد الإلكتروني"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ direction: 'rtl' }}
            />
          </div>
          
          <div className="flex-1">
            <label htmlFor="filter" className="block text-sm font-medium mb-1" style={{ color: '#7585ff' }}>فلتر المقالات:</label>
            <select
              id="filter"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a31d]"
              value={articleFilter}
              onChange={handleFilterChange}
              style={{ direction: 'rtl' }}
            >
              <option value="all">جميع الصحفيين</option>
              <option value="noArticles">بدون مقالات</option>
              <option value="fewArticles">عدد قليل من المقالات (1-5)</option>
              <option value="manyArticles">عدد كبير من المقالات (أكثر من 5)</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Results counter */}
      <div className="text-center mb-4 font-semibold" style={{ color: '#7585ff' }}>
        تم العثور على {filteredJournalists.length} صحفي
      </div>
      
      <div className="flex flex-col items-center">
        {filteredJournalists.length === 0 ? (
          <div className="text-center py-8 text-gray-500">لا توجد نتائج مطابقة</div>
        ) : (
          filteredJournalists.map((journalist, index) => (
            <div 
              key={journalist._id} 
              className="mb-6 p-4 border rounded-lg shadow-md w-full max-w-2xl hover:shadow-lg transition-shadow duration-300" 
              style={{ backgroundColor: 'white', borderRight: '4px solid #51a31d' }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl font-semibold">
                  <span className="mr-2 font-bold" style={{ color: '#7585ff' }}>{index + 1}. </span>
                  {journalist.name}
                </h2>
                <button 
                  className="px-3 py-1 rounded-md text-white text-sm" 
                  style={{ backgroundColor: '#ff5757' }}
                  onClick={() => handleDeleteAccount(journalist._id)}
                >
                  حذف الحساب
                </button>
              </div>
              
              <p className="text-gray-600 text-sm">{journalist.email}</p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-md sm:text-lg font-medium" style={{ color: '#51a31d' }}>المقالات:</h3>
                <span className="text-sm text-gray-500">عدد المقالات: {journalist.articles.length}</span>
              </div>
              
              {/* Display first article or all articles if expanded */}
              {journalist.articles.length > 0 ? (
                journalist.articles.slice(0, expandedArticles[journalist._id] ? journalist.articles.length : 1).map((article) => (
                  <div key={article._id} className="mt-2 p-3" style={{ borderRight: '3px solid #7585ff', backgroundColor: '#f9f9fb', borderRadius: '8px' }}>
                    <h4 className="text-md sm:text-lg font-semibold">{article.title}</h4>
                    <p className="text-gray-700 text-sm">{article.description}</p>
                    <p className="text-xs sm:text-sm" style={{ color: '#51a31d' }}>
                      إعجابات: {article.likes} | مشاركات: {article.shares} | مشاهدات: {article.views}
                    </p>
                    <h5 className="mt-2 text-sm font-medium" style={{ color: '#7585ff' }}>التعليقات:</h5>
                    {article.comments && article.comments.length > 0 ? (
                      article.comments.map((comment) => (
                        <div key={comment._id} className="mt-2 p-2" style={{ borderRight: '2px solid #7585ff', backgroundColor: 'white', borderRadius: '4px' }}>
                          <p className="text-gray-700 text-sm">{comment.content}</p>
                          <p className="text-xs text-gray-500">بواسطة: {comment.userId && comment.userId.name}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-500 mt-1">لا توجد تعليقات</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 mt-2">لا توجد مقالات</p>
              )}
              
              {/* Show "Read More" button if there are more articles */}
              {journalist.articles.length > 1 && (
                <div className="mt-2">
                  <button 
                    className="px-3 py-1 rounded-md text-white text-xs sm:text-sm" 
                    style={{ backgroundColor: '#7585ff' }}
                    onClick={() => toggleArticles(journalist._id)}
                  >
                    {expandedArticles[journalist._id] ? 'عرض أقل' : 'اقرأ المزيد'}
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JournalistsList;