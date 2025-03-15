import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaFilter, FaCheck, FaTimes } from "react-icons/fa";

const ArticleManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/articles").then((res) => setArticles(res.data));
  }, []);

  const updateArticleStatus = (id, newStatus) => {
    axios.put(`http://localhost:5000/api/articles/${id}`, { status: newStatus }).then((res) => {
      setArticles(articles.map((article) => (article._id === id ? res.data : article)));
    });
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.includes(searchTerm) || article.author.includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full p-6 bg-[#f9f9fb] min-h-screen" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">إدارة المقالات</h1>
      <div className="flex gap-4">
        <input type="text" placeholder="بحث..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">جميع الفئات</option>
          {[...new Set(articles.map(article => article.category))].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>العنوان</th><th>الكاتب</th><th>الفئة</th><th>التاريخ</th><th>الحالة</th><th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((article) => (
            <tr key={article._id}>
              <td>{article.title}</td>
              <td>{article.author}</td>
              <td>{article.category}</td>
              <td>{new Date(article.date).toLocaleDateString()}</td>
              <td>{article.status}</td>
              <td>
                <button onClick={() => updateArticleStatus(article._id, "approved")}><FaCheck /></button>
                <button onClick={() => updateArticleStatus(article._id, "declined")}><FaTimes /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleManagement;
